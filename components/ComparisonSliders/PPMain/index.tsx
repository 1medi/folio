import { ImgComparisonSlider } from '@img-comparison-slider/react';

export default function NavComparison() {
  return (
    <div style={{}}>
    <ImgComparisonSlider
    >
      <img className="h-[300px] lg:h-[500px]" slot="first" src="/Pocket-Prof/PPmainbefore.png" />
      <figcaption>Before</figcaption>
      <img className="h-[300px] lg:h-[500px]" slot="second" src="/Pocket-Prof/PPmainafter.png" />
      <figcaption>After</figcaption>
    </ImgComparisonSlider>
    </div>

  );
}

