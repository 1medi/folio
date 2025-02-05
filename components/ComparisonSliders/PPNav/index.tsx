import { ImgComparisonSlider } from '@img-comparison-slider/react';
import NavBefore from "../../../public/Pocket-Prof/navBefore.png";
import NavAfter from "../../../public/Pocket-Prof/navAfter.png";
import "../PPNav/PPNav.styles.css"
// ...

export default function NavComparison() {
  return (
    <div className='w-[300px]'>
    <ImgComparisonSlider
    >
      <img className="h-full"  slot="first" src="/Pocket-Prof/navBefore.png" />
      <figcaption className='absolute top-1/2 bg-white p-12 '>Before</figcaption>
      <img className="h-full" slot="second" src="/Pocket-Prof/navAfter.png" />
      <figcaption>After</figcaption>
    </ImgComparisonSlider>
    </div>

  );
}

