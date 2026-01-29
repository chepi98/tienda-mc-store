"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const initialState = {
  name: "",
  city: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-3xl border border-line/50 bg-white/80 p-8 shadow-[0_24px_70px_rgba(15,15,15,0.06)]"
    >
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
          Nombre
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="input-luxe mt-2 w-full"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
          Ciudad
        </label>
        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          required
          className="input-luxe mt-2 w-full"
          placeholder="Cali, Jamundí u otra"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
          Mensaje
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
          className="input-luxe mt-2 w-full"
          placeholder="¿Qué producto deseas cotizar?"
        />
      </div>
      <input
        name="company"
        value={form.company}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden={true}
      />
      <button
        type="submit"
        className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_16px_40px_rgba(15,15,15,0.22)] transition hover:-translate-y-0.5 hover:bg-ink/90"
      >
        Enviar solicitud
      </button>
      {status === "success" ? (
        <p className="text-sm text-ink-soft">
          Gracias. Te contactaremos muy pronto con una propuesta.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-ink-soft">
          No se pudo enviar. Puedes escribirnos directamente por WhatsApp.
        </p>
      ) : null}
    </form>
  );
}


