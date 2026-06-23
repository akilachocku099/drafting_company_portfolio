import ElectricalDiagram from './ElectricalDiagram';
import './App.css';

function About() {
    return (
       <section className="about" id="about">
  <div className="about-content">
    <p className="hero-tag">⚡ Senior Electrical & Instrumentation Engineer</p>
    <h1 className="hero-name">Laxman</h1>
    <p className="hero-sub">
      5+ years delivering electrical designs for BHP, Rio Tinto and FMG. 
      Now available for freelance electrical engineering projects in Perth.
      Precision electrical drawings. Clean documentation. Standards-compliant designs for commercial, industrial, and residential projects.
    </p>
    <div className="hero-buttons">
      <a href="#projects" className="btn-primary">View My Work</a>
      <a href="#contact" className="btn-secondary">Hire Me</a>
    </div>
  </div>
  
  <div className="about-diagram">
    <ElectricalDiagram />
  </div>
</section>
    )
}
export default About;
        