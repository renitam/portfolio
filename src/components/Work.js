import React from 'react';
import Intro from './Intro';
import Featured from './Featured';
import Carousel from './Carousel';
import Other from './Other';

function Work({ featuredProject }) {
  return (
    <>
      <Intro />
      <main>
        <Featured featuredProject={featuredProject} />
        <Carousel featuredProject={featuredProject} />
        <Other />
      </main>
    </>
  );
}

export default Work;
