import { ImgComparisonSlider } from "@img-comparison-slider/react";

export default function LogoComparison() {
  return (
    <div>
      <ImgComparisonSlider>
        <img
          className="bg-slate-500 block w-full lg:h-[550px]"
          slot="first"
          src="/aether/appOld.png"
        />
        <figcaption className="text-2xl text-black">Before</figcaption>
        <img
          className=" block w-full lg:h-[550px]"
          slot="second"
          src="/aether/appNew.png"
        />
        <figcaption>After</figcaption>
      </ImgComparisonSlider>
    </div>
  );
};
