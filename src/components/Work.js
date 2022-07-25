import React from "react";
import Intro from './Intro';
import Featured from './Featured';
import Carousel from './Carousel';
import Other from './Other';

const Work = ({ featuredProject }) => {
  return (
    <>
      <Intro />
      <Featured featuredProject={featuredProject} />
      <Carousel featuredProject={featuredProject} />
      <Other />
    </>
  )
};


export default Work;