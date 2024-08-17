import About from "@/ui/about";
import Blog from "@/ui/blogs";
import CaseStudies from "@/ui/case studies";
import Navbar from "@/ui/global/nav";
import HomeScreen from "@/ui/home";
import Projects from "@/ui/projects";
import Services from "@/ui/services/page";
import React from "react";

export default function Home() {
  return (
    <>
    <Navbar />
    <HomeScreen />
    <About />
    <Services />
    <Projects />
    <CaseStudies />
    <Blog />
    </>
  );
}
