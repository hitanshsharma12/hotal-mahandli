import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { gallery } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Gallery"
          title="A clean visual story of the stay."
          description="Three room images are featured here exactly as requested, keeping the gallery uncluttered and premium."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {gallery.map((item) => (
            <figure key={item.src} className="luxury-glass luxury-border overflow-hidden rounded-[2rem] shadow-luxury">
              <div className="relative h-80">
                <Image src={item.src} alt={item.alt} fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111d]/78 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/12 bg-[#07111d]/60 px-4 py-3 text-sm backdrop-blur">
                  <span className="text-[#f1d68d]">{item.label}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
