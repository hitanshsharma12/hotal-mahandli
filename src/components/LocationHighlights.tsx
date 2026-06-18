import { MapPinned } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { locationHighlights, site } from "@/lib/data";

export default function LocationHighlights() {
  return (
    <section id="location" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Location Highlights"
          title="Easy to find, scenic to stay."
          description="Guests get the address, nearby access, and the map together so the stay feels practical from the start."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="luxury-glass luxury-border rounded-[2rem] p-6 shadow-luxury">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b35a]/20 bg-[#d8b35a]/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#f4df96]">
              <MapPinned className="h-4 w-4" />
              Address
            </div>
            <p className="luxury-serif mt-5 text-3xl leading-tight text-white">{site.address}</p>
            <div className="mt-6 space-y-3 text-sm leading-7 text-white/70">
              {locationHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-[#f5e7b9]">{item.title}</p>
                  <p className="mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-luxury">
            <iframe
              src="https://maps.google.com/maps?q=Mehandli%20Rohru&t=k&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="520"
              style={{ border: 0 }}
              loading="lazy"
              title="Mehandli Home Stay Google Map Satellite View"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
