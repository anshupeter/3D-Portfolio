import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaSearch, FaTimes, FaExternalLinkAlt, FaAward, FaEye } from "react-icons/fa";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import "./styles/Certifications.css";

interface Certification {
  id: string;
  title: string;
  provider: string;
  date: string;
  duration?: string;
  image: string;
  category: "cyber" | "github" | "ai" | "business";
  skills: string[];
  verification: string;
  description?: string;
}

const certificationsData: Certification[] = [
  {
    id: "deloitte-cyber",
    title: "Cyber Job Simulation",
    provider: "Deloitte · Forage",
    date: "November 8, 2025",
    duration: "Self-Paced Job Simulation",
    image: "/images/deloitte-cyber-job-simulation.jpg",
    category: "cyber",
    skills: ["Cyber Security Fundamentals", "Security Operations", "Incident Response Mindset", "Professional Consulting Skills"],
    verification: "Enrolment Code: e6tbpBmhMXdPNRW7c · User Code: R2mvnq2qvvvBzAT7S",
    description: "Completed professional cybersecurity tasks simulating the role of a Deloitte cybersecurity analyst. Modeled real-world attack incident triage, executive briefings, and security controls analysis."
  },
  {
    id: "mastercard-cyber",
    title: "Cybersecurity Job Simulation",
    provider: "Mastercard · Forage",
    date: "October 6, 2025",
    duration: "Self-Paced Job Simulation",
    image: "/images/cybersecurity-job-simulation.jpg",
    category: "cyber",
    skills: ["Phishing Simulation Design", "Phishing Analysis", "Threat Awareness", "Security Awareness Training"],
    verification: "Enrolment Code: Sg9csXLPfMdyv53GB · User Code: R2mvnq2qvvvBzAT7S",
    description: "Designed security training simulations and built phishing analyzer reports to protect employees. Analyzed threat vectors and developed strategic responses to corporate social engineering threats."
  },
  {
    id: "tata-cyber",
    title: "Cybersecurity Analyst Job Simulation",
    provider: "Tata · Forage",
    date: "June 18, 2025",
    duration: "Self-Paced Job Simulation",
    image: "/images/cert1.jpg",
    category: "cyber",
    skills: ["Identity Access Management", "IAM Strategy", "Custom Solutions", "Platform Integration"],
    verification: "Verification Code: jNexuvtFKdWbSRX4t",
    description: "Modeled identity management architectures and strategic security controls for digital assets. Designed solutions for client authentication and authorization patterns."
  },
  {
    id: "iit-guwahati",
    title: "AI/ML & Geospatial Faculty Workshop",
    provider: "Electronics & ICT Academy, IIT Guwahati",
    date: "March 21, 2025",
    duration: "Faculty Development Workshop",
    image: "/images/cert8.jpg",
    category: "ai",
    skills: ["AI/ML Basics", "Geospatial Technologies", "Resilient Systems Strategy", "Sustainable Resource Management"],
    verification: "Ref: EICT/P-II/OL/24-25/024/035",
    description: "MeitY-supported faculty development workshop focused on the intersection of artificial intelligence, machine learning, and geographic information systems (GIS)."
  },
  {
    id: "linkedin-github",
    title: "Career Essentials in GitHub Professional Certificate",
    provider: "LinkedIn Learning",
    date: "June 5, 2025",
    duration: "4 hours 18 minutes",
    image: "/images/cert2.jpg",
    category: "github",
    skills: ["GitHub", "Version Control", "Project Management", "Collaborative Workflows"],
    verification: "ID: aa287e7e523d6384e0b4d1bc0b0e09b27bfbed147dd35b749c8055a8bf5615c2",
    description: "Comprehensive professional curriculum covering Git fundamentals, branching strategies, remote workflows, and core collaboration capabilities on the GitHub platform."
  },
  {
    id: "microsoft-business",
    title: "Career Essentials in Business Analysis",
    provider: "Microsoft & LinkedIn",
    date: "June 5, 2025",
    duration: "11 hours 53 minutes",
    image: "/images/cert3.jpg",
    category: "business",
    skills: ["Requirements Gathering", "Project Management", "Business Analysis"],
    verification: "ID: ed51ef5d693568ebfc9373683e787b7e707cf18404e662af66597cc6946bcd92",
    description: "Curated program covering requirements lifecycle, data-driven decision making, stakeholder communication, and standard tools for business analysts."
  },
  {
    id: "microsoft-ai",
    title: "Career Essentials in Generative AI",
    provider: "Microsoft & LinkedIn",
    date: "May 23, 2025",
    duration: "5 hours 43 minutes",
    image: "/images/cert4.jpg",
    category: "ai",
    skills: ["Microsoft Copilot", "Generative AI", "Responsible AI", "AI Ethics"],
    verification: "ID: 36803cc73581dce9bcc9761ae63f049560001e4f303995cc4dbcf2a869076ad0",
    description: "Training in generative AI models, prompt engineering basics, ethical usage frameworks, and utilizing Microsoft Copilot in business environments."
  },
  {
    id: "linkedin-github-pm",
    title: "Practical GitHub Project Management and Collaboration",
    provider: "LinkedIn Learning",
    date: "May 23, 2025",
    duration: "1.25 PDUs / Contact Hours",
    image: "/images/cert5.jpg",
    category: "github",
    skills: ["GitHub Project Management", "Collaboration", "Workflow Management"],
    verification: "ID: ef3e5ce534a899db064c35a8a61bd3700f88386a5622e0af80177bcf43aa3f72",
    description: "Focused training on utilizing GitHub Projects, Issues, Milestones, and Kanban boards to manage software delivery and team collaboration."
  },
  {
    id: "linkedin-ba-intro",
    title: "What Is Business Analysis?",
    provider: "LinkedIn Learning (IIBA® Endorsed)",
    date: "May 22, 2025",
    duration: "1.00 CDUs",
    image: "/images/cert6.jpg",
    category: "business",
    skills: ["Business Analysis", "Process Analysis", "Requirements Management"],
    verification: "ID: 63b74cac39c92fe3aa416a35472429c76e6d6971338cf76fc67d5f49d8f0e550",
    description: "Core concepts of the business analysis profession, including understanding organizational needs, identifying solutions, and guiding change."
  },
  {
    id: "linkedin-ai-intro",
    title: "What Is Generative AI?",
    provider: "LinkedIn Learning",
    date: "May 22, 2025",
    duration: "1 hour 3 minutes",
    image: "/images/cert7.jpg",
    category: "ai",
    skills: ["Generative AI Tools", "Artificial Intelligence", "AI Applications"],
    verification: "ID: c0792a106125773e63bd4c48989d48f4a673c05ef39ff220493c3b55aeced816",
    description: "Introductory overview of generative AI, large language models (LLMs), and how they are transforming modern industry workflows."
  }
];

