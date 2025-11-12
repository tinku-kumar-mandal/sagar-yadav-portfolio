import "../about/about.css";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="about dark:bg-[#f7f7f7] dark:text-black">
      <div className="about_main_cont w-[75%]">
        <div className="about_heading_sec">
          <span className="aboutTitle max-sm:text-3xl">About me</span>
          <span className="aboutDesc max-sm:p-0 max-sm:text-sm ">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </div>

        <div className="about_grid w-full flex flex-col lg:flex-row gap-10 2xl:gap-20 pt-4">
          <div className="about_grid_cont flex-grow-[0.7]">
            <h3 className="about_grid_heading max-sm:mb-2 max-sm:text-2xl">
              Get to know me!👀
            </h3>
            <div className="about_content_details">
              <p className="about_para">
                I&apos;m a <strong>Web Developer</strong> building the Front-end and
                Back-end of the Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
              </p>
              <p className="about_para">
                My foundation in <strong>computer science</strong> extends to
                strong knowledge of
                <strong> Java</strong>. I have hands-on experience in
                implementing{" "}
                <strong>Data Structures and Algorithms (DSA)</strong> concepts,
                which have equipped me with problem-solving skills crucial for
                efficient software development.
              </p>
              <p className="about_para">
                I&apos;m open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a opportunity that
                matches my skills then don&apos;t hesitate to
                <strong> contact</strong> me.
              </p>
            </div>
            <div className=" flex gap-10">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
                className="hire_me_btn text-lg text-white rounded-md py-3 px-5"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="about_skills pt-4 flex-grow-[0.3] flex flex-col">
            <h3 className="about_skills_header max-sm:text-2xl  max-sm:m-1">
              My Skills🎉
            </h3>
            <div className="skills pb-4">
              <div className="skill max-sm:m-1">HTML</div>
              <div className="skill max-sm:m-1">CSS</div>
              <div className="skill max-sm:m-1">JavaScript</div>
              <div className="skill max-sm:m-1">React.js</div>
              <div className="skill max-sm:m-1">Next.js</div>
              <div className="skill max-sm:m-1">JAVA</div>
              <div className="skill max-sm:m-1">Python</div>
              <div className="skill max-sm:m-1">Node.js</div>
              <div className="skill max-sm:m-1">Express.js</div>
              <div className="skill max-sm:m-1">MongoDB</div>
              <div className="skill max-sm:m-1">MySql</div>
              <div className="skill max-sm:m-1">Git</div>
              <div className="skill max-sm:m-1">Bootstrap</div>
              <div className="skill max-sm:m-1">Tailwind</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
