import FadeIn from "@/app/utils/fadein";

export default function Section4() {
  return (
    <>
      <FadeIn
        className="proj-ideation p-8 bg-[#a49e8e80] rounded-lg m-4"
      >
        <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
          User Research
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="text-center text-xl p-4">
            <p>
              <span className="font-bold">Date of Report:</span> October 1, 2024
            </p>
            <p>
              <span className="font-bold">Date of Interviews:</span> September
              21 - 28, 2024
            </p>
          </div>
          <div className="m-2 lg:m-4">
            <h4 className="text-3xl xl:text-5xl font-semibold  text-center p-4">
              Who We Surveyed
            </h4>
            <p className="text-center text-lg">
              We conducted 2 rounds of interviews, 1 for our initial idea which
              was more focused on an older demographic looking for a solution to
              easily file forms while the second was more centered around
              caretakers and individuals who would be responsible for filling
              out forms for seniors.
            </p>
          </div>
        </div>

        <div className="results-container m-2 lg:m-4">
          <h4 className="text-3xl xl:text-5xl font-semibold text-center">
            Major Findings
          </h4>
          <div className="survey-findings flex flex-col lg:grid grid-cols-2">
            <div className="m-2">
              <h4 className="text-3xl xl:text-5xl font-semibold text-center p-4">
                Commonalities
              </h4>
              <div className="text-center">
                <ul className="text-lg">
                  <li className="p-2">
                    <span className="font-bold">
                      Form Complexity and Stress:
                    </span>{" "}
                    Users often find forms challenging due to complicated
                    language, unclear instructions, and the stress of ensuring
                    all necessary information is collected and filled out
                    correctly (55.56%). This is a shared experience across all
                    age groups, particularly when handling legal, medical, and
                    government forms.
                  </li>
                  <li className="p-2">
                    <span className="font-bold">
                      Time-Consuming Nature of Forms:
                    </span>{" "}
                    83.3% of users report that forms are time-consuming and
                    difficult to fill out, with common issues including
                    understanding the form’s language, collecting necessary
                    information, and ensuring accuracy.
                  </li>
                  <li className="p-2">
                    <span className="font-bold">Assistance with Forms:</span>{" "}
                    All respondents (100%) have assisted someone with filling
                    out forms, with most (83.3%) reporting the experience as
                    somewhat stressful.
                  </li>
                  <li className="p-2">
                    <span className="font-bold">Convenience of Aether:</span>{" "}
                    While{" "}
                    <span className="font-semibold">33.3% answered "Yes,"</span>{" "}
                    another
                    <span className="font-semibold">
                      {" "}
                      66.7% responded "Possibly."
                    </span>{" "}
                    This indicates that while there is interest in using the
                    app, some users remain cautious and want to see how the app
                    would provide a more streamlined and helpful process
                    compared to their existing practices.
                  </li>
                </ul>
              </div>
            </div>
            <div className="m-2 text-center">
              <h4 className="text-3xl xl:text-5xl font-semibold text-center p-4">
                Pain Points
              </h4>
              <div className="m-2">
                <ul className="h-full text-lg justify-between items-stretch flex flex-col ">
                  <li className="p-2">
                    <span className="font-bold">Forms:</span> Users find forms
                    challenging due to complex terminology, lengthy and
                    time-consuming processes, difficulty gathering required
                    information, and a lack of error-checking, leading to
                    frustration, delays, and stress.
                  </li>
                  <li className="p-2">
                    <span className="font-bold">Poor Navigation:</span> Users
                    struggle with poor navigation in apps and websites, finding
                    them unorganized and cluttered with unnecessary features,
                    making it hard to access essential tools.
                  </li>
                  <li className="p-2">
                    <span className="font-bold">Support Issues:</span> Users
                    often struggle with filling out forms due to a lack of
                    guidance, leaving them confused, while also feeling uneasy
                    about data security and the privacy of their sensitive
                    information.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
