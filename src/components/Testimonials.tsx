import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Testimonials"
          title="Real guest feedback kept simple and elegant."
          description="The text matches the reviews you shared, presented in a premium card layout."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="luxury-glass luxury-border rounded-[2rem] p-6 shadow-luxury">
              <div className="flex items-center gap-1">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-[#e7c56d] text-[#e7c56d]" />
                ))}
              </div>
              <p className="luxury-serif mt-5 text-2xl text-[#fff4cf]">“{item.text}”</p>
              <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/55">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
