import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="About Homestay"
            title="A premium homestay feel without overcomplication."
            description="The design is centered on comfort, clarity, and quick booking. Guests can see the room, check the price, and send an instant WhatsApp message in just a few taps."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Clean interiors", "Simple, polished, and guest-ready presentation."],
              ["Mountain side vibe", "Calm visuals with luxury gold accents."],
              ["Fast contact", "Phone, WhatsApp, and map are always visible."],
              ["Editable structure", "Easy to update content, sections, and images later."],
            ].map(([title, desc]) => (
              <div key={title} className="luxury-glass luxury-border rounded-3xl p-5">
                <h3 className="luxury-serif text-2xl text-[#fff3cc]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/68">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="luxury-glass luxury-border overflow-hidden rounded-[2rem] p-4 shadow-luxury">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <Image
              src="/hero-room.png"
              alt="Room preview"
              width={1200}
              height={900}
              className="h-[420px] w-full object-cover object-center"
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#e8cb7d]">Direct booking</p>
              <p className="luxury-serif mt-2 text-2xl text-white">WhatsApp first</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#e8cb7d]">Built for</p>
              <p className="luxury-serif mt-2 text-2xl text-white">Mobile guests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
