import { Flower } from "lucide-react";
import { FeaturesCarousel } from "./features-carousel";

const PremiumFeatures = () => {
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <h2 className="text-center text-2xl font-light text-[#2BB69C] md:text-4xl">
        Unlock Premium Features Now
      </h2>
      <div className="mb-7 flex items-center justify-center gap-5">
        <hr className="w-10 border" />
        <Flower className="text-slate-300" />
        <hr className="w-10 border" />
      </div>

      {/* Carousel */}
      <FeaturesCarousel />

      <div className="flex flex-col items-center space-y-3 py-7">
        {["UNLOCK NOW", "DETAILS"].map((value, index) => (
          <button
            className="w-fit rounded-full border border-[#4E8F81]/40 bg-green-500 bg-gradient-to-tr from-[#38A288] via-[#38D7B9] to-[#38A288] px-10 py-1 font-medium text-white duration-300 active:scale-95"
            key={index}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PremiumFeatures;
