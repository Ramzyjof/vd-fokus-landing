export default function Page() {
  return (
    <main style={{ fontFamily: "Arial", background: "#f9fafb", color: "#111" }}>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold" }}>
          Land Interviews Faster with CV & Coaching from Executive Recruiters
        </h1>
        <p style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
          Real recruiter insights to help you pass HR screening & interviews.
        </p>

        <a
          href="https://wa.me/62XXXXXXXXXX"
          style={{
            marginTop: "30px",
            display: "inline-block",
            padding: "14px 28px",
            background: "#111",
            color: "#fff",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Chat via WhatsApp
        </a>
      </section>

      {/* CONTENT */}
      <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>

        {/* PROBLEM */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "26px" }}>Why You’re Not Getting Interviews</h2>
          <ul style={{ lineHeight: "1.8", marginTop: "10px" }}>
            <li>CV not optimized for HR screening</li>
            <li>Weak positioning of experience</li>
            <li>Unstructured interview answers</li>
          </ul>
        </section>

        {/* AUTHORITY */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "26px" }}>Why VD Fokus?</h2>
          <ul style={{ lineHeight: "1.8", marginTop: "10px" }}>
            <li>Executive Search background</li>
            <li>Direct hiring manager insights</li>
            <li>Proven candidate improvement results</li>
          </ul>
        </section>

        {/* SERVICES */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "26px" }}>Our Services</h2>
          <ul style={{ lineHeight: "1.8", marginTop: "10px" }}>
            <li>CV Optimization</li>
            <li>Interview Coaching</li>
            <li>LinkedIn Profile Upgrade</li>
          </ul>
        </section>

        {/* PRICING (CARDS) */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "26px", textAlign: "center" }}>Pricing</h2>

          <div style={{
            display: "grid",
            gap: "20px",
            marginTop: "20px"
          }}>

            <div style={{ padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
              <h3>CV Review</h3>
              <p>IDR 299K</p>
            </div>

            <div style={{ padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
              <h3>Interview Coaching</h3>
              <p>IDR 499K</p>
            </div>

            <div style={{ padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
              <h3>Bundle Package</h3>
              <p>IDR 699K</p>
            </div>

          </div>
        </section>

        {/* TESTIMONIAL */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "26px" }}>Client Results</h2>

          <div style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
          }}>
            <p>
              “After improving my CV, I finally got interview calls within 2 weeks.”
            </p>
            <strong>- Candidate, Jakarta</strong>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2>Ready to Get Hired?</h2>
          <a
            href="https://wa.me/62XXXXXXXXXX"
            style={{
              marginTop: "20px",
              display: "inline-block",
              padding: "14px 28px",
              background: "green",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Book Now via WhatsApp
          </a>
        </section>

      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/62XXXXXXXXXX"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "green",
          color: "#fff",
          padding: "12px 16px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        WhatsApp
      </a>

    </main>
  );
}