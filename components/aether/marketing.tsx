import NextVideo from "next-video";
import AetherPromo from "../../videos/aether-final-ad.mp4";
import AetherMockup from "../../videos/aether_app_mockup.mp4";
import FadeIn from "@/app/utils/fadein";
import Brochure from "./brochure"
export default function Section7() {
  return (
    <>
      <FadeIn className="marketing  h-full p-8 mx-4 mb-4 bg-[#a49e8e80] rounded-lg lg:mx-8 lg:mb-8 ">
        <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-right p-4">
          Marketing
        </h2>
        <h3 className="flex justify-center items-center text-2xl p-2 xl:pt-4">
          Videos
        </h3>
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-around p-4">
          <div className="promoVideos md:m-4 flex flex-col justify-center items-center">
            <p className="text-center text-xl lg:mx-24 lg:my-8 p-2">
              On top of the various aspects of designing and developing the core
              application, we had to create other components to support our app,
              including physical goods such as: Brochures, Tote Bags and even a
              commerical!
            </p>
            <div className="flex items-center justify-center min-h-[200px] min-w-[300px] md:h-[400px] md:w-[500px] p-4 rounded-xl">
              <NextVideo
                className="m-4"
                style={{
                  zIndex: 1,
                  height: "100%",
                  width: "100%",
                }}
                src={AetherPromo}
              />
            </div>
          </div>
          <div className="mockupVideos md:m-4 flex flex-col justify-center items-center">
            <p className="text-center text-xl lg:mx-24 lg:my-8">
              A mockup created by the team displayed on the blog page.
            </p>
            <div className="flex items-center justify-center h-[200px] w-[300px] md:h-[400px] md:w-[500px] p-4">
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
        </div>
        <h3 className="flex justify-center items-center text-2xl p-2">Brochure</h3>
        <div className="flex justify-center items-center w-full">
        <Brochure/>
        </div>

      </FadeIn>
    </>
  );
}
