"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type HeroSlideshowProps = {
  images: string[];
  alt: string;
};

export default function HeroSlideshow({ images, alt }: HeroSlideshowProps) {
  const slides = useMemo(
    () => images.filter((src) => src && src.trim().length > 0),
    [images],
  );
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      const upcoming = (index + 1) % slides.length;
      setNextIndex(upcoming);
      setIsFading(true);

      const timeout = setTimeout(() => {
        setIndex(upcoming);
        setIsFading(false);
      }, 700);

      return () => clearTimeout(timeout);
    }, 10000);

    return () => clearInterval(interval);
  }, [index, slides.length]);

  const currentSrc = slides.length ? slides[index] : "/imagenes/home-hero.jpg";
  const upcomingSrc =
    slides.length > 1 ? slides[nextIndex % slides.length] : currentSrc;

  return (
    <div className="relative h-full w-full">
      <Image
        src={currentSrc}
        alt={alt}
        width={640}
        height={420}
        priority={index === 0}
        className="h-full w-full object-cover"
      />
      {slides.length > 1 ? (
        <Image
          src={upcomingSrc}
          alt={alt}
          width={640}
          height={420}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            isFading ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : null}
    </div>
  );
}
