import { ImgComparisonSlider } from "@img-comparison-slider/react";

export default function LogoComparison() {
  return (
    <div className="m-4">
      <ImgComparisonSlider>
        <figure slot="first" className="relative m-0">
          <img
            className="bg-slate-500 block w-full h-[90px] xl:h-[150px] xl:pb-8"
            src="/aether/AetherOld.webp"
          />
          <figcaption className="absolute top-[65%] left-3 -translate-y-1/2 bg-white border border-gray-400 rounded-xl text-[#2e3452] opacity-30 p-3 leading-none">
            Before
          </figcaption>
        </figure>
        <figure slot="second" className="relative m-0">
          <img
            className="block w-full xl:h-[125px] p-4"
            src="/aether/AetherNew.webp"
          />
          <figcaption className="absolute top-[25%] right-3 -translate-y-1/2 bg-white border border-gray-400 rounded-xl text-[#2e3452] opacity-30 p-3 leading-none">
            After
          </figcaption>
        </figure>
      </ImgComparisonSlider>
    </div>
  );
};
