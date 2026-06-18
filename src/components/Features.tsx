import { BedDouble, Mountain, ShieldCheck, Wifi } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { features } from "@/lib/data";

const icons = [Mountain, ShieldCheck, BedDouble, Wifi];

export default function Features() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Premium Features"
          title="Luxury details that feel premium on every screen."
          description="A clean hero, warm room visuals, elegant cards, and a smooth booking flow keep the site visually rich while staying simple to edit."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={item.title} className="luxury-glass luxury-border rounded-[1.75rem] p-6 shadow-luxury">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d8b35a]/20 bg-[#d8b35a]/10">
                  <Icon className="h-5 w-5 text-[#e7c56d]" />
                </div>
                <h3 className="luxury-serif text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
