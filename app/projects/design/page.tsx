"use client";
import { useState, useEffect } from "react";
import desingData from "@/lib/designs.json";
import Nav from "@/app/components/header";
import Link from "next/link";
import Image from "next/image";
import { Fullscreen } from "lucide-react";

const GraphicDesignProjects = () => {
  const [designs, setDesigns] = useState(desingData);

  const graphicDesignProjects = designs.filter(design => design.category === "Graphic Design");

  return (
    <>
      <section className="mx-4 border border-[#7d4f50] project-page">
        
        <div className="projectList design-list">
          {graphicDesignProjects.map((item) => (
            <div className="projectItem card" key={item.id}>
              <figure>
              <Image
                src={item.image}
                alt={`${item.name} image`}
                className="w-full h-64 object-cover "
                width={500} 
                height={500}
                />
            </figure>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <div className="text-center mt-4 flex justify-center gap 2">
              <Link href={`/projects/${item.link}`}className="visitButton text-[#2b2724] bg-[#7EA680] hover:bg-[#98caa0] btn px-4 py-2 rounded border border-[#e8bcb9] shadow-[2px_2px_0px_#e8bcb9] hover:shadow-[4px_4px_0px_#e8bcb9] transition-all">
                <button>View Details</button>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GraphicDesignProjects;
