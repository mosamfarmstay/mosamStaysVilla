const Cta = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6 bg-[#fffdec] py-6 px-4">
      <h1 className="text-4xl md:text-[56px] text-center  md:max-w-[700px]">
        Your tranquil <br /> getaway, starts here.
      </h1>

      <a
        href="https://wa.me/919850342555?text=Hey%20there!%20I%20want%20to%20book%20villa%20at%20Mosam.%20Can%20you%20please%20send%20me%20more%20details%3F"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="text-white bg-gray-900 h-[41px] w-[133px] mt-4 rounded-full cursor-pointer text-sm sm:text-baseshadow-md">
          Book Now
        </button>
      </a>
    </div>
  );
};
//https://wa.me/919850342555?text=Hey%20there!%20I%20want%20to%20book%20villa%20at%20Mosam.%20Can%20you%20please%20send%20me%20more%20details%3F

export default Cta;
