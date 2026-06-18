"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingDrawer from "@/components/BookingDrawer";
import About from "@/components/About";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import LocationHighlights from "@/components/LocationHighlights";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden text-white">
      <Navbar onBook={() => setBookingOpen(true)} />
      <Hero onBook={() => setBookingOpen(true)} />
      <About />
      <Features />
      <Pricing />
      <Gallery />
      <Amenities />
      <Testimonials />
      <LocationHighlights />
      <WhatsAppCTA />
      <FAQ />
      <Contact />
      <Footer />
      <BookingDrawer open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
