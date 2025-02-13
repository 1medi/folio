import { ImgComparisonSlider } from '@img-comparison-slider/react';

export default function LogoComparison() {
  return (
    <div className='m-4'>
    <ImgComparisonSlider
    >
      <img className="bg-slate-500 block w-full xl:h-[150px] xl:pb-8" slot="first" src="/Aether/AetherOld.png" />
      <figcaption>Before</figcaption>
      <img className="block w-full xl:h-[125px] p-4" slot="second" src="/Aether/AetherNew.png" />
      <figcaption>After</figcaption>
    </ImgComparisonSlider>
    </div>

  );
}

