import { ImgComparisonSlider } from "@img-comparison-slider/react";

export default function NavComparison() {
  return (
    <div>
      <ImgComparisonSlider>
        <img
          className="h-[300px] lg:h-[500px]"
          slot="first"
          src="/pocketProf/ppMainBefore.png"
        />
        <figcaption>Before</figcaption>
        <img
          className="h-[300px] lg:h-[500px]"
          slot="second"
          src="/pocketProf/ppMainAfter.png"
        />
        <figcaption>After</figcaption>
      </ImgComparisonSlider>
    </div>
  );
};
