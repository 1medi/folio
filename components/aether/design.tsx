import LogoComparison from "../comparisonSliders/logoComparison";
import AppComparison from "../comparisonSliders/aeAppComparison";
import FadeIn from "@/app/utils/fadein";

export default function Design() {
  return (
    <FadeIn className="designDecisions p-8  bg-[#a49e8e80] rounded-lg mx-4 mb-8 ">
      <h2 className="text-3xl text-center md:text-left bg-[#3A3F2D] rounded-lg p-4">
        Design Decisions
      </h2>
      <p className="text-center xl:text-left p-4 text-lg">
        Whether it be the logo, blog or application, Aether underwent many
        shifts in creative direction
      </p>
      <div className="m-auto items-center flex flex-col xl:flex-row">
        <div className="flex flex-col xl:w-1/2">
          <div className="logo">
            <h1 className="text-3xl font-semibold text-center p-4">Logo</h1>
            <div className="flex justify-center items-center">
              <LogoComparison />
            </div>
          </div>

          <div className="app">
            <h1 className="text-3xl font-semibold text-center p-4">App</h1>
            <div className="App flex justify-center items-center">
              <AppComparison />
            </div>
          </div>
        </div>

        <div className="name xl:w-1/2">
          <h1 className="text-3xl font-semibold text-center p-4">Name</h1>
          <div className="flex flex-col ">
            <div className="text-center xl:text-left p-2">
              <h2 className="font-bold">Elder Ease</h2>
              <p className="">
                Originating from our favourite LLM, Elder Ease was the inital
                name of the project. Meant to signify the ease our
                under-represented demographic would experience when using the
                app!
              </p>
            </div>
            <div className="text-center xl:text-left p-2">
              <h2 className="font-bold">Nimbus</h2>
              <p>
                Further discussions brought up the issue that the term "Elder"
                can limit our potential scalability of our app, boxing us into a
                certain demographic. Therefor a changed was needed and Nimbus
                was a name that stuck with the entire team.
              </p>
            </div>
            <div className="text-center xl:text-left p-2">
              <h2 className="font-bold">Aether</h2>
              <p>
                The team attemptted to find a connection between our product
                name and the user up high in the clouds having a sense of safety
                and security. Although, further researched uncovered that
                "Nimbus" was a derogatory term. So Aether, a term akin to the
                values we hold dearly, appeared to be apt.
              </p>
            </div>
          </div>
          <div className="inner flex flex-col justify-center items-center p-4">
            <h2 className="font-bold text-3xl">Prototype</h2>
            <iframe
              className="border border-solid border-gray-200 w-[350px] h-[450px] xl:w-[600px] xl:h-[450px] desktop:w-[1400px] desktop:h-[800px]"
              src="https://embed.figma.com/design/eKUiV3gWInupozNnMRm1EY/Aether-Prototype?node-id=2750-6684&embed-host=share&hide-ui=1&footer=false"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

