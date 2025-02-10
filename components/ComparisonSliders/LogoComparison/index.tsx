import { ImgComparisonSlider } from '@img-comparison-slider/react';

// ...

export default function LogoComparison() {
  return (
    <div style={{}}>
    <ImgComparisonSlider
    >
      <img className="bg-slate-500 block w-full lg:h-[150px]" slot="first" src="/Aether/AetherOld.png" />
      <figcaption>Before</figcaption>
      <img className="h-[300px] block w-full lg:h-[150px]" slot="second" src="/Aether/AetherNew.png" />
      <figcaption>After</figcaption>
    </ImgComparisonSlider>
    </div>

  );
}

