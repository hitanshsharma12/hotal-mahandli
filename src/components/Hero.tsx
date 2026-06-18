"use client";

import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroStats, site } from "@/lib/data";

type Props = {
  onBook: () => void;
};

const floatingDots = Array.from({ length: 8 }, (_, i) => i);

export default function Hero({ onBook }: Props) {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0">
        <Image
          src="/hero-room.png"
          alt="Luxury room at Mehandli Home Stay"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,18,0.18)_0%,rgba(6,11,18,0.62)_50%,rgba(6,11,18,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(216,179,90,0.18),transparent_38%)]" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {floatingDots.map((dot) => (
          <motion.span
            key={dot}
            className="absolute h-2 w-2 rounded-full bg-[#f4df96]/70 blur-[1px]"
            style={{
              left: `${10 + dot * 11}%`,
              top: `${18 + (dot % 4) * 13}%`,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.25, 0.75, 0.25] }}
            transition={{ duration: 4 + dot * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8b35a]/25 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.34em] text-[#f5e7b9] backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-current text-[#d8b35a]" />
            Premium mountain stay
          </div>

          <h1 className="luxury-serif max-w-4xl text-5xl font-semibold leading-[0.95] text-[#fff7df] md:text-7xl">
            The luxury of calm,
            <span className="luxury-gradient-text block">crafted in Mehandli.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
            {site.name} brings a warm, premium homestay feeling with elegant rooms, mountain air, fast WhatsApp
            booking, and a stay experience that feels smooth on every device.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d3ad55] via-[#f4df96] to-[#b8892f] px-6 py-3.5 text-sm font-semibold text-[#08111b] shadow-xl shadow-[#d8b35a]/20 transition hover:scale-[1.02]"
            >
              Book on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white/88 backdrop-blur transition hover:border-[#d8b35a]/35 hover:text-white"
            >
              <PlayCircle className="h-4 w-4" />
              View Rooms
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            {heroStats.map((item) => (
              <div key={item.label} className="luxury-glass luxury-border rounded-3xl p-4 shadow-luxury">
                <p className="luxury-serif text-2xl font-semibold text-[#fff4cc] md:text-3xl">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative lg:mt-8"
        >
          <div className="luxury-glass luxury-border relative overflow-hidden rounded-[2rem] p-4 shadow-luxury">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%,rgba(216,179,90,0.12))]" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src="/banner.jpg"
                alt="Mehandli Home Stay banner"
                width={1200}
                height={900}
                className="h-[420px] w-full object-cover object-center sm:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111d]/92 via-[#07111d]/12 to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/12 bg-[#07111d]/72 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.28em] text-[#e8cb7d]">Booking line</p>
                <p className="luxury-serif mt-2 text-2xl font-semibold text-white">7018796714</p>
                <p className="mt-1 text-sm text-white/68">All bookings redirect to WhatsApp.</p>
              </div>
              <div className="rounded-3xl border border-white/12 bg-[#07111d]/72 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.28em] text-[#e8cb7d]">Room price</p>
                <p className="luxury-serif mt-2 text-2xl font-semibold text-white">₹1999 / Night</p>
                <p className="mt-1 text-sm text-white/68">Deluxe mountain room with comfort-first design.</p>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-10 hidden rounded-3xl border border-[#d8b35a]/25 bg-[#0d1725]/85 p-4 shadow-luxury backdrop-blur md:block"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[#e8cb7d]">Premium stay</p>
            <p className="luxury-serif mt-1 text-xl text-white">Elegant, calm, and warm.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
