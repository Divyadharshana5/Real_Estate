import React from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  return (
    <div
      className="container max-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces,Building Legacies-Explore Our Portfolio
      </p>

      <div className="relative w-full h-full">
        <div className="absolute bottom-4 right-4 flex items-center space-x-3">
          <button
            className=" p-2 bg-gray-200 rounded"
            aria-label="Previous Project"
          >
            <img src={assets.left_arrow} alt="Previous" className="w-6 h-6" />
          </button>

          <button className="p-2 bg-gray-200 rounded" aria-label="Next Project">
            <img src={assets.right_arrow} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full h-full  sm:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-3 py-auto shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span>{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
