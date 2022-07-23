import React from "react";
import Nav from "./Nav";
import Intro from './Intro';
import Featured from './Featured';
import Carousel from './Carousel';
import Other from './Other';
import Footer from './Footer';

const Work = ({ featuredProject }) => {
  return (
    <>
      <Nav />
      <Intro />
      <Featured featuredProject={featuredProject} />
      <Carousel />
      <Other />
      <Footer />
    </>
  )
};


export default Work;