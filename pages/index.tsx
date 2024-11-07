import Head from "next/head";
import React from "react";
import About from "../components/about";
import Technologies from "../components/technologies";
import Experience from "../components/experience";
import Projects from "../components/projects";
import LeftSide from "../components/leftSide";
import RightSide from "../components/rightSide";
import Header from "../components/header";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { data } from "../edit/data";

const Home = () => {
  const { details, experienceSection, technologiesSection, projectsSection } = data;
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-primary text-secondary">
      <Head>
        <title>
          {details.firstName} {details.lastName} - Portfolio
        </title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div className="flex flex-row w-full">
        <div className="h-screen sticky top-0 z-50 w-1/12 justify-end hidden md:flex md:flex-col">
          <LeftSide data={details}/>
        </div>
        <div className="flex flex-col w-full md:w-11/12 font-Space">
          <Header />
          <About data={details} />
          <Technologies data={technologiesSection} />
          <Experience data={experienceSection} />
          <Projects data={projectsSection} />
          <Contact data={details} />
          <Footer data={details} />
        </div>
        <div className="h-screen sticky top-0 z-50 w-1/12 justify-center items-center hidden md:flex md:flex-col">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
