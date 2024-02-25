"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import BrandsLogo from "@/components/BrandsLogo";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import BlogsComp from "@/components/BlogsComp";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandsLogo />
      <Services />
      <BlogsComp />
      <Footer />
    </div>
  );
}
