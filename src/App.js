import React from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';

import { projects } from './constants/constants';
import Work from './components/Work';
import Resume from './components/Resume';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [featuredProject, setFeaturedProject] = React.useState(projects[3]);

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Work featuredProject={featuredProject} />} />
          <Route path='/work' element={<Work featuredProject={featuredProject} />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element = {<Resume />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
