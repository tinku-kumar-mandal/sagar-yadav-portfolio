import PropTypes from 'prop-types';
import "./navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ toggleTheme, darkMode, isOpen, toggleMenu }) => {
  return (
    <header className=" fixed h-16 z-50 w-full flex items-center bg-[#323232] text-white dark:bg-white dark:text-black border-b border-solid border-[#787373]">
      <div className="flex items-center w-[86%] max-md:w-[92%] justify-between min-w-max m-auto ">
        {/* Logo And Name --------------------------------------------------------*/}
        <div className=" ">
          <a href="#" className="">
            <span className=" font-bold text-2xl">Sagar.dev</span>
          </a>
        </div>
        {/* Menus --------------------------------------------------------------------*/}
        <div className=" min-w-max flex items-center gap-4 ">
          <ul className="menu-items max-md:hidden">
            <li>
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="header_link "
              >
                <span className=" font-bold">Home</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="header_link "
              >
                <span className=" font-bold">About</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
                className="header_link "
              >
                <span className=" font-bold">Projects</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
                className="header_link "
              >
                <span className=" font-bold">Contact</span>
              </ScrollLink>
            </li>
          </ul>

          <button onClick={toggleTheme} className="p-2">
            {darkMode ? (
              <FiSun size={24} color={"black"} />
            ) : (
              <MdOutlineNightlight size={24} color={"white"} />
            )}
          </button>

          {/* hamb btn */}
          <div className="pt-2 md:hidden mr-[-14px]">
            <button
              type="button"
              className=""
              aria-controls=",onile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <BiMenu size={26} className={`${isOpen ? "hidden" : "block"} `} />
            </button>
          </div>
          <div className="pt-2 md:hidden">
            <button
              type="button"
              className=""
              aria-controls=",onile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <AiOutlineClose
                size={26}
                className={`${isOpen ? "block" : "hidden"} `}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block pt-4" : "hidden"
        } md:hidden bg-white text-black `}
        id="mobile-menu"
      >
        <div className="flex flex-col gap-4 text-md fixed top-16 right-0 bottom-0  w-5/6 max-w-[10rem] py-6 px-6 bg-[#1e1b1b] text-white overflow-y-auto items-end">
          <ScrollLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="header_link "
            onClick={toggleMenu}
          >
            <span className=" font-bold">Home</span>
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="header_link "
            onClick={toggleMenu}
          >
            <span className=" font-bold">About</span>
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={850}
            duration={500}
            className="header_link "
            onClick={toggleMenu}
          >
            <span className=" font-bold">Skills</span>
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-45}
            duration={500}
            className="header_link "
            onClick={toggleMenu}
          >
            <span className=" font-bold">Projects</span>
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-45}
            duration={500}
            className="header_link "
            onClick={toggleMenu}
          >
            <span className=" font-bold">Contact</span>
          </ScrollLink>
        </div>
      </div>
    </header>
    // </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
