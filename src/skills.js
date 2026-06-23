import './App.css';

function Skills() {
    return (
        <section className="skills-section" id="skills">
            <div className="skills-header-container">
            <h2 className="skills-title">Skills & Expertise</h2>
            <p className="skills-subtitle">
                Technical proficiencies across electrical engineering, specialized drafting software, and heavy industry compliance.
            </p>
            </div>
            {/* This is the main grid container holding the 4 cards */}
            <div className="skills-grid">
                
                {/* Card 1 */}
                <div className="skill-card">
                    <h4>ELECTRICAL DESIGN & DRAFTING</h4>
                    <ul>
                        <li>▸ Single Line Diagrams (SLDs)</li>
                        <li>▸ As-Built & Redline Processing</li>
                        <li>▸ Termination Diagrams & Schematics</li>
                        <li>▸ Low Voltage Distribution Boards</li>
                    </ul>
                </div>
                
                {/* Card 2 */}
                <div className="skill-card">
                    <h4>CAD & SOFTWARE TOOLKIT</h4>
                    <ul>
                        <li>▸ Microstation CAD Build (BHP & RTIO)</li>
                        <li>▸ AutoCAD Electrical</li>
                        <li>▸ PowerCAD (LV Modelling)</li>
                        <li>▸ Homer Pro & Nearmaps (Solar/PV)</li>
                    </ul>
                </div>
                
                {/* Card 3 */}
                <div className="skill-card">
                    <h4>STANDARDS & COMPLIANCE</h4>
                    <ul>
                        <li>▸ AS/NZS 3000 & AS/NZS 3008</li>
                        <li>▸ AS/NZS 5033 (Solar Arrays)</li>
                        <li>▸ Hazardous Areas Design</li>
                        <li>▸ BHP SEP-57 & Rio Tinto Standards</li>
                    </ul>
                </div>
                
                {/* Card 4 (Typo fixed here!) */}
                <div className="skill-card">
                    <h4>SYSTEMS & PROJECT MANAGEMENT</h4>
                    <ul>
                        <li>▸ Power Distribution Networks</li>
                        <li>▸ Renewable Energy Microgrids</li>
                        <li>▸ Cable Scheduling & Equipment Lists</li>
                        <li>▸ Deliverables & Drawing Registers</li>
                    </ul>
                </div>

            </div>  
        </section>
    );
}

export default Skills;