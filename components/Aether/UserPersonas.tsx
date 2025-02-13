import Image from "next/image";
import Persona1 from "../../public/personas/persona1.jpg";

export default function Section3() {
  return (
    <>
      <div className=" about p-8 bg-[#a49e8e80] rounded-lg m-4 xl:h-screen">
        <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
          User Personas
        </h2>
        <div>
          <div className="persona1 flex flex-col lg:grid grid-cols-2 ">
            <div className="flex flex-row justify-center items-center ">
              <h3 className="text-2xl lg:text-5xl font-bold m-2 l:m-4">
                Sarah James
              </h3>
              <Image
                className="w-[200px] h-[200px] m-2 lg:m-4 rounded-lg"
                src={Persona1}
                alt="Sarah James"
              />
            </div>
            <div className="m-4">
              <h4 className="text-xl lg:text-3xl font-semibold">
                Personal Details
              </h4>
              <ul className="list-disc m-2">
                <li className="text-2xl">
                  <span className="font-bold">Age: </span> 57
                </li>
                <li className="text-2xl">
                  <span className="font-bold">Gender: </span>Female
                </li>
                <li className="text-2xl">
                  <span className="font-bold">Occupation:</span> Senior Home
                  Caregiver
                </li>
                <li className="text-2xl">
                  <span className="font-bold">Income: </span>$70,000
                </li>
                <li className="text-2xl">
                  <span className="font-bold">Location:</span> Coquitlam, BC
                </li>
                <li className="text-2xl">
                  <span className="font-bold">Ethnicity:</span> Caucasian
                </li>
              </ul>
            </div>
            <div className="m-4">
              <h4 className="text-xl lg:text-3xl font-semibold">
                Key Behaviours
              </h4>
              <ul className="list-disc m-2">
                <li>
                  Uses digital tools like calendars to keep track of tasks and
                  to stay organized
                </li>
                <li>
                  Uses alarms and reminders for submission deadlines and
                  follow-up tasks
                </li>
                <li>
                  Uses her laptop and smartphone daily for work and personal
                  tasks
                </li>
                <li>
                  Prioritizes speed and efficiency when doing tasks in order to
                  get things done
                </li>
                <li>
                  Always looking for ways to improve and speed up daily tasks
                </li>
              </ul>
            </div>
            <div className="m-4">
              <h4 className="text-xl lg:text-3xl font-semibold">Must Have's</h4>
              <ul className="list-disc">
                <li>
                  Easy access homepage to quickly navigate features she needs
                </li>
                <li>
                  Different ways to complete tasks (Using camera to scan
                  physical documents and receiving documents electronically,
                </li>
                <li>
                  Good organization option to keep track of documents and forms
                </li>
              </ul>
            </div>
            <div className="m-4">
              <h4 className="text-xl lg:text-3xl font-semibold">Never Do's</h4>
              <ul className="list-disc">
                <li>Cluttered layout</li>
                <li>Unclear design</li>
                <li>
                  Layouts that aren’t practical (like going through several
                  pages to get to account information)
                </li>
              </ul>
            </div>
            <div className="m-4">
              <h4 className="text-xl lg:text-3xl font-semibold">Key Tasks</h4>
              <ul className="list-disc">
                <li>
                  Keeping records of each seniors information in a timely /
                  accessible manner
                </li>
                <li>Reviewing forms to ensure all information is correct</li>
                <li>
                  Understanding the UX / UI to efficently use the technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
