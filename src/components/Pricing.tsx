import { Check } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { pricing } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Room Pricing"
          title="Straightforward pricing for the deluxe mountain room."
          description="The room card is intentionally simple so guests can understand the stay immediately and book without friction."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {pricing.map((room) => (
            <div key={room.name} className="luxury-glass luxury-border rounded-[2rem] p-6 shadow-luxury">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d8b35a]">Featured Room</p>
                  <h3 className="luxury-serif mt-2 text-3xl text-[#fff5d2]">{room.name}</h3>
                </div>
                <div className="text-left sm:text-right">
                  <p className="luxury-serif text-4xl font-semibold text-white">{room.price}</p>
                  <p className="mt-1 text-sm text-white/60">All seasons • direct booking</p>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72">{room.note}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {room.points.map((point) => (
                  <div key={point} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/78">
                    <Check className="h-4 w-4 text-[#e7c56d]" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
