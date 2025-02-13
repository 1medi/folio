export default function Section8() {
  return (
    <>
      <div className="last-row  flex flex-col lg:flex-row">
        <div className="future p-8 bg-[#a49e8e80] rounded-lg mx-8 mb-8 lg:mr-4 lg:w-1/2">
          <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-left p-4">
            Future Prospects
          </h2>
          <div className="text flex flex-col justify-center items-center ">
            <ul className=" m-4">
              <li className="text-lg">
                <span className="font-bold">'Photo-to-PDF' Feature: </span> This
                feature allows caregivers to take photos of forms with their
                phones and convert them into editable PDFs in just a few clicks.
              </li>
              <li className="text-lg">
                <span className="font-bold">
                  Expanded Library of Supported Forms:{" "}
                </span>
                We are building a database of forms that caregivers can easily
                search and access, ensuring they can find the specific forms
                they need.
              </li>
              <li className="text-lg">
                <span className="font-bold">
                  Multilingual Support for Diverse Users:
                </span>{" "}
                This feature can help caregivers use our app in their preferred
                languages.
              </li>
            </ul>
          </div>
        </div>
        <div className="future p-8 bg-[#a49e8e80] rounded-lg mx-8 mb-8 lg:ml-4 lg:w-1/2">
          <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-right p-4">
            Lessons Learned
          </h2>
          <div className="text flex flex-col justify-center items-center ">
            <ul className="m-4 text-right">
              <li className="text-lg">
                Effective communication when collaborating in a large,
                cross-functional team with diverse roles.
              </li>
              <li className="text-lg">
                The importance of organizing smaller team discussions when
                needed, staying flexible, and addressing issues early in the
                process
              </li>
              <li className="text-lg">
                The value of competitive analysis to understand industry
                standards and identifying gaps within the market.
              </li>
              <li className="text-lg">
                How to effectively change project trajectory to meet deadlines
                with available resources.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
