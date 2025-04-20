"use client";
import { useState, useEffect } from "react";
import data from "@/lib/projects.json";
import desingData from "@/lib/designs.json";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState(data);
  const [designs, setDesigns] = useState(desingData);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const filteredDesigns = activeCategory === "All" 
    ? designs 
    : designs.filter(design => design.category === activeCategory);

  return (
    <>
      <section className="mx-4 border border-[#7d4f50] project-page">

        {/* Category filters */}
        <div className="category-filter mb-6 text-center mt-5">
          <button 
            onClick={() => setActiveCategory("All")}
            className={`btn btn-outline mx-2 ${activeCategory === "All" ? "bg-gray-100 text-[#7d4f50]" : "text-gray-500"}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setActiveCategory("Web Dev")}
            className={`btn btn-outline btn-secondary mx-2 ${activeCategory === "Web Dev" ? "bg-gray-200 text-gray-800" : "text-gray-500"}`}
          >
            Web Dev Projects
          </button>
          <button 
            onClick={() => setActiveCategory("Graphic Design")}
            className={`btn btn-outline btn-secondary mx-2 ${activeCategory === "Graphic Design" ? "bg-gray-200 text-gray-800" : "text-gray-500"}`}
          >
            Graphic Design
          </button>
        </div>


        
        {/* Web Dev Projects */}
        <div className="projectList">
          {filteredProjects.map((item, index) => (
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

        {/* Graphic Design Projects */}
        <div className="projectList">
          {filteredDesigns.map((item) => (
            <div className="projectItem" key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <Link href={`/projects/${item.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>

        {activeCategory === "All" && (
          <Link href="/projects">
            <button className="see-more-button">See More All Projects</button>
          </Link>
        )}

        {activeCategory === "Web Dev" && (
          <Link href="/projects/web-dev">
            <button className="see-more-button">See More Web Dev Projects</button>
          </Link>
        )}

        {activeCategory === "Graphic Design" && (
          <Link href="/projects/design">
            <button className="see-more-button">See More Graphic Design Projects</button>
          </Link>
        )}
      </section>
    </>
  );
};

export default Projects;