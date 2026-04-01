"use client";

export default function Page() {
  return (
    <main
      style={{
        fontFamily: "'Segoe UI', Arial",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#fff",
        minHeight: "100vh"
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px 40px"
        }}
      >
        <img src="/logo.png" alt="VD Fokus" style={{ height: "42px" }} />
      </div>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h1 style={{ fontSize: "34px", fontWeight: "700" }}>
          Land Interviews Faster with CV & Coaching
        </h1>
        <p style={{ marginTop: "12px", color: "#cbd5e1" }}>
          Real recruiter insights to help you pass HR screening.
        </p>
      </section>

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "20px"
        }}
      >
        {/* SECTION COMPONENT */}
        {[
          {
            title: "Why You’re Not Getting Interviews",
            items: [
              "CV not optimized for HR screening",
              "Weak positioning of experience",
              "Unstructured interview answers"
            ]
          },
          {
            title: "Why VD Fokus?",
            items: [
              "Executive Search background",
              "Direct hiring manager insights",
              "Proven candidate improvements"
            ]
          },
          {
            title: "Our Services",
            items: [
              "CV Optimization",
              "Interview Coaching",
              "LinkedIn Upgrade"
            ]
          }
        ].map((section, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "24px",
              borderRadius: "14px",
              marginBottom: "24px",
              backdropFilter: "blur(8px)"
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "12px"
              }}
            >
              {section.title}
            </h2>

            <ul style={{ paddingLeft: "18px", lineHeight: "1.9", color: "#e2e8f0" }}>
              {section.items.map((item, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
