"use client";
import AeTitle from "../ProjectTitle/AeTitle";
import ACGTitle from "../ProjectTitle/ACGTitle";
import LBTitle from "../ProjectTitle/LBTitle";
import PPTitle from "../ProjectTitle/PPTitle";

export default function AboutP() {
return (
  <div>
    <h1 id="projects" className="text-7xl font-bold sm:text-center lg:text-right p-24">Projects</h1>
    <section className="">
    <hr/>
      <AeTitle/>
      <hr/>
      <ACGTitle/>
      <hr/>
      <LBTitle/>
      <hr/>
      <PPTitle/>
      <hr/>
    </section>
  </div>
)
}
