import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import ACG from "/public/ACG-Logo.png";
import Aether from "/public/aetherLogo.png";
import LB from "/public/LH_logo.svg";
import Oscar from "/public/Oscar.png";
const projects = [
  {
    id: 1,
    title: "Aether",
    description: "Description for Project 1",
    image: Aether,
  },
  {
    id: 2,
    title: "Pocket Prof",
    description: "Description for Project 2",
    image: Oscar,
  },
  {
    id: 3,
    title: "Lutong Bahay",
    description: "Description for Project 3",
    image: LB,
  },
  {
    id: 4,
    title: "ACG (Awesome Card Game)",
    description: "Description for Project 4",
    image: ACG,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    description: string;
    image: string;
  } | null>(null);

  return (
    <>
      <div className="flex flex-col items-center gap-14 mt-4">
        <div className="flex flex-col gap-14 mt-8">
        <h1 className="text-7xl text-center">Projects</h1>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="p-14 gap-12 flex flex-row border rounded cursor-pointer"
              style={{ margin: 14, padding: 100 }}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="mb-2"
                width={200}
                height={200}
              />
              <h2 className="text-xl font-semibold">{project.title}</h2>
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
              <p className="mb-4">{selectedProject.description}</p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Projects;
