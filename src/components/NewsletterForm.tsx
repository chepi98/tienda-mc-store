"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company: "" }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row">
      <input
        type="email"
        required
        placeholder="Tu email"
        className="input-luxe w-full"
        value={email}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_16px_40px_rgba(15,15,15,0.22)] transition hover:-translate-y-0.5 hover:bg-ink/90"
      >
        {status === "loading" ? "Enviando..." : "Unirme"}
      </button>
      {status === "success" ? (
        <p className="text-sm text-ink-soft">Gracias. Quedaste suscrito.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-ink-soft">No se pudo enviar. Intenta más tarde.</p>
      ) : null}
    </form>
  );
}
