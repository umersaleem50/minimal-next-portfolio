"use client";

import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import { HomeSection } from "@/components/home/home-section";
import { contactConfig } from "@/config/contact";

async function copyText(text: string) {
  if (navigator.clipboard) return navigator.clipboard.writeText(text);
  // Fallback for non-secure contexts where the Clipboard API is unavailable.
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { email, whatsappNumber, whatsappMessage } = contactConfig;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const onCopy = async () => {
    await copyText(email);
    setCopied(true);
  };

  return (
    <HomeSection
      id="contact"
      tone="dark"
      eyebrow="Contact"
      title="Have a project in mind? Let's talk."
      description="Pick whatever is easiest for you — a quick WhatsApp chat or a detailed email."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-xl sm:p-10 lg:col-span-3">
          <div className="flex items-center justify-between gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/5">
              <Mail className="h-6 w-6 text-emerald-300" aria-hidden="true" />
            </div>
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-white"
            >
              Open mail app
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <p className="mt-12 text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Email me</p>
          <button
            type="button"
            onClick={onCopy}
            aria-label={`Copy ${email} to clipboard`}
            className="group mt-4 text-left font-heading text-3xl leading-tight text-white transition hover:text-emerald-200 focus:outline-none focus-visible:text-emerald-200 sm:text-5xl xl:text-6xl"
          >
            <span className="break-all">{email}</span>
          </button>

          <div className="mt-auto pt-10">
            <span
              aria-live="polite"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  Copied to clipboard
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  Click the address to copy
                </>
              )}
            </span>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-[2rem] bg-emerald-300 p-7 text-slate-950 transition hover:bg-emerald-200 sm:p-10 lg:col-span-2"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-emerald-300">
              <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
            </div>
            <ArrowUpRight className="h-7 w-7 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.24em] text-slate-700">WhatsApp</p>
          <h3 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">Start a chat</h3>
          <p className="mt-4 max-w-sm leading-7 text-slate-800">
            Quick questions, project briefs or just a hello — message me directly.
          </p>
          <div className="mt-auto pt-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white">
              Message on WhatsApp
            </span>
          </div>
        </a>
      </div>
    </HomeSection>
  );
}
