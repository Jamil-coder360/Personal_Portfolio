import { useState, useEffect } from "react";

const socialLinks = [
  { label: "Bē", href: "#" },
  { label: "in", href: "#" },
  { label: "✦", href: "#" },
  { label: "⊙", href: "#" },
];

function ContactCard({ title, value, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "28px 32px",
        borderRadius: "16px",
        backgroundColor: hovered ? "#1a1a1a" : "#141414",
        border: "1px solid #2a2a2a",
        textDecoration: "none",
        flex: 1,
        minWidth: 0,
        transition:
          "background-color 0.25s ease, border-color 0.25s ease, transform 0.25s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        cursor: "pointer",
      }}
    >
      <p
        style={{
          color: "#aaa",
          fontSize: "15px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          margin: 0,
          lineHeight: 1.5,
          marginBottom: "32px",
        }}
      >
        {title}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: "#E8A94A",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            transition: "color 0.2s ease",
          }}
        >
          {value}
        </span>
        <span
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid #333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "14px",
            transform: hovered ? "rotate(0deg)" : "rotate(-45deg)",
            transition: "transform 0.3s ease",
          }}
        >
          ↗
        </span>
      </div>
    </a>
  );
}

export default function MarkHenryFooter() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-up-1 { animation: fadeUp 0.7s ease both; animation-delay: 0.05s; }
        .fade-up-2 { animation: fadeUp 0.7s ease both; animation-delay: 0.2s; }
        .fade-up-3 { animation: fadeUp 0.7s ease both; animation-delay: 0.35s; }
        .fade-up-4 { animation: fadeUp 0.7s ease both; animation-delay: 0.5s; }
        .fade-up-5 { animation: fadeUp 0.7s ease both; animation-delay: 0.65s; }

        .mark-name {
          font-size: clamp(72px, 14vw, 200px);
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          color: #F0E8DA;
          letter-spacing: -0.02em;
          line-height: 0.9;
          margin: 0;
          text-transform: uppercase;
        }

        .social-link {
          color: #666;
          text-decoration: none;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s ease;
        }
        .social-link:hover { color: #fff; }

        .back-top {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #888;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .back-top:hover { color: #fff; }
        .back-top:hover .arrow-up { transform: translateY(-3px); }

        .arrow-up {
          transition: transform 0.2s ease;
          display: inline-block;
        }
      `}</style>

      <footer
        style={{
          backgroundColor: "#0D0D0D",
          padding: "60px 48px 36px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease",
          boxSizing: "border-box",
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Headline + Socials */}
          <div
            className="fade-up-1"
            style={{
              flex: "0 0 260px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(32px, 4vw, 52px)",
                  color: "#fff",
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: 4,
                    left: -8,
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "#E8A94A",
                    zIndex: 0,
                  }}
                />
                <span style={{ position: "relative", zIndex: 1 }}>
                  Let's work
                </span>
              </h2>
              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(32px, 4vw, 52px)",
                  color: "#fff",
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                together
              </h2>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  color: "#888",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Based in Germany
              </span>
              <span style={{ color: "#333" }}>|</span>
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} className="social-link">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div
            className="fade-up-2"
            style={{
              display: "flex",
              gap: "20px",
              flex: 1,
              minWidth: 0,
              flexWrap: "wrap",
            }}
          >
            <ContactCard
              title="Looking for a hectic designer?"
              value="hello@henry.com"
              href="mailto:hello@henry.com"
            />
            <ContactCard
              title="Want a more in-depth look at my history?"
              value="+598 6879 9874"
              href="tel:+59868799874"
            />
          </div>
        </div>

        {/* Big Name */}
        <div
          className="fade-up-4"
          style={{
            marginTop: "48px",
            marginBottom: "8px",
            overflow: "hidden",
          }}
        >
          <p className="mark-name">Mark Henry</p>
        </div>

        {/* Footer Bar */}
        <div
          className="fade-up-5"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "20px",
            borderTop: "1px solid #1e1e1e",
          }}
        >
          <span
            style={{
              color: "#555",
              fontSize: "13px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ©2023 Mark Henry, All Rights Reserved
          </span>
          <a
            href="#top"
            className="back-top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to Top <span className="arrow-up">↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}
