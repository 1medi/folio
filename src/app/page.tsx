"use client";
import Banner from "../../components/pageBanners/banner";
import Footer from "../../components/footer";
import About from "../../components/about";
import AboutP from "../../components/aboutProjects";
import dynamic from "next/dynamic";
import Contact from "../../components/contact"

const DynamicCarousel = dynamic(
  () => import("../../components/infiniteCarousel"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Home() {
  return (
    <main className="max-h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hidden">
      <div className="max-h-screen snap-start">
        <Banner />
      </div>
      <div className="snap-start">
        <AboutP />
      </div>
      <div className="snap-start">
        <DynamicCarousel />
      </div>
      <div className="snap-start">
        <About />
      </div>
      <div className="snap-start">
        <Contact />
        <Footer />
      </div>

    </main>
  );
}
