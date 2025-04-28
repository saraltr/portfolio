"use client";
import { useState, useEffect } from "react";
import data from "@/lib/projects.json";
import desingData from "@/lib/designs.json";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState(data);
  const [designs, setDesigns] = useState(desingData);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((design) => design.category === activeCategory);

  return (
    <>
      <section className="mx-4 border border-[#7d4f50] project-page">
        <h2 className="my-2 mx-5">🚧under construction🚧</h2>
      </section>
    </>
  );
};

export default Projects;
