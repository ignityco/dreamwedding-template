"use client";

import { configData } from "@/sources/configData";
import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import Gallery from "@/components/Gallery";
import Message from "@/components/Message/Message";
import ShareCapsule from "@/components/ShareCapsule";
import VideoMemories from "@/components/VideoMemories";
import Thankyou from "@/components/Thankyou";

export default function Home() {
  const { defaultSections } = configData;
  const componentMap = {
    gallery: <Gallery />,
    message: <Message />,
    sharecapsule: <ShareCapsule />,
    video: <VideoMemories />,
    couple: <Couple />,
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
