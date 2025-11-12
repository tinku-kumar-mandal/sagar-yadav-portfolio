import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import useLocalStorage from "use-local-storage";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  
  

  return (
    <div
      className={`${darkMode && "dark"} w-full bg-white mih-h-[100vh] h-full`}
    >
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} isOpen={isOpen} toggleMenu={toggleMenu}/>
      <Homepage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