const CertModal = ({ cert, onClose }: { cert: Certification; onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent GSAP from hijacking scroll inside the modal
  useEffect(() => {
    const el = modalRef.current;
    const stopPropagation = (e: Event) => e.stopPropagation();
    
    if (el) {
      el.addEventListener("wheel", stopPropagation, { passive: false });
      el.addEventListener("touchmove", stopPropagation, { passive: false });
    }

    return () => {
      if (el) {
        el.removeEventListener("wheel", stopPropagation);
        el.removeEventListener("touchmove", stopPropagation);
      }
    };
  }, []);

  if (!cert) return null;

  return createPortal(
    <div className="cert-modal-overlay" onClick={onClose}>
      <div 
        ref={modalRef}
        className="cert-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="cert-modal-grid">
          <div className="cert-modal-image-container">
            <img src={cert.image} alt={cert.title} />
          </div>
          <div className="cert-modal-details">
            <span className="modal-provider">{cert.provider}</span>
            <h3 className="modal-title">{cert.title}</h3>
            <p className="modal-date">
              <strong>Issued:</strong> {cert.date} {cert.duration && `(${cert.duration})`}
            </p>
            {cert.description && (
              <div className="modal-description">
                <strong>Overview:</strong>
                <p>{cert.description}</p>
              </div>
            )}
            <div className="modal-skills">
              <strong>Verified Skills:</strong>
              <div className="modal-skills-list">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="modal-skill-chip">{skill}</span>
                ))}
              </div>
            </div>
            <div className="modal-verification">
              <strong>Verification details:</strong>
              <p>{cert.verification}</p>
            </div>
            <a
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              className="view-full-btn"
            >
              View Full Certificate <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Certifications = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "cyber" | "github" | "ai" | "business">("all");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);
    return () => clearTimeout(timer);
  }, [activeCategory, search]);

  const filteredCerts = certificationsData.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(search.toLowerCase()) ||
      cert.provider.toLowerCase().includes(search.toLowerCase()) ||
      cert.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase())) ||
      (cert.description && cert.description.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory = activeCategory === "all" || cert.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cert-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filteredCerts]);

  return (
    <section className="certifications-section" id="certifications">
      <div className="certs-container section-container">
        <div className="section-header">
          <h2 className="title">
            Professional <span>Certifications</span>
          </h2>
          <p className="subtitle">Verified credentials, job simulations, and educational milestones.</p>
        </div>

        {/* Search & Filters */}
        <div className="certs-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by title, skills, or provider..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-chips">
            {(["all", "cyber", "github", "ai", "business"] as const).map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === "all"
                  ? "All"
                  : cat === "cyber"
                  ? "Cybersecurity"
                  : cat === "github"
                  ? "GitHub & Git"
                  : cat === "ai"
                  ? "AI & Emerging Tech"
                  : "Business Analysis"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="certs-grid" ref={gridRef}>
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="cert-card"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="cert-card-icon">
                <FaAward />
              </div>
              <div className="cert-card-content">
                <span className="cert-provider">{cert.provider}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-date">{cert.date}</span>
                {cert.duration && (
                  <span className="cert-duration-badge">{cert.duration}</span>
                )}
                <div className="cert-skills-tags">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="skill-tag count">+{cert.skills.length - 3}</span>
                  )}
                </div>
              </div>
              <button
                className="cert-view-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCert(cert);
                }}
              >
                <FaEye /> View Details
              </button>
            </div>
          ))}
          {filteredCerts.length === 0 && (
            <div className="no-certs">No credentials found matching your criteria.</div>
          )}
        </div>
      </div>

      {/* Detail Lightbox Modal — rendered via Portal to escape stacking context */}
      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
};

export default Certifications;
