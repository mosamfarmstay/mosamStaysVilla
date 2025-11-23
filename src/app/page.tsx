"use client";

import React from "react";
import ContactUsForm from "@/components/contact-us";
import FaqSection from "@/components/faq-section";
import MosamFeatures from "@/components/features";
import Hero from "@/components/hero/hero";
import Quote from "@/components/quote/quote";
import RevealOnScroll from "@/components/custom/RevealOnScroll";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <RevealOnScroll>
        <Hero />
      </RevealOnScroll>

      <RevealOnScroll>
        <MosamFeatures />
      </RevealOnScroll>

      <RevealOnScroll>
        <Quote />
      </RevealOnScroll>

      <RevealOnScroll>
        <FaqSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <ContactUsForm />
      </RevealOnScroll>
    </main>
  );
}
