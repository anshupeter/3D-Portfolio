import { useState, useEffect, useRef } from "react";
import { MdArrowOutward, MdCopyright, MdContentCopy, MdCheck } from "react-icons/md";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "anshupeter1@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(".section-title, .contact-subtitle", 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1, 
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // Info Panel Animation
      gsap.fromTo(infoRef.current, 
        { x: -50, opacity: 0 },
        { 
          x: 0, opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      // Form Panel Animation
      gsap.fromTo(formRef.current, 
        { x: 50, opacity: 0 },
        { 
          x: 0, opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-section section-container" id="contact" ref={sectionRef}>
      <div className="contact-container">
        <h3 className="section-title">Get In <span>Touch</span></h3>
        <p className="contact-subtitle" style={{ color: "var(--textSecondary)", marginBottom: "40px" }}>
          Have a project in mind, an opportunity, or just want to connect? Drop a message!
        </p>

        <div className="contact-flex" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "50px" }}>
          {/* Info Side */}
          <div className="contact-info-panel" ref={infoRef} style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <div className="contact-detail-card">
              <FaEnvelope className="contact-icon" />
              <div>
                <h5 style={{ margin: 0, color: "var(--textSecondary)", fontSize: "12px", textTransform: "uppercase" }}>Email</h5>
                <a href={`mailto:${emailAddress}`} style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }} data-cursor="disable">
                  {emailAddress}
                </a>
              </div>
              <button 
                onClick={handleCopyEmail}
                style={{ marginLeft: "auto", background: "rgba(255,255,255,0.05)", border: "none", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}
                title="Copy Email Address"
              >
                {copied ? <MdCheck style={{ color: "var(--accentGreen)" }} /> : <MdContentCopy />}
              </button>
            </div>

            <div className="contact-detail-card purple">
              <FaPhone className="contact-icon" />
              <div>
                <h5 style={{ margin: 0, color: "var(--textSecondary)", fontSize: "12px", textTransform: "uppercase" }}>Phone</h5>
                <a href="tel:+917355299945" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }} data-cursor="disable">
                  +91 73552 99945
                </a>
              </div>
            </div>

            <div className="contact-detail-card">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h5 style={{ margin: 0, color: "var(--textSecondary)", fontSize: "12px", textTransform: "uppercase" }}>Location</h5>
                <span style={{ color: "#fff", fontWeight: 500 }}>
                  Prayagraj, Uttar Pradesh, India
                </span>
              </div>
            </div>

            <div className="social-links-row" style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
              <a
                href="https://github.com/anshupeter"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="social-btn"
              >
                <FaGithub /> GitHub <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/anshu-peter-1b3b67323"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="social-btn linkedin"
              >
                <FaLinkedin /> LinkedIn <MdArrowOutward />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-panel" ref={formRef}>
            <form action="https://formspree.io/f/mlgewgao" method="POST" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="styled-input"
                />
              </div>
              <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="styled-input"
                />
              </div>
              <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="styled-input"
                />
              </div>
              <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="styled-input"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="styled-submit-btn"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="footer-credits" style={{ marginTop: "80px", paddingTop: "30px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--textSecondary)", fontSize: "14px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <span style={{ color: "#fff", fontWeight: 500 }}>Anshu Peter</span> · Cybersecurity & Web Developer
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <MdCopyright /> 2026 Anshu Peter. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
