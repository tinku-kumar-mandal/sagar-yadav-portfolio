import React from "react";
import "../projects/projects.css";
import Github from "/pIcons/icons8-github-30.png";

const projectData = [
  {
    id: "01",
    imgUrl: "images/projectsImg/project.png",
    category: "Web Design",
    title: "eCommerce Website🛒",
    description:
      "Developed a fully functional e-commerce website, enabling exclusive shopping access for registered users. Users can effortlessly add or remove items from their cart and refine product searches by price and category.",
    technologies: "React, Node.js, Express.js, MongoDB, RestAPI",
    siteUrl:
      "https://github.com/sagar-kumar-yadav/eCommerce-Application-Using-MERN",
    liveUrl: "https://urbanethnic.netlify.app/",
    alt: "project",
  },
  {
    id: "02",
    imgUrl: "images/projectsImg//project1.png",
    category: "Web Design",
    title: "Image Search Application🖼️",
    description:
      "I create an image search application, I use the Unsplash API to get access to a vast collection of images. You can create a search bar that allows users to search for images based on keywords. I can also add pagination to your application to display the images in a more organized manner",
    technologies: "HTML, CSS, Javascript",
    siteUrl:
      "https://github.com/sagar-kumar-yadav/Image-Search-Application-Using-Javascript",
    liveUrl: "https://dancing-biscuit-d6a534.netlify.app/",
    alt: "project1",
  },
  {
    id: "03",
    imgUrl: "images/projectsImg/project4.png",
    category: "Web Design",
    title: "Drum Kit Website🏩",
    description:
      "I create a drum kit website using JavaScript, HTML, and CSS. The website have buttons that represent different drums in a typical drum set. When you click on any of those buttons, you’ll get the corresponding sound of the drum.",
    technologies: "HTML, CSS, Javascript",
    siteUrl: "https://github.com/sagar-kumar-yadav/Drum-Kit",
    liveUrl: "https://sweet-travesseiro-540fdd.netlify.app/",
    alt: "project4",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="project bg-[#1c1a1a] text-white dark:text-black dark:bg-white"
    >
      <div className="projects_main_container w-[75%]">
        <div className="project_heading_sec p-4">
          <span className="heading max-sm:text-3xl">Projects</span>
          <span className="heading_para max-sm:p-0 max-sm:text-sm">
            Here, you can explore my personal projects about my current
            programming and technology skills. Each project represents a unique
            blend of creativity, problem-solving, and technical expertise.
          </span>
        </div>

        <div className="">
          {projectData.map((p) => (
            <div
              className="flex flex-col lg:flex-row items-center gap-24 p-8 mt-8 max-sm:gap-8"
              style={{ boxShadow: "2px 4px 12px rgba(0,0,0,.08)" }}
              key={p.id}
            >
              <div className="min-w-[19rem] md:w-[33rem]">
                <img src={p.imgUrl} alt={p.alt} className="" />
              </div>
              <div className="">
                <p className=" text-center font-bold pb-2">{p.title}</p>
                <p className="text-center max-sm:w-[19rem]">{p.description}</p>

                <p className="text-center pt-1">
                  <span className=" font-semibold">
                    Tech Stack | {p.technologies}
                  </span>
                </p>
                <div className="flex items-center justify-evenly pt-4">
                  <div className="flex items-end gap-1">
                    <span className=" font-semibold">code</span>
                    <span className="w-6">
                      <a href={p.siteUrl}>
                        <img
                          src={Github}
                          alt="code"
                          className="bg-white rounded-full"
                        />
                      </a>
                    </span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className=" font-semibold">Live Demo</span>
                    <span className="w-5">
                      <a href={p.liveUrl}>
                        <img
                          src="pIcons/open_in_new.png"
                          alt="live-demo"
                          className="bg-white rounded"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
