import React from "react";
import { resume } from "../constants/constants";
import { WorkExperience } from "./styles/ResumeComponents";
import Nav from "./Nav";

const Resume = () => {
  return (
    <>
      <Nav />
      <WorkExperience>
        {resume.map(item => {
          return 
        })}
      </WorkExperience>
    </>
  )
};

export default Resume;