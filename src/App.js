import './App.css';
import Navbar from "./navbar";
import About from "./about";
import Skills from "./skills";
import Project from "./project";
import Experience from "./experience";
import Contact from "./contact";

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Target sections wrapped with IDs so your Navbar links can slide to them */}
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}

export default App;