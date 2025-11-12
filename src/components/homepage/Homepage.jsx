import "./homepage.css";
import "./homepage.css";

// import { Link as RouterLink } from "react-router-dom";
import Linkdin from "/pIcons/icons8-linkedin-30.png";
import Github from "/pIcons/icons8-github-30.png";
import Mouse from "./Mouse";
import TechStack from "../../data/techStack.json";

const Homepage = () => {
  return (
    <section className="">
      <div
        id="home"
        className=" bg-[#1c1a1a] text-white dark:text-black dark:bg-[#f7f7f7] relative overflow-hidden"
      >
        <div
          className="home_content flex flex-col m-auto sm:flex-row w-[80%] justify-between py-40 max-lg:pb-8"
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="flex flex-col  lg:mb-0 min-w-[66%] mb-24 max-md:mb-8">
            <span className=" text-xl font-bold text-orange-700">
              Hi There,
            </span>
            <div className="flex gap-4 items-center">
              <h1 className=" text-3xl text-left pt-4">
                <span className=" text-xl font-semibold">I am</span>{" "}
                <span className=" font-bold text-2xl"> Sagar Yadav</span>
              </h1>
            </div>
            <div className=" text-lg font-medium text-left ">
              <span className=" text-5xl font-semibold max-sm:text-3xl max-lg:text-4xl">
                Full-Stack developer👋🏻
              </span>{" "}
              <p className="">
                <span className="font-semibold">based in Pune, India</span>
                <span className="">📍</span>
              </p>
            </div>

            {/* github and linkedin link ----- */}
            <div className="flex gap-2 pt-4">
              <a href="https://www.linkedin.com/in/sagar-kumar-yadav/">
                <img
                  className="w-6 bg-white rounded-full"
                  src={Linkdin}
                  alt="icon"
                />
              </a>

              <a href="https://github.com/sagar-kumar-yadav">
                <img
                  className="w-6 bg-white rounded-full"
                  src={Github}
                  alt="icon"
                />
              </a>
            </div>

            {/* Hire me and download cv */}
            <div
              className="mt-8 flex gap-4
          "
            >
              <a href="mailto:sagarkryadav31@gmail.com">
                <button className="text-lg text-white font-bold rounded-md py-2 px-5 hire_me_btn ">
                  Hire Me
                </button>
              </a>

              <a href="https://drive.google.com/file/d/1-GNWeYR42dAmkEqkcGVOLAI2-61DF1Pd/view?usp=sharing">
                <button className="text-lg  font-semibold rounded-md py-2 px-5 dark:bg-black dark:text-white project_btn">
                  Download CV
                </button>
              </a>
            </div>

            {/* Tech Stack ----------------- */}
            <div className="flex flex-wrap gap-4 items-center mt-8 font-bold ">
              <p>Tech Stack |</p>
              {TechStack.map((t) => (
                <div className="w-8" key={t.id}>
                  <img src={t.src} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 flex justify-center">
            <div className="rounded-full overflow-hidden w-[17rem] h-[17rem] max-lg:w-[12rem] max-lg:h-[12rem]">
              <img src="portfolioimgs/home_1.png" alt="portfolio_img" />
            </div>
          </div>
        </div>
        {/* mouse */}
        {/* <div className="home_mouse">
        <div className="mouse dark:before:bg-black dark:border-b dark:border-solid border-[#787373] before:bg-white"></div>
      </div> */}
      </div>
      
        <Mouse />
    
    </section>
  );
};

export default Homepage;
