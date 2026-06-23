import './App.css';

function Experience() {
    return (
        <section className="experience-section" id="experience">
  <div className="experience-header-container">
    <h2 className="experience-title">Professional Experience</h2>
    <p className="experience-subtitle">A chronological track record of design engineering engineering excellence across heavy industry sectors.</p>
  </div>

  <div className="timeline-container">
    
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      
      <div className="timeline-content">
        <div className="timeline-header-row">
            <div className="title-block">
        <h3>Senior Electrical & Instrumentation Engineer</h3>
        <span className="timeline-sector">Heavy Processing & Infrastructure Projects</span></div>
        <span className="timeline-date">2022 - Present</span></div>
        <ul>
          <li>Lead engineering modifications, schematic redline verification, and termination schedules for low-voltage brownfield replacements.</li>
          <li>Perform meticulous voltage drop, cable sizing, and protective device discrimination calculations using PowerCAD to enforce strict AS/NZS 3000 compliance.</li>
          <li>Oversee drafting quality assurance across detailed single-line diagrams (SLDs) and instrument loops within complex industrial networks.</li>
        </ul>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-header-row">
            <div className="title-block">
        <h3>Electrical & Instrumentation Engineer</h3>
        <span className="timeline-sector">Mining Asset & Infrastructure Deployments</span>
        </div><span className="timeline-date">2019 - 2022</span></div>
        <ul>
          <li>Designed comprehensive switchboard upgrade profiles and motor control center layout architectures for heavy industrial plant integrations.</li>
          <li>Collaborated directly with structural and piping teams to streamline cable tray layouts and minimize spatial structural interference on site blueprints.</li>
          <li>Drafted instrument loop sheets and automation panel layouts adhering strictly to hazardous area classification requirements.</li>
        </ul>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-header-row">
            <div className="title-block">
        <h3>Graduate Electrical Engineer</h3>
        <span className="timeline-sector">Power Distribution & Renewable Systems</span>
        </div><span className="timeline-date">2017 - 2019</span></div>
        <ul>
          <li>Assisted in drafting electrical protection schemes and physical layouts for commercial-scale solar/PV array grid integrations.</li>
          <li>Processed site markup redlines into production-ready AutoCAD drawings under the mentorship of senior plant engineers.</li>
          <li>Maintained rigorous equipment register logs and technical documentation asset records.</li>
        </ul>
      </div>
    </div>

  </div>
</section>
    )}
export default Experience;