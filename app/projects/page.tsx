"use client";
import { useState, useEffect } from "react";
import data from "@/lib/projects.json";
import Header from "../components/header";

const Projects = () => {
  const [projects, setProjects] = useState(data);

  return (
    <>
      <Header />
      <div className="projectList">
        {projects.map((item, index) => (
          <div className="projectItem" key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <ul className="techList">
              {item.technologies.map((tech, i) => (
                <li key={i} className="techItem">{tech}</li>
              ))}
            </ul>
            <a target="_blank" href={item.link} className="visitButton">Visit</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
