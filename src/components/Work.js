import React from 'react';
import Intro from './Intro';
import Featured from './Featured';
import Carousel from './Carousel';
import Other from './Other';

function Work({ featuredProject }) {
  return (
    <>
      <Intro />
      <Carousel featuredProject={featuredProject} />
      {/* <Other /> */}
    </>
  );
}

export default Work;
