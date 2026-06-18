import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#050b14]/80 px-6 py-8 shadow-luxury">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="luxury-serif text-2xl text-white">{site.name}</p>
            <p className="mt-2 text-sm text-white/60">
              Luxury homestay website built by {site.brand}. All bookings go to WhatsApp {site.whatsapp}.
            </p>
          </div>
          <div className="text-sm text-white/55">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
