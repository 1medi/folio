"use client";
import AeTitle from "../projectTitle/aeTitle";
import ACGTitle from "../projectTitle/acgTitle";
import LBTitle from "../projectTitle/lbTitle";
import PPTitle from "../projectTitle/ppTitle";

export default function AboutProjects() {
  return (
    <div className="mb-12">
      <h1
        id="projects"
        className="text-8xl font-bold text-center m-auto pt-16 pb-16"
      >
        Projects
      </h1>
      <section className="">
        <hr />
        <AeTitle />
        <hr />
        <ACGTitle />
        <hr />
        <LBTitle />
        <hr />
        <PPTitle />
        <hr />
      </section>
    </div>
  );
}
