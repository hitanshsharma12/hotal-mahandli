"use client";

import { X, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { site } from "@/lib/data";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function BookingDrawer({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    people: "2",
    mobile: "",
    aadhaar: "",
    checkIn: "",
    checkOut: "",
    message: "",
  });

  const canSubmit = useMemo(
    () => Boolean(form.name && form.mobile && form.people && form.checkIn && form.checkOut),
    [form]
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const link = buildWhatsAppLink(form);
    window.location.href = link;
  };

  const update = (key: keyof typeof form) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Booking form"
            className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-white/10 bg-[#07111d]/96 p-5 shadow-2xl md:p-8"
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ type: "spring", damping: 26, stiffness: 250 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d8b35a]">Book on WhatsApp</p>
                <h3 className="luxury-serif mt-2 text-3xl text-white">Send your stay request</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-[#d8b35a]/40 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <Field label="Name" value={form.name} onChange={update("name")} placeholder="Guest name" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Mobile Number" value={form.mobile} onChange={update("mobile")} placeholder="Your phone number" />
                <Field label="Number of People" value={form.people} onChange={update("people")} placeholder="2" type="number" />
              </div>
              <Field label="Aadhaar Card Number" value={form.aadhaar} onChange={update("aadhaar")} placeholder="Last 4 or full number" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Check-in Date" value={form.checkIn} onChange={update("checkIn")} type="date" />
                <Field label="Check-out Date" value={form.checkOut} onChange={update("checkOut")} type="date" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/75">Additional Message</label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Special request, arrival time, family details..."
                  className="min-h-32 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#d8b35a]/45"
                />
              </div>

              <div className="rounded-3xl border border-[#d8b35a]/15 bg-[#d8b35a]/8 p-4 text-sm leading-7 text-white/72">
                All bookings are sent directly to WhatsApp number{" "}
                <span className="font-semibold text-[#ffe8a6]">{site.whatsapp}</span>.
                iPhone and Android both work with the same link.
              </div>

              <button
                disabled={!canSubmit}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d3ad55] via-[#f4df96] to-[#b8892f] px-6 py-4 text-sm font-semibold text-[#08111b] shadow-xl shadow-[#d8b35a]/20 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send to WhatsApp
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

type FieldProps = {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function Field({ label, value, onChange, placeholder, type = "text" }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/75">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#d8b35a]/45"
      />
    </div>
  );
}
