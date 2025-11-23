import Image from "next/image";
import heroImage from "../../../public/hero/hero.svg";
import { cn } from "@/lib/utils";
import { inter, lustria } from "@/fonts/lustria";

const Hero = () => {
  return (
    <div className="relative mb-14">
      <h1
        className={cn(
          "text-[8vw] md:text-[64px] text-center md:mt-[87px] mt-[75px] serif-font",
          lustria.className
        )}
      >
        Your tranquil getaway, <br />
        starts here.
      </h1>
      <a
        href="https://wa.me/919850342555?text=Hey%20there!%20I%20want%20to%20book%20villa%20at%20Mosam.%20Can%20you%20please%20send%20me%20more%20details%3F"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className={cn(
            "relative z-10 button block mx-auto mt-8 font-semibold",
            inter.className
          )}
        >
          Book Now
        </button>
      </a>
      <Image
        src={heroImage}
        alt="Hero Image"
        className="relative mt-10 md:-mt-10 w-full mask-hero"
        priority
      />
      <div className="flex flex-col gap-6 items-center justify-center text-center mt-20 lg:mt-18 px-4 mb-16 ">
        <h1 className="text-2xl md:text-[56px] text-center mb-4 md:mb-4 max-w-[90%] md:max-w-[650px]">
          Nothing short of <br /> serenity and opulence.
        </h1>

        <p className="text-sm sm:text-base max-w-[90%] md:max-w-[600px] font-sans text-[#070707]">
          A British style dreamy wooden cottage villa in Nashik-Igatpuri, built
          with love and surrounded by nature. Enjoy serene landscapes and cozy
          comfort, making it an ideal and affordable retreat for couples,
          families and nature lovers.
        </p>

        <a
          href="https://wa.me/919850342555?text=Hey%20there!%20I%20want%20to%20book%20villa%20at%20Mosam.%20Can%20you%20please%20send%20me%20more%20details%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={cn(
              "relative z-10 button block mx-auto mt-8 font-semibold",
              inter.className
            )}
          >
            Book Now
          </button>
        </a>
      </div>
    </div>
  );
  return (
    <div className="bg-[#fffdec] h-full">
      {/* HERO SECTION */}
      <div className="relative w-full aspect-3/4 md:h-screen overflow-hidden bg-[#fffdec]">
        {/* TITLE */}
        <p className="relative z-20 pl-2 md:pl-8 lg:pl-12 pt-24 lg:pt-16 md:pt-28 bg-linear-to-b from-[#8B542C] via-[#8B542C]/80 to-transparent bg-clip-text text-transparent text-[50px] md:text-[120px] lg:text-[156px] leading-tight">
          MoSam Farmstay
        </p>

        {/* FADE AT BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full h-40 z-10 bg-linear-to-t from-[#fffdec] to-transparent pointer-events-none"></div>

        {/* IMAGE */}
        <Image src={heroImage} alt="Hero Image" fill className="" priority />
      </div>

      {/* CONTENT BELOW HERO */}
      <div className="flex flex-col gap-6 items-center justify-center text-center mt-20 lg:mt-18 px-4 mb-16 ">
        <h1 className="text-2xl md:text-[56px] text-center mb-4 md:mb-4 max-w-[90%] md:max-w-[650px]">
          Nothing short of <br /> serenity and opulence.
        </h1>

        <p className="text-sm sm:text-base max-w-[90%] md:max-w-[600px] font-sans text-[#070707]">
          A British style dreamy wooden cottage villa in Nashik-Igatpuri, built
          with love and surrounded by nature. Enjoy serene landscapes and cozy
          comfort, making it an ideal and affordable retreat for couples,
          families and nature lovers.
        </p>
        <a
          href="https://wa.me/919850342555?text=Hey%20there!%20I%20want%20to%20book%20villa%20at%20Mosam.%20Can%20you%20please%20send%20me%20more%20details%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-white bg-gray-900 px-6 py-2 rounded-full shadow-md text-sm sm:text-base mt-6">
            Book Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
