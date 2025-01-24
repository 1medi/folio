import ACG from "/public/ACG-Logo.png";
import Aether from "/public/aetherLogo.png";
import Bahay from "/public/LH_logo.svg";
import Oscar from "/public/Oscar.png";
import Aether1 from "/public/Aether/homepage.png";
import Aether2 from "/public/Aether/formlibrary.png";
import Aether3 from "/public/Aether/results.png";
import Aether4 from "/public/Aether/scan.png";

export const Projects = [
  {
    id: 1,
    title: "Aether",
    description:
      "Aether's mission is to empower caretakers through technology that simplifies life's challenges. Aether helps you understand complex documents by using AI to rephrase confusing terms. This technology allows the ability to convert confusing language into clear, straight-forward language that ensures you fill out your forms with confidence.",
    image: Aether,
    backgroundColor: "#0abaef",
    transform: "translateX(-1000px)",
    pathName: "/Aether",
  },
  {
    id: 2,
    title: "Pocket Prof",
    description: "Pocket Prof is a mobile web application goal tracking app that promotes a variety of skills a user can learn by gathering resources through our ai assistant Oscar. Through its interactive user-friendly features, it provides a platform for students and individuals alike to improve on themselves and create new goals.",
    image: Oscar,
    backgroundColor: "#656384",
    transform: "translateX(1000px)",
    pathName: "/Pocket-Prof",
  },
  {
    id: 3,
    title: "Lutong Bahay",
    description: "Lutong Bahay is a Filipino cookbook app that allows users to easily customize recipes. One of the key features is the ability to adjust serving sizes, so when users change the number of servings, the app automatically updates the ingredient amounts. This makes it easier for users to cook Filipino dishes no matter where they are or what ingredients they have on hand.",
    image: Bahay,
    backgroundColor: "#f0ab1a",
    transform: "translateX(1000px)",
    pathName: "/Lutong-Bahay",
  },
  {
    id: 4,
    title: "Awesome Card Game (ACG)",
    description: "In ACG: Aspect of Elements, players engage in a strategic card game where they command elemental forces in turn-based battles. Choose your elemental affinity wisely – fire, water, earth, or air – as each offers unique strengths and abilities. Build your deck strategically, combining spells, creatures, and artifacts to outmaneuver your opponents. ",
    image: ACG,
    backgroundColor: "#DD8143",
    transform: "translateX(1000px)",
    pathName: "/ACG",
  },
];

export const AetherGallery = [
  {
    id: 0,
    image: Aether1,
    title: "Photo 1",
  },
  {
    id: 1,
    image: Aether2,
    title: "Photo 2",
  },
  {
    id: 2,
    image: Aether3,
    title: "Photo 3",
  },
  {
    id: 3,
    image: Aether4,
    title: "Photo 4",
  },
];
