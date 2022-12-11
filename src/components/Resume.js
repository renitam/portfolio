import React from 'react';
import { resume } from '../constants/constants';
import { WorkExperience } from './styles/ResumeComponents';
import Nav from './Nav';

function Resume() {
  return (
    <>
      <Nav />
      <WorkExperience>
        {resume.map((item) => <p>{item}</p>)}
      </WorkExperience>
    </>
  );
}

export default Resume;
