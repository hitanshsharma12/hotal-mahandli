"use client";

import { Menu, PhoneCall, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/data";

type Props = {
  onBook: () => void;
};

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Rooms", "#pricing"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

export default function Navbar({ onBook }: Props) {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="luxury-glass luxury-border mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 shadow-luxury">
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8b35a]/30 bg-[#d8b35a]/10">
            <Sparkles className="h-5 w-5 text-[#e7c56d]" />
          </div>
          <div>
            <p className="luxury-serif text-lg font-semibold tracking-wide text-[#fff4cf]">
              {site.name}
            </p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
              Crafted by {site.brand}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-white/70 transition hover:text-[#f6e6b8]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+91${site.phone}`}
            className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/75 transition hover:border-[#d8b35a]/40 hover:text-white md:inline-flex"
          >
            <PhoneCall className="h-4 w-4" />
            {site.phone}
          </a>
          <button
            onClick={onBook}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d3ad55] via-[#f4df96] to-[#b8892f] px-4 py-2 text-sm font-semibold text-[#08111b] shadow-lg shadow-[#d8b35a]/20 transition hover:scale-[1.03]"
          >
            Book Now
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
