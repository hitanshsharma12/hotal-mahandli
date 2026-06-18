import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";
import { site } from "@/lib/data";

export default function WhatsAppCTA() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="luxury-border luxury-glass rounded-[2rem] p-6 shadow-luxury md:p-8">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b35a]">WhatsApp Booking CTA</p>
              <h3 className="luxury-serif mt-3 text-3xl text-white md:text-4xl">
                Book instantly on WhatsApp and lock your stay.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                Every booking is sent to {site.whatsapp}. The same link works cleanly on desktop, Android, and iPhone.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={site.whatsappLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d3ad55] via-[#f4df96] to-[#b8892f] px-6 py-3.5 text-sm font-semibold text-[#08111b] shadow-xl shadow-[#d8b35a]/20 transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </a>
              <Link
                href={`tel:+91${site.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white/85 transition hover:border-[#d8b35a]/35"
              >
                <PhoneCall className="h-4 w-4" />
                Call {site.phone}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
