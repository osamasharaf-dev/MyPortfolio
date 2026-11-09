"use client";

import { useEffect, useId, useRef, useState } from "react";
import { BUDGETS } from "@/data/profile";
import { Check, Chevron } from "./Icons";

export default function BudgetSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const [act, setAct] = useState(0);
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const cur = BUDGETS.find((b) => b.id === value);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const choose = (i: number) => {
    onChange(BUDGETS[i].id);
    setOpen(false);
    btn.current?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setAct(Math.max(0, BUDGETS.findIndex((b) => b.id === value)));
      setOpen(true);
      return;
    }
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setAct((a) => Math.min(BUDGETS.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setAct((a) => Math.max(0, a - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(act);
    } else if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div className="field" ref={box}>
      <span className="lab" id={`${id}-l`}>
        Budget
      </span>
      <button
        ref={btn}
        type="button"
        className="input select-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-l ${id}-v`}
        aria-activedescendant={open ? `${id}-o${act}` : undefined}
        aria-controls={`${id}-list`}
        onClick={() => {
          setAct(Math.max(0, BUDGETS.findIndex((b) => b.id === value)));
          setOpen((o) => !o);
        }}
        onKeyDown={onKey}
      >
        <span className="v" id={`${id}-v`}>
          {cur ? <span className="medal" style={{ background: cur.color }} /> : null}
          <span>{cur ? `${cur.name} · ${cur.range}` : "Choose a budget range"}</span>
        </span>
        <Chevron />
      </button>
      {open ? (
        <ul className="opts" role="listbox" id={`${id}-list`} aria-labelledby={`${id}-l`}>
          {BUDGETS.map((b, i) => (
            <li
              key={b.id}
              id={`${id}-o${i}`}
              role="option"
              aria-selected={b.id === value}
              className={`opt${act === i ? " act" : ""}`}
              onMouseEnter={() => setAct(i)}
              onClick={() => choose(i)}
            >
              <span className="medal" style={{ background: b.color }} />
              <span>
                <b>{b.name}</b>
                <span className="rg">{b.range}</span>
                <small>{b.text}</small>
              </span>
              <span>{b.id === value ? <Check /> : null}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
