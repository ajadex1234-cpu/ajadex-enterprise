"use client";

import { FormEvent, useMemo, useState } from "react";
import { contactFormProjectOptions } from "@/data/contact";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [projectType, setProjectType] = useState("New ecommerce website");
  const [message, setMessage] = useState("");

  const inquiryText = useMemo(() => {
    return [
      "Hi AJADEX, I want to discuss a project.",
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Brand/business: ${brand || "Not provided"}`,
      `Project type: ${projectType}`,
      "",
      "Project details:",
      message || "Not provided",
    ].join("\n");
  }, [brand, email, message, name, projectType]);

  const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Project Inquiry for AJADEX",
  )}&body=${encodeURIComponent(inquiryText)}`;

  const whatsappHref = `https://wa.me/${siteConfig.phoneE164}?text=${encodeURIComponent(
    inquiryText,
  )}`;

  const handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = emailHref;
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleEmailSubmit}
      className="rounded-lg border border-white/10 bg-white/[0.035] p-7 md:p-10"
    >
      <h2 className="text-3xl font-black">Project inquiry</h2>
      <p className="mt-3 leading-7 text-zinc-400">
        Fill this in once, then send it through email or WhatsApp.
      </p>

      <div className="mt-8 grid gap-4">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          className="rounded-lg border border-white/10 bg-black px-5 py-4 outline-none placeholder:text-zinc-600 focus:border-emerald-300/60"
        />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          className="rounded-lg border border-white/10 bg-black px-5 py-4 outline-none placeholder:text-zinc-600 focus:border-emerald-300/60"
        />
        <input
          type="text"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
          placeholder="Brand or business name"
          className="rounded-lg border border-white/10 bg-black px-5 py-4 outline-none placeholder:text-zinc-600 focus:border-emerald-300/60"
        />
        <select
          value={projectType}
          onChange={(event) => setProjectType(event.target.value)}
          className="rounded-lg border border-white/10 bg-black px-5 py-4 outline-none focus:border-emerald-300/60"
        >
          {contactFormProjectOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="What do you want to build or improve?"
          rows={5}
          className="rounded-lg border border-white/10 bg-black px-5 py-4 outline-none placeholder:text-zinc-600 focus:border-emerald-300/60"
        />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          className="inline-flex justify-center rounded-full bg-white px-7 py-4 font-bold text-black transition hover:scale-[1.02]"
        >
          Send by Email
        </button>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-7 py-4 font-bold text-emerald-100 transition hover:bg-emerald-400 hover:text-black"
        >
          Send on WhatsApp
        </a>
      </div>
    </form>
  );
}
