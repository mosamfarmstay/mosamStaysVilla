"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import featuresData from "../lib/data/features.json";
import FadingImage from "@/components/custom/FadingImage";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
}

const typedFeaturesData: Feature[] = featuresData as Feature[];

export default function MosamFeatures() {
  const [value, setValue] = useState<string | undefined>(
    typedFeaturesData?.length ? `feat-0` : undefined
  );

  const activeIndex = value ? Number(value.replace("feat-", "")) : 0;

  return (
    <section id="features" className="p-8 md:p-16 ">
      <h1 className="text-2xl md:text-[56px] text-center mb-16 md:mb-24 font-bold">
        Escape to opulence,
        <br />
        tranquility, and relaxation at
        <br />
        the Harbour.
      </h1>

      <div className="flex flex-col md:flex-row gap-20 max-w-6xl mx-auto">
        {/* Left Side */}
        <div className="w-full md:w-2/5 lg:w-1/2 flex flex-col justify-center">
          <Accordion
            type="single"
            collapsible
            value={value}
            onValueChange={(v) => {
              setValue(v === "" ? "feat-0" : v);
            }}
          >
            {typedFeaturesData.map((feature, index) => (
              <AccordionItem value={`feat-${index}`} key={feature.title}>
                <AccordionTrigger
                  className={`py-3 transition-opacity duration-500 ease-in cursor-pointer text-left flex items-center justify-between no-chevron w-full ${
                    value === `feat-${index}`
                      ? "text-[#000000]"
                      : "text-[#2b2a2a]"
                  }`}
                >
                  <h3 className="text-[25px] font-medium">{feature.title}</h3>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="pt-2 pb-2">
                    <p className="text-[#646363] text-[16px] font-sans">
                      {feature.description}
                    </p>

                    {/* Mobile only images */}

                    <div className="md:hidden w-full mt-6">
                      <div className="relative w-full aspect-video overflow-hidden rounded-3xl mb-4">
                        <FadingImage feature={typedFeaturesData[index]} />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-2/3 md:flex items-center justify-center hidden">
          <div className="relative w-3/4 aspect-square overflow-hidden rounded-[50px] bg-gray-100">
            {typedFeaturesData[activeIndex] && (
              <FadingImage
                key={typedFeaturesData[activeIndex].imageUrl}
                feature={typedFeaturesData[activeIndex]}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
