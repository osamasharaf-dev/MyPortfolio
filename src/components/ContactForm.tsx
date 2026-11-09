"use client";

import { useState } from "react";
import { BUDGETS, PROFILE } from "@/data/profile";
import { EMAILJS_CONFIG, emailjsReady } from "@/config/emailjs";
import BudgetSelect from "./BudgetSelect";
import { Arrow, Close } from "./Icons";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [trap, setTrap] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [sheet, setSheet] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please write your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) e.email = "Please add a valid email address.";
    if (message.trim().length < 10) e.message = "Tell me a little more about the project.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (trap) return;
    if (!validate()) return;
    const b = BUDGETS.find((x) => x.id === budget);
    const budgetText = b ? `${b.name} (${b.range})` : "Not specified";
    if (!emailjsReady()) {
      const body = `Name: ${name}\nCompany: ${company || "-"}\nEmail: ${email}\nBudget: ${budgetText}\n\n${message}`;
      window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("New project inquiry from " + name)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setState("sending");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        { from_name: name, company: company || "-", reply_to: email, budget: budgetText, message },
        { publicKey: EMAILJS_CONFIG.publicKey },
      );
      setState("sent");
      setName("");
      setCompany("");
      setEmail("");
      setBudget("");
      setMessage("");
    } catch {
      setState("failed");
    }
  };

  return (
    <>
    <button type="button" className="btn btn-blue form-open" onClick={() => setSheet(true)} aria-haspopup="dialog">
      Write me a message <Arrow />
    </button>
    <div className={`sheet${sheet ? " open" : ""}`}>
    <form className="form" onSubmit={submit} noValidate aria-label="Project inquiry">
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
      <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={trap} onChange={(e) => setTrap(e.target.value)} name="website" />
      <button className="btn btn-blue send" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send message"} <Arrow />
      </button>
      <p className={`status${state === "sent" ? " ok" : ""}`} role="status" aria-live="polite">
        {state === "sent" ? "Thank you! Your message is on its way. I will reply within one working day." : null}
        {state === "failed" ? "Something went wrong. Please try WhatsApp or email instead." : null}
      </p>
    </form>
    </div>
    </>
  );
}
