import { CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { amenities } from "@/lib/data";

export default function Amenities() {
  return (
    <section id="amenities" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Amenities"
          title="Everything guests need is right here."
          description="This section stays practical and readable, with the most useful stays amenities laid out in a clean grid."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {amenities.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
              <CheckCircle2 className="h-5 w-5 text-[#e7c56d]" />
              <span className="text-sm font-medium text-white/82">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
