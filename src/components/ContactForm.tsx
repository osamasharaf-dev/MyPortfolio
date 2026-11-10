"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BUDGETS, PROFILE } from "@/data/profile";
import { EMAILJS_CONFIG, emailjsReady } from "@/config/emailjs";
import BudgetSelect from "./BudgetSelect";
import { Arrow, Check, Close } from "./Icons";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const REMEMBER_KEY = "os-contact-details";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [trap, setTrap] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [flying, setFlying] = useState(false);
  const [sheet, setSheet] = useState(false);
  const [portal, setPortal] = useState(false);

  const anchor = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const sendRef = useRef<HTMLButtonElement>(null);

  // On phones, inside the home scenes, the sheet is moved to <body> so position:fixed is not trapped by a transformed parent.
  useEffect(() => {
    setPortal(Boolean(anchor.current?.closest(".deck")) && window.matchMedia("(max-width: 759px)").matches);
    try {
      const raw = localStorage.getItem(REMEMBER_KEY);
      if (raw) {
        const d = JSON.parse(raw) as { name?: string; company?: string; email?: string };
        setName(d.name ?? "");
        setCompany(d.company ?? "");
        setEmail(d.email ?? "");
        setRemember(true);
      }
    } catch {
      /* storage can be blocked; the form still works */
    }
  }, []);

  useEffect(() => {
    if (portal) document.body.style.overflow = sheet ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheet, portal]);

  const validate = () => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please write your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) e.email = "Please add a valid email address.";
    if (message.trim().length < 10) e.message = "Tell me a little more about the project.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Moves the send button to the centre of the form before the request starts.
  const flyToCentre = () => {
    const f = formRef.current?.getBoundingClientRect();
    const b = sendRef.current?.getBoundingClientRect();
    if (!f || !b || !sendRef.current) return;
    const dx = f.left + f.width / 2 - (b.left + b.width / 2);
    const dy = f.top + f.height / 2 - (b.top + b.height / 2);
    sendRef.current.style.setProperty("--fx", `${dx}px`);
    sendRef.current.style.setProperty("--fy", `${dy}px`);
    setFlying(true);
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (trap) return;
    if (!validate()) return;
    const b = BUDGETS.find((x) => x.id === budget);
    const budgetText = b ? b.name : "Not specified";
    if (!emailjsReady()) {
      const body = `Name: ${name}\nCompany: ${company || "-"}\nEmail: ${email}\nBudget: ${budgetText}\n\n${message}`;
      window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("New project inquiry from " + name)}&body=${encodeURIComponent(body)}`;
      return;
    }
    flyToCentre();
    setState("sending");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        { from_name: name, company: company || "-", reply_to: email, budget: budgetText, message },
        { publicKey: EMAILJS_CONFIG.publicKey },
      );
      try {
        if (remember) localStorage.setItem(REMEMBER_KEY, JSON.stringify({ name, company, email }));
        else localStorage.removeItem(REMEMBER_KEY);
      } catch {
        /* ignore storage errors */
      }
      setState("sent");
      setMessage("");
      setBudget("");
      if (!remember) {
        setName("");
        setCompany("");
        setEmail("");
      }
      setTimeout(() => setFlying(false), 2800);
    } catch {
      setFlying(false);
      setState("failed");
    }
  };

  const sheetNode = (
    <div className={`sheet${portal ? " portal" : ""}${sheet ? " open" : ""}`}>
      <form className="form" ref={formRef} onSubmit={submit} noValidate aria-label="Project inquiry">
        <button type="button" className="sheet-close" onClick={() => setSheet(false)} aria-label="Close the form">
          <Close />
        </button>
        <div className="form-row">
          <div className="field">
            <label htmlFor="f-name">Your name</label>
            <input id="f-name" className="input" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Sara Al-Qahtani" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "e-name" : undefined} />
            {errors.name ? (
              <span className="err" id="e-name">
                {errors.name}
              </span>
            ) : null}
          </div>
          <div className="field">
            <label htmlFor="f-company">
              Company <em>(optional)</em>
            </label>
            <input id="f-company" className="input" value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" placeholder="Studio Najd" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" inputMode="email" placeholder="you@company.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "e-email" : undefined} />
          {errors.email ? (
            <span className="err" id="e-email">
              {errors.email}
            </span>
          ) : null}
        </div>
        <BudgetSelect value={budget} onChange={setBudget} />
        <div className="field">
          <label htmlFor="f-msg">Project details</label>
          <textarea id="f-msg" className="input" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What are you building, and when do you need it?" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "e-msg" : undefined} />
          {errors.message ? (
            <span className="err" id="e-msg">
              {errors.message}
            </span>
          ) : null}
        </div>
        <label className="remember">
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
          <span>Remember my details on this device</span>
          <em>(optional)</em>
        </label>
        <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={trap} onChange={(e) => setTrap(e.target.value)} name="website" />
        <button ref={sendRef} className={`btn btn-blue send${flying ? " fly" : ""}${state === "sent" ? " done" : ""}`} type="submit" disabled={state === "sending" || state === "sent"}>
          {state === "sending" ? (
            <>
              <span className="spin" aria-hidden="true" />
              Sending your request
            </>
          ) : state === "sent" ? (
            <>
              <Check size={20} />
              Request sent
            </>
          ) : (
            <>
              Send my project request <Arrow />
            </>
          )}
        </button>
        <p className={`status${state === "sent" ? " ok" : ""}`} role="status" aria-live="polite">
          {state === "sent" ? "Thank you! Your request is on its way. I will reply within one working day." : null}
          {state === "failed" ? "Something went wrong. Please try WhatsApp or email instead." : null}
        </p>
      </form>
    </div>
  );

  return (
    <>
      <div ref={anchor}>
        <button type="button" className="btn btn-blue form-open" onClick={() => setSheet(true)} aria-haspopup="dialog">
          Write me a message <Arrow />
        </button>
      </div>
      {portal ? createPortal(sheetNode, document.body) : sheetNode}
    </>
  );
}
