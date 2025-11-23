"use client";

import { useState } from "react";
import Image from "next/image";

interface Feature {
  title: string;
  imageUrl: string;
  description?: string;
}

export default function FadingImage({ feature }: { feature: Feature }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={feature.imageUrl}
      alt={feature.title}
      fill
      priority
      onLoad={() => setIsLoading(false)}
      style={{ objectFit: "cover" }}
      className={`transition-all duration-700 ease-in-out ${
        isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    />
  );
}
