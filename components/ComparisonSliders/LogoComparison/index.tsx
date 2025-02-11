import { ImgComparisonSlider } from '@img-comparison-slider/react';

export default function LogoComparison() {
  return (
    <div style={{}}>
    <ImgComparisonSlider
    >
      <img className="bg-slate-500 block w-full lg:h-[175px]" slot="first" src="/Aether/AetherOld.png" />
      <figcaption>Before</figcaption>
      <img className="block w-full lg:h-[175px] p-4" slot="second" src="/Aether/AetherNew.png" />
      <figcaption>After</figcaption>
    </ImgComparisonSlider>
    </div>

  );
}

