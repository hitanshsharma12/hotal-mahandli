import { Mail, MapPin, Phone, MessageCircle, type LucideIcon } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { site } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact Section"
          title="Everything a guest needs to reach you fast."
          description="The contact block keeps phone, WhatsApp, and address visible for quick action."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="luxury-glass luxury-border rounded-[2rem] p-6 shadow-luxury">
            <ContactRow icon={MapPin} title="Address" value={site.address} />
            <ContactRow icon={Phone} title="Phone" value={site.phone} />
            <ContactRow icon={MessageCircle} title="Booking WhatsApp" value={site.whatsapp} />
            <ContactRow icon={Mail} title="Brand" value={site.brand} />
          </div>

          <div className="luxury-glass luxury-border overflow-hidden rounded-[2rem] p-4 shadow-luxury">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <img
                src="/banner.jpg"
                alt="Mehandli Home Stay sign board"
                className="h-[360px] w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, value }: { icon: LucideIcon; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#d8b35a]/20 bg-[#d8b35a]/10">
        <Icon className="h-5 w-5 text-[#e7c56d]" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-[#d8b35a]">{title}</p>
        <p className="mt-2 break-words text-sm leading-7 text-white/76">{value}</p>
      </div>
    </div>
  );
}
