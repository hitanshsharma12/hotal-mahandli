import SectionTitle from "./SectionTitle";
import { faq } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Simple answers for quick booking confidence."
          description="No clutter, no noise. The answers stay short and practical."
        />

        <div className="mt-10 grid gap-4">
          {faq.map((item) => (
            <details
              key={item.q}
              className="luxury-glass luxury-border rounded-3xl p-5 shadow-luxury group"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white/90">
                {item.q}
              </summary>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-white/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
