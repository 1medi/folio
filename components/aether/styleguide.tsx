import { Open_Sans } from "next/font/google";
import { Italiana } from "next/font/google";
import Image from "next/image";
import AetherSolo from "../../public/aether/aetherSolo.webp"
import FadeIn from "@/app/utils/fadein";

const OpenSans = Open_Sans({ subsets: ["latin"] });
const ItalianaFont = Italiana({
  subsets: ["latin"],
  weight: "400",
});

export default function Section6() {
  return (
    <>
      <FadeIn className="styleguide p-8  bg-[#a49e8e80] mx-4 lg:mx-8 rounded-lg">
        <h2 className="text-3xl text-center md:text-left bg-[#3A3F2D] rounded-lg p-4">
          Styleguide
        </h2>
        <div className="h-full flex flex-col  items-around justify-around">
          <div className="section-container flex flex-col xl:flex-row">
            <div className="section1 flex flex-col xl:w-1/2">
              <h2 className="m-4 text-3xl xl:text-4xl font-semibold text-center">
                Logo
              </h2>
              <div className="flex flex-col lg:flex-row">
                <p className="lg:m-8 xl:text-xl xl:w-2/3 text-left">
                  This is a combination of a document and a compass. The
                  document represent the app’s function of assisting with form
                  completion and paperwork. The compass represents the guidance
                  and direction we provide to our users.
                </p>
                <div className="m-auto lg:m-8 lg:w-[512px] flex items-center justify-center">
                  <Image
                    width={256}
                    height={256}
                    src={AetherSolo}
                    alt="aetherbooks"
                  />
                </div>
              </div>
            </div>
            <div className="section2 xl:w-1/2">
              <h2 className="m-4 text-3xl xl:text-4xl font-semibold text-center">
                Color Palette
              </h2>
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 lg:gap-4">
                <div className="bg-[#08415C] h-12 lg:h-24 rounded-xl p-4">
                  Color 1
                </div>
                <div className="bg-[#5C8CC8] h-12 lg:h-24 rounded-xl p-4">
                  Color 2
                </div>
                <div className="bg-[#8EAACD] h-12 lg:h-24 rounded-xl p-4">
                  Color 3
                </div>
                <div className="bg-[#ECFEE8] h-12 lg:h-24 rounded-xl p-4">
                  Color 4
                </div>
                <div className="bg-[#FEF5EC] h-12 lg:h-24 rounded-xl p-4">
                  Color 5
                </div>
              </div>
            </div>
          </div>

          <div className="section3 m-4 ">
            <h2 className="m-4 text-3xl xl:text-4xl font-semibold text-center">
              Typography
            </h2>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
              <div className={OpenSans.className}>
                <h2 className="p-4 text-2xl xl:text-5xl font-bold text-center">
                  This is Opensans
                </h2>
                <p className="xl:text-xl p-4 text-center">
                  Balancing the modernity and accessibility, which aligns with
                  the app's goal of simplifying complex processes. It is clear
                  which is easy to read and can be used to across different
                  parts of the app without feeling too formal or too casual.
                </p>
              </div>
              <div className={ItalianaFont.className}>
                <h2 className="p-4 text-2xl xl:text-5xl font-bold text-center">
                  This is Italiana (Redacted)
                </h2>
                <p className="xl:text-xl p-4 text-center">
                  The abstract design of this font works well with the logo; it
                  adds more depth to it. The contrast between fine and thick
                  strokes adds a unique touch, while keeping the design modern
                  and sleek for Aether.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};
