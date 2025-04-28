"use client";
import { useState } from "react";
import data from "@/lib/projects.json";
import Link from "next/link";

const WebDevProjects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const webDevProjects = data.filter(
    (project) => project.category === "Web Dev",
  );

  const allTechnologies = Array.from(
    new Set(webDevProjects.flatMap((project) => project.technologies)),
  );

  const filteredProjects = selectedTech
    ? webDevProjects.filter(
        (project) =>
          project.technologies.includes(selectedTech) &&
          (project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase())),
      )
    : webDevProjects.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );

  const projectsPerPage = 6;
  const currentProjects = filteredProjects.slice(
    (page - 1) * projectsPerPage,
    page * projectsPerPage,
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <section className="mx-4 border border-[#5b6bc0] project-page">
      <div className="filter-dev text-center">
        <label htmlFor="search-project" className="sr-only">
          Search
        </label>
        <input
          id="search-project"
          type="text"
          placeholder="🔎 Search Projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full sm:w-80 md:w-96 border border-[#7c83db] rounded-lg focus:outline-none bg-[#1f2235] text-[#e6e6f2]"
        />
      </div>

      {selectedTech && (
        <div className="filter-dev text-center">
          <span className="text-[#b2b3ff]">
            Filtering by: <strong>{selectedTech}</strong>
          </span>
          <button
            onClick={() => setSelectedTech(null)}
            className="ml-4 underline text-[#7c83db] hover:text-[#a3a8f5] transition"
          >
            Clear Filter
          </button>
        </div>
      )}

      <div className="projectList">
        {currentProjects.map((item, index) => (
          <div className="projectItem card text-white" key={index}>
            <figure>
              <img
                src={item.image}
                alt={`${item.name} image`}
                className="w-full h-64 object-cover object-top"
              />
            </figure>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <ul className="techList flex flex-wrap justify-center gap-2 mt-2">
              {item.technologies.map((tech, i) => (
                <li
                  key={i}
                  onClick={() => setSelectedTech(tech)}
                  className="cursor-pointer bg-[#7c83db] hover:bg-[#a3a8f5] text-[#1f2235] px-3 py-1 rounded-full text-sm font-medium transition"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="text-center mt-4 flex justify-center gap-2">
              <a
                target="_blank"
                href={item.link}
                className="visitButton text-[#1f2235] bg-[#7c83db] hover:bg-[#a3a8f5] px-4 py-2 rounded border border-[#b2b3ff] shadow-[2px_2px_0px_#b2b3ff] hover:shadow-[4px_4px_0px_#b2b3ff] transition-all"
              >
                Visit
              </a>
              {item.learnMore && (
                <a
                  target="_blank"
                  href={item.learnMore}
                  className="visitButton bg-[#7c83db] hover:bg-[#a3a8f5] text-[#1f2235] px-4 py-2 rounded border border-[#b2b3ff] shadow-[2px_2px_0px_#b2b3ff] hover:shadow-[4px_4px_0px_#b2b3ff] transition-all"
                >
                  Learn More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination flex justify-center gap-4 my-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="prev-button bg-[#7c83db] text-[#1f2235] px-6 py-2 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-[#e6e6f2] font-medium py-2 px-1">{`Page ${page} of ${totalPages}`}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="next-button bg-[#7c83db] text-[#1f2235] px-6 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default WebDevProjects;
