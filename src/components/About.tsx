import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a passionate Computer Science student specializing in Cybersecurity, Artificial Intelligence, Full Stack Development, and IoT.
        </p>
        <p className="subpara" style={{ fontSize: "16px", color: "var(--textSecondary)", marginTop: "15px", lineHeight: "24px" }}>
          I enjoy building secure, scalable, and intelligent applications. Currently pursuing my Bachelor of Computer Applications at SHUATS, Prayagraj, with a focus on AI-powered security threat intelligence, identity management, and automated cyber defense architectures.
        </p>
        
        <div className="about-stats-container" style={{ display: "flex", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
          <div className="stat-card" style={{ flex: "1 1 120px", background: "var(--glassBg)", border: "1px solid var(--glassBorder)", padding: "15px", borderRadius: "8px", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(0,240,255,0.05)" }}>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "28px", color: "var(--accentColor)" }}>10+</h4>
            <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--textSecondary)" }}>Certifications</span>
          </div>
          <div className="stat-card" style={{ flex: "1 1 120px", background: "var(--glassBg)", border: "1px solid var(--glassBorderPurple)", padding: "15px", borderRadius: "8px", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(189,0,255,0.05)" }}>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "28px", color: "var(--accentPurple)" }}>BCA</h4>
            <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--textSecondary)" }}>Started 2024</span>
          </div>
          <div className="stat-card" style={{ flex: "1 1 120px", background: "var(--glassBg)", border: "1px solid var(--glassBorder)", padding: "15px", borderRadius: "8px", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(0,240,255,0.05)" }}>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "28px", color: "var(--accentColor)" }}>4+</h4>
            <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--textSecondary)" }}>Key Focus Areas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
