"use client";
import AeTitle from "../projectTitle/aeTitle";
import ACGTitle from "../projectTitle/acgTitle";
import LBTitle from "../projectTitle/lbTitle";
import PPTitle from "../projectTitle/ppTitle";
import ZootTitle from "../projectTitle/zootTitle"

export default function AboutProjects() {
  return (
    <div className="h-screen my-8">
      <h1
        id="projects"
        className="text-7xl font-bold text-center m-auto pt-8 pb-8 desktop:pt-16 desktop:pb-16 desktop:text-8xl"
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
        <ZootTitle/>
        <hr />

      </section>
    </div>
  );
}
