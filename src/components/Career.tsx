import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>Sam Higginbottom University (SHUATS), Prayagraj</h5>
              </div>
              <h3>2024 – Present</h3>
            </div>
            <p>
              Pursuing BCA with a focus on Cybersecurity, Artificial Intelligence,
              Full Stack Development, and IoT. Building hands-on skills through
              industry-grade projects and professional certifications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Job Simulations</h4>
                <h5>Deloitte · Mastercard · Tata (via Forage)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed professional cybersecurity job simulations — including
              incident triage, phishing simulation design, threat analysis with
              MITRE ATT&CK mapping, and Identity & Access Management strategy
              for enterprise environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML & Geospatial Faculty Workshop</h4>
                <h5>Electronics & ICT Academy, IIT Guwahati</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Participated in a MeitY-supported faculty development workshop
              focused on the intersection of artificial intelligence, machine
              learning, and geographic information systems (GIS) for resilient
              and sustainable resource management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source & Personal Projects</h4>
                <h5>Self-Directed Learning & GitHub</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building AI-powered SOC dashboards, IoT telemetry systems, security
              auditing tools, and interactive web experiences. Actively
              contributing to open-source and pursuing advanced certifications
              in cybersecurity and generative AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
