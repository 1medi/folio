import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import ACG from "/public/ACG-Logo.png";
import Aether from "/public/aetherLogo.png";
import LB from "/public/LH_logo.svg";
import Oscar from "/public/Oscar.png";
import Link from "next/link";
const projects = [
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
    image: LB,
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    description: string;
    image: string;
    backgroundColor: string;
    transform: string;
    pathName: string;
  } | null>(null);

  return (
    <>
      <div className="flex flex-col items-center gap-14 mt-4">
        <div className=" gap-14 mt-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-7xl font-bold text-center">Projects</h1>
          </motion.div>

          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="p-20 m-12 h-full flex-row border rounded cursor-pointer"
              style={{ backgroundColor: project.backgroundColor }}
              onClick={() => setSelectedProject(project)}
              initial={{ transform: project.transform }}
              animate={{ transform: "translateX(0px)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                className="m-auto"
                src={project.image}
                alt={project.title}
                height={150}
                width={150}
              />
              <h2 className="text-2xl text-center font-semibold">
                {project.title}
              </h2>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-slate-400 p-8 rounded shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <p className="mb-4 text-xl text-center">
                {selectedProject.description}
              </p>
              <motion.button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setSelectedProject(null)}
                whileTap={{ scale: 0.9 }}
              >
                Close
              </motion.button>
              <Link
                className="px-4 py-2 bg-blue-500 text-white rounded"
                href={selectedProject.pathName}
              >
                See More
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Projects;
