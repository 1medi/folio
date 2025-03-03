import NextVideo from "next-video";
import AetherPromo from "../../videos/aether-final-ad.mp4";
import AetherMockup from "../../videos/aether_app_mockup.mp4";
import FadeIn from "@/app/utils/fadein";

export default function Section7() {
  return (
    <>
      <FadeIn className="marketing  h-full p-8 mx-4 mb-4 bg-[#a49e8e80] rounded-lg lg:mx-8 lg:mb-8 ">
        <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-right p-4">
          Marketing
        </h2>
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-around">
          <div className="promo-videos md:m-4 flex flex-col justify-center items-center">
            <p className="text-center text-xl lg:mx-24 lg:my-8 p-2">
              On top of the various aspects of designing and developing the core
              application, we had to create other components to support our app,
              including physical goods such as: Brochures, Tote Bags and even a
              commerical!
            </p>
            <NextVideo
              className="m-4"
              style={{
                zIndex: 1,
                height: "100%",
                width: "100%",
                maxWidth: "1000px",
              }}
              src={AetherPromo}
            />
          </div>
          <div className="promo-videos md:m-4 flex flex-col justify-center items-center mb-16 xl:mb-auto">
            <p className="text-center text-xl lg:mx-24 lg:my-8">
              A mockup created by the team displayed on the blog page.
            </p>
            <NextVideo
              className="m-4"
              style={{
                zIndex: 1,
                height: "100%",
                width: "100%",
                maxWidth: "700px",
              }}
              src={AetherMockup}
              autoPlay
              playsInline
              loop
            />
          </div>
        </div>
      </FadeIn>
    </>
  );
}
