import { ImgComparisonSlider } from "@img-comparison-slider/react";

export default function NavComparison() {
  return (
    <div className="w-[300px]">
      <ImgComparisonSlider>
        <figure slot="first">
          <img
            className="h-[64px]"
            slot="first"
            src="/pocketProf/navBefore.webp"
          />
          <figcaption className="absolute top-[65%] left-3 -translate-y-1/2 bg-white border border-gray-400 rounded-xl text-[#2e3452] opacity-60 p-3 leading-none">
            Before
          </figcaption>
        </figure>
        <figure slot="second">
          <img
            className="h-full"
            slot="second"
            src="/pocketProf/navAfter.webp"
          />
          <figcaption className="absolute top-[35%] right-3 -translate-y-1/2 bg-white border border-gray-400 rounded-xl text-[#2e3452] opacity-60 p-3 leading-none">
            After
          </figcaption>
        </figure>
      </ImgComparisonSlider>
    </div>
  );
}
