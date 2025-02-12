"use client";
import { Open_Sans } from "next/font/google";
import { Italiana } from "next/font/google";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import AEBanner from "../../../components/PageBanners/AeBanner";
import Image from "next/image";
import Openai from "../../../public/Logos/openai.png";
import Quillbot from "../../../public/Logos/quillbot.png";
import PDFai from "../../../public/Logos/pdfai.jpg";
import NextVideo from "next-video";
import AetherPromo from "../../../videos/aether-final-ad.mp4";
import AetherMockup from "../../../videos/aether_app_mockup.mp4";
import Persona1 from "../../../public/personas/persona1.jpg";
import LogoComparison from "../../../components/ComparisonSliders/LogoComparison";
import Parallax from "../../../components/Parallax/index";
import AppComparison from "../../../components/ComparisonSliders/AppComparison";
import AetherSolo from "../../../public/Aether/aetherSolo.png";
import {
  SiGooglecloud,
  SiFigma,
  SiExpo,
  SiReact,
  SiOpenai,
  SiMongodb,
} from "react-icons/si";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
const OpenSans = Open_Sans({ subsets: ["latin"] });
const ItalianaFont = Italiana({
  subsets: ["latin"],
  weight: "400",
});
const Aether = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="max-h-screen ">
        <div className="snap-y snap-start">
          <Parallax />
        </div>
        <div className=" snap-start">
          <AEBanner />
        </div>
        <section className="snap-start flex flex-col items-center justify-center p-4 m-auto ">
          <motion.section className="w-full">
            <div className=" m-8 justify-center bg-[#a49e8e80] rounded-lg items-center p-4 flex flex-col lg:flex-row">
              <div className=" md:w-1/2">
                <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4 m-4">
                  Tools Used
                </h2>
                <ul className="p-6 text-center lg:grid lg:grid-cols-2 ">
                  <li className="text-2xl p-2">
                    <SiGooglecloud className="inline-block mr-2" />
                    Google Cloud Vision
                  </li>
                  <li className="text-2xl p-2">
                    <SiFigma className="inline-block mr-2" />
                    Figma
                  </li>
                  <li className="text-2xl p-2">
                    <SiExpo className="inline-block mr-2" />
                    Expo
                  </li>
                  <li className="text-2xl p-2">
                    <SiReact className="inline-block mr-2" />
                    React Native
                  </li>
                  <li className="text-2xl p-2">
                    <SiOpenai className="inline-block mr-2" />
                    OpenAI
                  </li>
                  <li className="text-2xl p-2">
                    <SiMongodb className="inline-block mr-2" />
                    Mongo DB
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4 m-4">
                  Key Features
                </h2>
                <ul className="p-3 text-center">
                  <li className="text-2xl p-3">Camera Paraphrasing</li>
                  <li className="text-2xl p-3">PDF Library</li>
                  <li className="text-2xl p-3">Autofill PDF Information</li>
                </ul>
              </div>
            </div>

            <div className=" flex flex-col lg:flex-row m-4">
              <div className="about p-8 bg-[#a49e8e80] rounded-lg m-4 lg:w-1/2 lg:ml-4 lg:mr-4 lg:m-2">
                <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                  What is Aether?
                </h2>
                <p className="p-4 lg:text-xl text-center">
                  Aether’s unique approach allows our audience to scan paper
                  forms and upload documents to their mobile devices, convert
                  them into editable digital versions, and simplify complicated
                  terminology with a click of a buttton. Additionally, by
                  addressing the administrative burden many Canadians
                  face—especially the millions supporting elderly family members
                </p>
              </div>

              <div className="proj-ideation p-8 bg-[#a49e8e80] rounded-lg lg:w-1/2  m-4 lg:mr-4 lg:ml-4 lg:m-2">
                <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                  Identifying The Issue
                </h2>
                <p className="p-4 lg:text-xl">
                  <span className="font-bold text-2xl">Did you know? </span>
                  Caregivers spend up to an average of 10-15 hours per week
                  managing forms and paperwork! Through the team's research and
                  surveying, it was found that caregivers felt:
                </p>
                <ul className=" text-center lg:text-xl">
                  <li>Repetitive paperwork is tiring understanding </li>
                  <li>Learning legal terms is stressful</li>
                  <li>Time spent on forms, meant time lost with loved ones</li>
                </ul>
              </div>
            </div>

            <div className="proj-ideation p-8  bg-[#a49e8e80] rounded-lg mx-8">
              <h2 className="text-3xl text-center md:text-left bg-[#3A3F2D] rounded-lg p-4">
                Competitive Analysis
              </h2>

              <div className="flex flex-col md:flex-row p-4 justify-around">
                <div className="m-4 md:m-2 flex flex-col md:w-1/3">
                  <div className="header flex flex-row items-center">
                    <Image
                      className="rounded-full m-4"
                      src={Openai}
                      alt="action"
                      width={64}
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold">
                      ChatGPT
                    </h1>
                  </div>
                  <p className="m-auto min-h-[200px]">
                    A large language model that can be used to help answer
                    questions as well as clarifying text that may need alternate
                    way of explaining. This technology can scan Images, simplify
                    paragraphs and provide alternative detailed answers.
                  </p>
                </div>

                <div className="m-4 md:m-2 flex flex-col md:w-1/3">
                  <div className="header flex flex-row items-center">
                    <Image
                      className="rounded-full m-4"
                      src={PDFai}
                      alt="action"
                      width={64}
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold">
                      PDF.ai
                    </h1>
                  </div>
                  <p className="m-auto min-h-[200px]">
                    PDF.ai is an AI-powered tool designed to interact with and
                    analyze PDF documents, allowing users to ask questions,
                    extract data, and generate summaries, making document
                    comprehension and research more efficient. It is especially
                    useful in professional settings for automating data
                    extraction and gaining insights from complex texts.
                  </p>
                </div>
                <div className="m-4 md:m-2 flex flex-col md:w-1/3">
                  <div className="header flex flex-row items-center">
                    <Image
                      className="rounded-full m-4"
                      src={Quillbot}
                      alt="action"
                      width={64}
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold">
                      Quillbot
                    </h1>
                  </div>
                  <p className="m-auto min-h-[200px]">
                    Started in 2017 as an app to help students improve their
                    english when writing. Since then, it has evolved into a
                    AI-powered writing platform. They are also partnered with
                    150 universities. They have started expanding the use of AI
                    in their website and app and adding new features to it such
                    as citation, grammar check, summarizer, plagarism check, and
                    more
                  </p>
                </div>
              </div>
            </div>

            <div className=" flex flex-col m-4">
              <div className=" about p-8 bg-[#a49e8e80] rounded-lg m-4 ">
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
                          <span className="font-bold">Occupation:</span> Senior
                          Home Caregiver
                        </li>
                        <li className="text-2xl">
                          <span className="font-bold">Income: </span>$70,000
                        </li>
                        <li className="text-2xl">
                          <span className="font-bold">Location:</span>{" "}
                          Coquitlam, BC
                        </li>
                        <li className="text-2xl">
                          <span className="font-bold">Ethnicity:</span>{" "}
                          Caucasian
                        </li>
                      </ul>
                    </div>
                    <div className="m-4">
                      <h4 className="text-xl lg:text-3xl font-semibold">
                        Key Behaviours
                      </h4>
                      <ul className="list-disc m-2">
                        <li>
                          Uses digital tools like calendars to keep track of
                          tasks and to stay organized
                        </li>
                        <li>
                          Uses alarms and reminders for submission deadlines and
                          follow-up tasks
                        </li>
                        <li>
                          Uses her laptop and smartphone daily for work and
                          personal tasks
                        </li>
                        <li>
                          Prioritizes speed and efficiency when doing tasks in
                          order to get things done
                        </li>
                        <li>
                          Always looking for ways to improve and speed up daily
                          tasks
                        </li>
                      </ul>
                    </div>
                    <div className="m-4">
                      <h4 className="text-xl lg:text-3xl font-semibold">
                        Must Have's
                      </h4>
                      <ul className="list-disc">
                        <li>
                          Easy access homepage to quickly navigate features she
                          needs
                        </li>
                        <li>
                          Different ways to complete tasks (Using camera to scan
                          physical documents and receiving documents
                          electronically,
                        </li>
                        <li>
                          Good organization option to keep track of documents
                          and forms
                        </li>
                      </ul>
                    </div>
                    <div className="m-4">
                      <h4 className="text-xl lg:text-3xl font-semibold">
                        Never Do's
                      </h4>
                      <ul className="list-disc">
                        <li>Cluttered layout</li>
                        <li>Unclear design</li>
                        <li>
                          Layouts that aren’t practical (like going through
                          several pages to get to account information)
                        </li>
                      </ul>
                    </div>
                    <div className="m-4">
                      <h4 className="text-xl lg:text-3xl font-semibold">
                        Key Tasks
                      </h4>
                      <ul className="list-disc">
                        <li>
                          Keeping records of each seniors information in a
                          timely / accessible manner
                        </li>
                        <li>
                          Reviewing forms to ensure all information is correct
                        </li>
                        <li>
                          Understanding the UX / UI to efficently use the
                          technology
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" proj-ideation p-8 bg-[#a49e8e80] rounded-lg m-4">
                <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                  User Research
                </h2>
                <div className="m-2">
                  <p>
                    <span className="font-bold">Date of Report:</span> October
                    1, 2024
                  </p>
                  <p>
                    <span className="font-bold">Date of Interviews:</span>{" "}
                    September 21 - 28, 2024
                  </p>
                </div>

                <div className="m-2 lg:m-4">
                  <h4 className="text-xl lg:text-3xl font-semibold text-center p-4">
                    Who We Surveyed
                  </h4>
                  <p className="text-center text-lg">
                    We conducted 2 rounds of interviews, 1 for our initial idea
                    which was more focused on an older demographic looking for a
                    solution to easily file forms while the second was more
                    centered around caretakers and individuals who would be
                    responsible for filling out forms for seniors.
                  </p>
                </div>
                <div className="results-container m-2 lg:m-4">
                  <h4 className="text-xl lg:text-3xl font-semibold text-center">
                    Major Findings / Pain Points
                  </h4>
                  <div className="survey-findings flex flex-col lg:grid grid-cols-2">
                    <div className="m-2">
                      <h4 className="text-xl lg:text-3xl font-semibold text-center p-4">
                        Commonalities
                      </h4>
                      <div>
                        <ul className="text-lg">
                          <li className="p-2">
                            <span className="font-bold">
                              Form Complexity and Stress:
                            </span>{" "}
                            Users often find forms challenging due to
                            complicated language, unclear instructions, and the
                            stress of ensuring all necessary information is
                            collected and filled out correctly (55.56%). This is
                            a shared experience across all age groups,
                            particularly when handling legal, medical, and
                            government forms.
                          </li>
                          <li className="p-2">
                            <span className="font-bold">
                              Time-Consuming Nature of Forms:
                            </span>{" "}
                            83.3% of users report that forms are time-consuming
                            and difficult to fill out, with common issues
                            including understanding the form’s language,
                            collecting necessary information, and ensuring
                            accuracy.
                          </li>
                          <li className="p-2">
                            <span className="font-bold">
                              Assistance with Forms:
                            </span>{" "}
                            All respondents (100%) have assisted someone with
                            filling out forms, with most (83.3%) reporting the
                            experience as somewhat stressful.
                          </li>
                          <li className="p-2">
                            <span className="font-bold">
                              Convenience of Aether:
                            </span>{" "}
                            While{" "}
                            <span className="font-semibold">
                              33.3% answered "Yes,"
                            </span>{" "}
                            another
                            <span className="font-semibold">
                              {" "}
                              66.7% responded "Possibly."
                            </span>{" "}
                            This indicates that while there is interest in using
                            the app, some users remain cautious and want to see
                            how the app would provide a more streamlined and
                            helpful process compared to their existing
                            practices.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2">
                      <h4 className="text-xl lg:text-3xl font-semibold text-center p-4">
                        Pain Points
                      </h4>
                      <div className="h-4/5 p-8">
                        <ul className="h-full text-lg justify-between items-stretch flex flex-col ">
                          <li className="p-2">
                            <span className="font-bold">Forms:</span> Users find
                            forms challenging due to complex terminology,
                            lengthy and time-consuming processes, difficulty
                            gathering required information, and a lack of
                            error-checking, leading to frustration, delays, and
                            stress.
                          </li>
                          <li className="p-2">
                            <span className="font-bold">Poor Navigation:</span>{" "}
                            Users struggle with poor navigation in apps and
                            websites, finding them unorganized and cluttered
                            with unnecessary features, making it hard to access
                            essential tools.
                          </li>
                          <li className="p-2">
                            <span className="font-bold">Support Issues:</span>{" "}
                            Users often struggle with filling out forms due to a
                            lack of guidance, leaving them confused, while also
                            feeling uneasy about data security and the privacy
                            of their sensitive information.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col lg:flex-row">
              <div className="proj-ideation p-8  bg-[#a49e8e80] rounded-lg mx-8 mb-8 lg:mr-4 lg:w-1/3">
                <h2 className="text-3xl text-center md:text-left bg-[#3A3F2D] rounded-lg p-4">
                  Design Decisions
                </h2>
                <p className="text-left p-4 text-lg">
                  Whether it be the logo, blog or application, Aether underwent
                  many shifts in creative direction
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
                          Originating from our favourite LLM, Elder Ease was the
                          inital name of the project. Meant to signify the ease
                          our under-represented demographic would experience
                          when using the app!
                        </p>
                      </div>
                      <div className="text-center">
                        <h2 className="font-bold">Nimbus</h2>
                        <p>
                          Further discussions brought up the issue that the term
                          "Elder" can limit our potential scalability of our
                          app, boxing us into a certain demographic. Therefor a
                          changed was needed and Nimbus was a name that stuck
                          with the entire team.
                        </p>
                      </div>
                      <div className="text-center">
                        <h2 className="font-bold">Aether</h2>
                        <p>
                          The team attemptted to find a connection between our
                          product name and the user up high in the clouds having
                          a sense of safety and security. Although, further
                          researched uncovered that "Nimbus" was a derogatory
                          term. So Aether, a term akin to the values we hold
                          dearly, appeared to be apt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Styleguide p-8  bg-[#a49e8e80] mx-8 rounded-lg mb-8 lg:ml-4 lg:w-2/3">
                <h2 className="text-3xl text-center md:text-left bg-[#3A3F2D] rounded-lg p-4">
                  Styleguide
                </h2>
                <div className="section-container h-full flex flex-col items-around justify-around">
                  <div className="section1 ">
                    <h2 className="m-4 lg:text-3xl font-semibold">Logo</h2>
                    <div className="flex flex-col lg:flex-row">
                      <p className="lg:m-8">
                        This is a combination of a document and a compass. The
                        document represent the app’s function of assisting with
                        form completion and paperwork. The compass represents
                        the guidance and direction we provide to our users.
                      </p>
                      <div className="lg:m-8 lg:w-[512px] flex items-center justify-center">
                        <Image
                          width={256}
                          height={256}
                          src={AetherSolo}
                          alt="aetherbooks"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="section2 ">
                    <h2 className="m-4 lg:text-3xl font-semibold">
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
                  <div className="section3 ">
                    <h2 className="m-4 lg:text-3xl font-semibold">
                      Typography
                    </h2>
                    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
                      <div className={OpenSans.className}>
                        <h2 className="p-2 text-2xl font-bold">
                          This is Opensans
                        </h2>
                        <p>
                          Balancing the modernity and accessibility, which
                          aligns with the app's goal of simplifying complex
                          processes. It is clear which is easy to read and can
                          be used to across different parts of the app without
                          feeling too formal or too casual.
                        </p>
                      </div>
                      <div className={ItalianaFont.className}>
                        <h2 className="p-2 text-2xl font-bold">
                          This is Italiana (Redacted)
                        </h2>
                        <p>
                          The abstract design of this font works well with the
                          logo; it adds more depth to it. The contrast between
                          fine and thick strokes adds a unique touch, while
                          keeping the design modern and sleek for Aether.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="marketing  p-8 bg-[#a49e8e80] rounded-lg mx-8 mb-8 ">
              <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-right p-4">
                Marketing
              </h2>
              <div className="flex flex-col justify-around">
                <div className="promo-videos flex flex-col justify-center items-center lg:flex-row ">
                  <p className="text-center text-xl m-4">
                    On top of the various aspects of designing and developing
                    the core application, we had to create other components to
                    support our app, including physical goods such as:
                    Brochures, Tote Bags and even a commerical!
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
                <div className="promo-videos flex flex-col justify-center items-center lg:flex-row-reverse">
                  <p className="">
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
                    loop
                  />
                </div>
              </div>
            </div>
            <div className=" last-row flex flex-col lg:flex-row">
              <div className="future p-8 bg-[#a49e8e80] rounded-lg mx-8 mb-8 lg:mr-4 lg:w-1/2">
                <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-left p-4">
                  Future Prospects
                </h2>
                <div className="text flex flex-col justify-center items-center ">
                  <ul className=" m-4">
                    <li className="text-lg">
                      <span className="font-bold">
                        'Photo-to-PDF' Feature:{" "}
                      </span>{" "}
                      This feature allows caregivers to take photos of forms
                      with their phones and convert them into editable PDFs in
                      just a few clicks.
                    </li>
                    <li className="text-lg">
                      <span className="font-bold">
                        Expanded Library of Supported Forms:{" "}
                      </span>
                      We are building a database of forms that caregivers can
                      easily search and access, ensuring they can find the
                      specific forms they need.
                    </li>
                    <li className="text-lg">
                      <span className="font-bold">
                        Multilingual Support for Diverse Users:
                      </span>{" "}
                      This feature can help caregivers use our app in their
                      preferred languages.
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
                      needed, staying flexible, and addressing issues early in
                      the process
                    </li>
                    <li className="text-lg">
                      The value of competitive analysis to understand industry
                      standards and identifying gaps within the market.
                    </li>
                    <li className="text-lg">
                      How to effectively change project trajectory to meet
                      deadlines with available resources.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <motion.button
              className={`m-auto bg-black rounded-full p-4 z-50 items-center text-lg flex gap-2`}
              onClick={scrollToTop}
            >
              BACK TO TOP
              <IoIosArrowUp className="inline-block h-4 w-4" />
            </motion.button>
          </motion.section>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Aether;
