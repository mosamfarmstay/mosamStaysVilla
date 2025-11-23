import Image from "next/image";
import quoteImage from "../../../public/quote/mosalQuote.png";

const Quote = () => {
  return (
    <div className="bg-[#fffdec] h-full pb-14">
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen bg-[#fffdec] overflow-hidden">
        <Image
          src={quoteImage}
          alt="Quote Image"
          fill
          className="object-cover object-center pt-10"
          priority
        />

        {/* TEXT OVER IMAGE */}
        <div className="absolute top-30 lg:top-1/4 right-2 sm:right-10 md:right-60 z-10 text-left px-4 w-[90%] sm:w-[60%] md:w-[420px] flex flex-col gap-4 sm:gap-6">
          <p className="text-[#8B542C] text-base sm:text-lg md:text-xl leading-relaxed">
            “Awakening to harmonious bird tunes, delighting in the magic of
            forest walks, and admiring the breathtaking spectacle of the cliffs.
            A tranquil getaway and the variety of pursuits is vast.”
          </p>

          <p className="text-[#8B542C] text-sm sm:text-base text-right lg:text-left">
            — Sarah Collins
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
