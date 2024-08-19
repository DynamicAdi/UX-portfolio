import About from "@/ui/about";
import Blog from "@/ui/blogs";
import CaseStudies from "@/ui/case studies";
import Contacts from "@/ui/contacts/page";
import Navbar from "@/ui/global/nav";
import HomeScreen from "@/ui/home";
import Projects from "@/ui/projects";
import Services from "@/ui/services/page";
import TechStack from "@/ui/tech stack/page";
import Testmonials from "@/ui/testmonials/page";
import React from "react";

export default function Home() {
  return (
    <>
    <Navbar />
    <HomeScreen />
    <About />
    <TechStack /> 
    <Services />
    <Projects />
    <CaseStudies />
    <Testmonials />
    <Blog />
    <Contacts />
    </>
  );
}
