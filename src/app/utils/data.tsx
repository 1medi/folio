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
      "Aether helps you understand complex documents by using AI to rephrase confusing terms. Aether converts confusing language into clear, straightforward language that ensures you fill out your forms with confidence.",
    image: Aether,
    backgroundColor: "#0abaef",
    transform: "translateX(-1000px)",
    pathName: "/Aether",
  },
  {
    id: 2,
    title: "Pocket Prof",
    description: "Description for Project 2",
    image: Oscar,
    backgroundColor: "#656384",
    transform: "translateX(1000px)",
    pathName: "/Pocket-Prof",
  },
  {
    id: 3,
    title: "Lutong Bahay",
    description: "Description for Project 3",
    image: Bahay,
    backgroundColor: "#f0ab1a",
    transform: "translateX(1000px)",
    pathName: "/Lutong-Bahay",
  },
  {
    id: 4,
    title: "ACG (Awesome Card Game)",
    description: "Description for Project 4",
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
