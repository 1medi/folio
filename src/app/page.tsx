"use client";
import Banner from "../../components/PageBanners/Banner";
import Footer from "../../components/Footer";
import About from "../../components/About";
import AboutP from "../../components/About-p/index";
import dynamic from "next/dynamic";

const DynamicCarousel = dynamic(
  () => import("../../components/InfiniteCarousel"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Home() {
  return (
    <main className="max-h-screen snap-y">
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
      <Footer />
    </main>
  );
}
