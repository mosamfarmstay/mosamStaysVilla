"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import faqData from "../lib/data/faq.json";

interface FaqItemData {
  question: string;
  answer: string;
}

const typedFaqData: FaqItemData[] = faqData as FaqItemData[];

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-10">
      <div className="text-center mb-10 mx-5">
        <h1 className="text-3xl md:text-[56px] text-center mb-20">
          Your Questions, Answered
        </h1>
      </div>

      <div className="max-w-3xl mx-auto px-2">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {typedFaqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl my-3 mx-3 bg-white duration-200 overflow-hidden last:rounded-b-xl last:border-b"
            >
              <AccordionTrigger className="px-4 py-2 pl-5 pt-2 no-underline hover:no-underline">
                <div className="flex items-start justify-between w-full">
                  <h3 className="text-lg font-sans text-[16px] font-semibold leading-relaxed text-stone-700 cursor-pointer">
                    {item.question}
                  </h3>
                </div>
              </AccordionTrigger>

              <AccordionContent className="transition-all duration-300 p-5 pb-3 pt-1">
                <p className="text-[15px] font-sans text-[#656565] pr-6">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
