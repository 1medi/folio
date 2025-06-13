"use client"
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { useState,useEffect } from "react";
import BCEBanner from "../../../components/pageBanners/bceBanner";
const BCecosystems = () => {

     const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
    
      function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      const [isVisible, setIsVisible] = useState(false);
    
      const handleScroll = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <BCEBanner/>
      </main>
      <Footer />
    </>
  );
};

export default BCecosystems;
