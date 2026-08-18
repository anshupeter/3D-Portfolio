import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Work.css";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "cyberlog",
    num: "01",
    title: "AI CyberLog Analyzer",
    category: "Cybersecurity & AI",
    description: "AI-powered SOC dashboard offering real-time threat detection, anomaly classification, and automated MITRE ATT&CK security mapping.",
    tech: ["React", "Express", "Node", "SQLite", "Tailwind CSS", "WebSockets"],
    image: "/images/cyber_log_analyzer.png",
    github: "https://github.com/anshupeter/AI-CyberLog-Analyzer-Live-Monitering--",
  },
  {
    id: "iotwheat",
    num: "02",
    title: "IoT Wheat Health System",
    category: "IoT & Smart Agriculture",
    description: "Solar-powered hardware telemetry system measuring soil pH, moisture, rain levels, and battery health with real-time cloud data visualization.",
    tech: ["Arduino", "NodeMCU", "ESP32", "pH Sensor", "Rain Sensor", "Solar Telemetry"],
    image: "/images/wheat_health_telemetry.png",
    github: "https://github.com/anshupeter"
  },
  {
    id: "permauditor",
    num: "03",
    title: "AI Permission Auditor",
    category: "Security & AI Agents",
    description: "A security auditing tool utilizing multi-agent AI systems to scan, trace, and identify high-risk access permissions in server infrastructure.",
    tech: ["Python", "Agentic AI", "Security Graph API", "JSON-RPC"],
    image: "/images/permission_auditor.png",
    github: "https://github.com/anshupeter/ai-"
  },
  {
    id: "portfolio",
    num: "04",
    title: "Interactive Cyber Portfolio",
    category: "Frontend Design",
    description: "A state-of-the-art interactive developer portfolio built with futuristic dark themes, neon lights, and WebGL animations.",
    tech: ["React", "Vite", "Three.js", "GSAP", "Framer Motion", "HSL CSS"],
    image: "/images/Portfolio.png",
    github: "https://github.com/anshupeter/Portfolio-Site",
    demo: "https://anshupeter.tech"
  },
  {
    id: "studentrecord",
    num: "05",
    title: "Student Record Management",
    category: "Java Application",
    description: "A comprehensive student record management system built with Java for managing academic records, student information, and administrative tasks efficiently.",
    tech: ["Java", "OOP", "File I/O", "Data Structures"],
    image: "/images/student.png",
    github: "https://github.com/anshupeter/Student-Record-Management-System"
  }
];

const Work = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const projectRows = gsap.utils.toArray<HTMLElement>(".project-row");

      projectRows.forEach((project) => {
        gsap.fromTo(
          project,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%", 
              toggleActions: "play none none reverse"
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="work-section" id="projects" ref={containerRef}>
      <div className="work-container section-container">
        <div className="section-header">
          <h2 className="title">
            Featured <span>Projects</span>
          </h2>
          <p className="subtitle">Secure digital applications built with AI, IoT, and modern web frameworks.</p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={project.id} 
                className={`project-row ${isEven ? "normal" : "reverse"}`}
              >
                {/* Text Side */}
                <div className="project-details">
                  <span className="project-num">{project.num}</span>
                  <span className="project-cat">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="project-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-btn github"
                    >
                      <FaGithub /> GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-btn demo"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual Side */}
                <div className="project-visual">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} />
                    <div className="image-overlay"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
