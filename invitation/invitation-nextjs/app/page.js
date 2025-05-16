"use client";

import { configData } from "@/sources/configData";
import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import Journey from "@/components/Journey";
import Event from "@/components/Event";
import RSVP from "@/components/RSVP/RSVP";
import Gallery from "@/components/Gallery";
import Gifts from "@/components/Gifts/Gifts";
import Thankyou from "@/components/Thankyou";
import Quote from "@/components/Quote";

export default function Home() {
  const { defaultSections } = configData;
  const componentMap = {
    quote: <Quote />,
    couple: <Couple />,
    journey: <Journey />,
    event: <Event />,
    rsvp: <RSVP />,
    gallery: <Gallery />,
    gift: <Gifts />,
    thankyou: <Thankyou />
  };

  return (
    <div className="container px-4 py-4 lg:px-6">
      <Hero />
      
      {defaultSections
        .filter((section) => section.enabled)
        .sort((a, b) => a.order - b.order)
        .map((section) => (
          <div key={section.name}>{componentMap[section.name]}</div>
        ))}
    </div>
  );
}
