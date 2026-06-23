import './App.css';
import project1 from './project1.jpg';
import project2 from './project2.jpg';
import project3 from './project3.jpg';  

function Project() {
    return (
        <section className="project-section" id="projects">
            <div className="project-header-container">
            <h2 className="project-title">Project Experience</h2>
            <p className="project-subtitle">
                Detailed overview of my professional projects and contributions.
            </p>
            </div>
            {/* This is the main grid container holding the 4 cards */}
            <div className="project-grid">
                
                {/* Card 1 */}
                <div className="project-card">
                    <img src={project1} alt="Project 1" className="project-image" />
                    <h4>MINING & MINERALS</h4>
                    <p>BHP Switchboard Upgrade</p>
                    <p>Led electrical engineering project for low voltage distribution systemsLed electrical engineering design for low-voltage brownfield distribution systems...</p>
                </div>
                
                {/* Card 2 */}
                <div className="project-card">
                    <img src={project2} alt="Project 2" className="project-image" />
                    <h4>Renewable Infrastructure</h4>
                    <p>Commercial Solar Array & Protection Design</p>
                    <p>Modeled a grid-connected commercial solar layout using PowerCAD. Performed maximum demand and voltage drop calculations to AS/NZS 5033 standards.</p>
                </div>
                
                {/* Card 3 */}
                <div className="project-card">
                    <img src={project3} alt="Project 3" className="project-image" />
                    <h4>Control Systems & Instrumentation</h4>
                    <p>Greenfield PLC Cubicle Internal Design</p>
                    <p>Engineered detailed internal layout drawings, instrument loop schematics, and marshalling panel schedules for remote IO field installations.</p>
                </div>
                

            </div>  
        </section>
    );
}

export default Project;