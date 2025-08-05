"use client";

import { Carousel } from "./carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Birthday Celebration",
      button: "Know More",
      src: "/images/event-photos/event-19.jpg",
    },
    {
      title: "Baby Shower",
      button: "Know More",
      src: "/images/event-photos/event-17.jpg",
    },
    {
      title: "Naming Ceremony",
      button: "Know More",
      src: "/images/event-photos/event-18.jpg",
    },
    // {
    //   title: "Desert Whispers",
    //   button: "Explore Component",
    //   src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
