import LogoComparison from "../ComparisonSliders/LogoComparison";
import AppComparison from "../ComparisonSliders/AppComparison";
import FadeIn from "@/app/utils/fadein";

export default function Section5() {
  return (
    <FadeIn className="proj-ideation p-8  bg-[#a49e8e80] rounded-lg mx-8 mb-8 lg:mr-4 lg:w-1/3">
        <h2 className="text-3xl text-center md:text-left bg-[#3A3F2D] rounded-lg p-4">
          Design Decisions
        </h2>
        <p className="text-left p-4 text-lg">
          Whether it be the logo, blog or application, Aether underwent many
          shifts in creative direction
        </p>
        <div className="m-auto items-center flex flex-col">
          <div className="logo">
            <h1 className="text-xl lg:text-3xl font-semibold text-center p-4">
              Logo
            </h1>
            <div>
              <LogoComparison />
            </div>
            <p></p>
          </div>

          <div className="App">
            <h1 className="text-xl lg:text-3xl font-semibold text-center p-4">
              App
            </h1>
          </div>
          <div>
            <AppComparison />
          </div>
          <div className="name ">
            <h1 className="text-xl lg:text-3xl font-semibold text-center p-4">
              Name
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <h2 className="font-bold">Elder Ease</h2>
                <p>
                  Originating from our favourite LLM, Elder Ease was the inital
                  name of the project. Meant to signify the ease our
                  under-represented demographic would experience when using the
                  app!
                </p>
              </div>
              <div className="text-center">
                <h2 className="font-bold">Nimbus</h2>
                <p>
                  Further discussions brought up the issue that the term "Elder"
                  can limit our potential scalability of our app, boxing us into
                  a certain demographic. Therefor a changed was needed and
                  Nimbus was a name that stuck with the entire team.
                </p>
              </div>
              <div className="text-center">
                <h2 className="font-bold">Aether</h2>
                <p>
                  The team attemptted to find a connection between our product
                  name and the user up high in the clouds having a sense of
                  safety and security. Although, further researched uncovered
                  that "Nimbus" was a derogatory term. So Aether, a term akin to
                  the values we hold dearly, appeared to be apt.
                </p>
              </div>
            </div>
          </div>
        </div>
    </FadeIn>
  );
}
