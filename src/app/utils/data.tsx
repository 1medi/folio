import ACG from "/public/ACG-Logo.png";
import Aether from "/public/aetherLogo.png";
import Bahay from "/public/LH_logo.svg"
import Oscar from "/public/Oscar.png";

export const Projects = [
  {
    id: 1,
    title: "Aether",
    description: "Description for Project 1",
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