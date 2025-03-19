"use client";
import { useState, useEffect } from "react";
import data from "@/lib/projects.json";
import Header from "../components/header";
import desingData from "@/lib/designs.json";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState(data);
  const [designs, setdesigns] = useState(desingData);

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
      <div className="projectList">
      {designs.map((item) => (
        <div className="projectItem" key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Link href={`/projects/${item.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default Projects;
