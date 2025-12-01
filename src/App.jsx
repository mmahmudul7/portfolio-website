import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experiences />
      <Projects />
      <Skills />
      {/* <Contact /> */}
    </>
  );
}
