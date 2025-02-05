"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import PPBanner from "../../../components/PageBanners/PPBanner";
import Image from "next/image";
import PPSitemap from "../../../public/Pocket-Prof/PPSitemap.png";
import PPPhone from "../../../components/PPPhone";
import NavBefore from "../../../public/Pocket-Prof/navBefore.png";
import NavAfter from "../../../public/Pocket-Prof/navAfter.png";
import { FaArrowDown } from "react-icons/fa";
import PPNav from "../../../components/ComparisonSliders/PPNav";
import PPMain from "../../../components/ComparisonSliders/PPMain";

const PocketProf = () => {
  return (
    <>
      <Header />
      <PPBanner />
      <main className="min-h-screen flex flex-col items-center justify-center p-4 m-auto">
        <motion.section className="w-full">
          <div className="w-2/3 m-auto mb-4  bg-[#a49e8e80] rounded-lg justify-center items-center p-8  flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg m-4 p-4">
                Tools Used
              </h2>
              <ul className="p-2 text-center">
                <li className="text-2xl p-2">Figma</li>
                <li className="text-2xl p-2">Next.js</li>
                <li className="text-2xl p-2">Openai</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg m-4 p-4">
                Key Features
              </h2>
              <ul className="p-2 text-center">
                <li className="text-2xl p-2">AI Chat Bot</li>
                <li className="text-2xl p-2">Quiz to Determine Best Skill</li>
                <li className="text-2xl p-2">Skill Library</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="about p-8 lg:w-1/2 bg-[#a49e8e80] rounded-lg m-4">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                What is Pocket Prof?
              </h2>
              <p className="p-4">
                Pocket Prof is a mobile web application goal tracking app that
                promotes a variety of skills a user can learn by gathering
                resources through our ai assistant Oscar. Through its
                interactive user-friendly features, it provides a platform for
                students and individuals alike to improve on themselves and
                create new goals."
              </p>
            </div>

            <div className="proj-ideation lg:w-1/2 p-8 bg-[#a49e8e80] rounded-lg m-4 ">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                Identifying The Issue
              </h2>
              <p className="text-center p-4">
                There was a gap found in the ability of finding new skills due
                to the overwhelming surplus of resources available of the
                internet. Through the app ideation proccess, we determined with
                the help of AI, we can collect all the available resources and
                make it available into 1 congestable application: Pocket Prof!
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row m-4">
            {/* <div className="proj-ideation p-8 bg-[#a49e8e80] rounded-lg lg:w-1/3 lg:mr-4">
              <h2 className="text-3xl text-center md:text-left bg-[#3A3F2D] rounded-lg p-4">
                Design Decisions
              </h2>
              <div className="m-auto flex sm:flex-col lg:flex-row">
                <p className="text-left p-4">
                  This was a rigourous process which involved many steps such as
                  theory crafting, rule making, character design. We were also
                  tasked with determining the flow and gameplay the users
                  experienced.
                </p>
              </div>
            </div> */}

            <div className="user-workflow p-8  bg-[#a49e8e80] rounded-lg ">
              <h2 className="text-center text-4xl font-medium p-4">
                User Workflow
              </h2>
              <Image className="rounded-xl" src={PPSitemap} alt="sitemap" />
            </div>
          </div>

          <div className="user-testing p-4 m-8 bg-[#a49e8e80] rounded-lg">
            <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-right p-4">
              User Testing
            </h2>
            <div className="inner flex flex-col lg:flex-row">
              <div className="overviewndstuff flex flex-col ">
                <div className=" p-4 m-4">
                  <h1 className="text-center lg:text-2xl font-bold">
                    Overview
                  </h1>
                  <ul className="list-disc text-center m-4">
                    <li className="font-semibold">Participants: 5</li>
                    <li className="font-semibold">Completed: April 2024</li>
                  </ul>
                  <p className="text-center ">
                    The team underwent a rigourous usability test to evaluate
                    users' ability to utilize app functions such as creating
                    goals, testing oneself, discovering new skills, and
                    making/tracking goals. With the main objective being to
                    assess navigation through different screens to gauge overall
                    experience and gather feedback for enhancing the app's
                    design and user-friendliness.
                  </p>
                </div>
                <div className=" m-4 p-4 ">
                  <h1 className="text-center lg:text-2xl font-bold">
                    Questions
                  </h1>
                  <ul className="list-decimal">
                    <li>
                      Navigate through the on-boarding steps and reach the ‘New
                      Subject’ page.
                    </li>
                    <li>
                      On the ‘New Subject’ page, navigate to the ‘art/creative’
                      section and create a goal list for a basic guitar course.
                    </li>
                    <li>Visit the profile page and change the user name.</li>
                    <li>
                      Add a goal individually, then add multiple goals to your
                      account.
                    </li>
                    <li>
                      Navigate to the settings page, switch to dark mode, and
                      adjust the font size to large.
                    </li>
                    <li>Complete a quiz and review your results.</li>
                  </ul>
                </div>
                <div className=" m-4 p-4 ">
                  <h1 className="text-center lg:text-2xl font-bold">
                    Key Takeaways
                  </h1>
                  <ul className="list-decimal">
                    <li>
                      We resized and changed colours to improve visibility
                    </li>
                    <li>
                      For better clarity, we improved the design of the icons on
                      the Navigation bar and reduced the number from 4 to 3.
                    </li>
                    <li>
                      For better navigation and flow, we made the “New subject”
                      page to homepage.
                    </li>
                    <li>
                      This usability testing helped us point several areas for
                      improvement. We aim to improve the design and flow of our
                      app by incorporating the suggested recommendations so that
                      we can enhance the user experience and satisfaction.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="solutions p-4 m-4 justify-center items-center ">
                <h1 className="text-center lg:text-2xl font-bold">
                  Problems / Solutions
                </h1>
                <div className="solution1">
                  <div className="flex flex-col md:flex-row m-4">
                    <div className="flex flex-col lg:w-1/2">
                      <h1 className="text-center text-xl font-semibold">
                        Before
                      </h1>
                      <p className="text-center m-4">
                        Users were confused by the relevance of our initial
                        homepage and the importance / relevance of the home page
                        vs our new learning subject page. Given that the new
                        subject section is the primary focus / main function of
                        the app, it’s important to clear up confusion regarding
                        it’s relevance
                      </p>
                    </div>
                    <div className="flex flex-col lg:w-1/2">
                      <h1 className="text-center text-xl font-semibold">
                        After
                      </h1>
                      <p className="text-center m-4">
                        Given that we could find a way to effectively implement
                        the home page in the way that we would have liked (most
                        of it relied on having pre-existing user data), we
                        decided to combine the two pages into one, with the
                        primary focus being on starting a new subject. This
                        keeps the primary focus of the app where we intended,
                        and removes one of the icons from our nav bar,
                        streamlining the app and its navigation
                      </p>
                    </div>
                  </div>
                  <div className="visual justify-center items-center flex m-8 p-4 flex-col">
                    <PPNav />
                  </div>
                </div>
                <div className="solution2">
                  <div className="flex flex-col md:flex-row m-4">
                    <div className="flex flex-col lg:w-1/2">
                      <h1 className="text-center text-xl font-semibold">
                        Before
                      </h1>
                      <p className="text-center m-4">
                        Three of the participants were not sure about the
                        purpose of homepage and the feature of the elements on
                        the homepage. That affected the entire workflow on the
                        page and clarity of information presented on the
                        interface.
                      </p>
                    </div>
                    <div className="flex flex-col lg:w-1/2">
                      <h1 className="text-center text-xl font-semibold">
                        After
                      </h1>
                      <p className="text-center m-4">
                        The ‘New Subject’ page was combined with the homepage so
                        users can have a better perception of the app. This
                        change was done to engage users and follow the flow from
                        the start, encouraging them to explore further.
                      </p>
                    </div>
                  </div>
                  <div className="visual justify-center items-center flex m-8 p-4 flex-col">
                    <PPMain />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="proj-outcome p-4 m-8 bg-[#a49e8e80] rounded-lg">
            <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-right p-4">
              Outcome
            </h2>
            <p className="text-center md:text-right p-4">
              At the conclusion of the project the team produced a playable lofi
              physical card game, 3 decks (Fire, Water, Ice) with 12 cards each
              and a menu UI suitable to code for our development team
            </p>
            <PPPhone />
          </div> */}
        </motion.section>

        {/* <motion.section className="bg-[#a49e8d] m-4 p-12 rounded-lg"></motion.section> */}
      </main>
      <Footer />
    </>
  );
};

export default PocketProf;
