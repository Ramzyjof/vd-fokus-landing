export default function Page() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial", maxWidth: "800px", margin: "auto" }}>
      
      {/* HERO */}
      <h1>Land Interviews Faster with CV & Coaching from Executive Recruiters</h1>
      <p>
        We help professionals pass HR screening & interviews using real recruiter insights.
      </p>

      <br />

      {/* CTA */}
      <a 
        href="https://wa.me/6281212940797"
        style={{
          display: "inline-block",
          padding: "12px 20px",
          background: "black",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none"
        }}
      >
        Chat via WhatsApp
      </a>

      <hr style={{ margin: "40px 0" }} />

      {/* PROBLEM */}
      <h2>Why You’re Not Getting Interviews</h2>
      <ul>
        <li>Your CV is not optimized for HR screening</li>
        <li>You don’t know what recruiters are looking for</li>
        <li>Your interview answers lack structure</li>
      </ul>

      <hr style={{ margin: "40px 0" }} />

      {/* AUTHORITY */}
      <h2>Why VD Fokus?</h2>
      <ul>
        <li>Executive Search background</li>
        <li>Direct hiring manager insights</li>
        <li>Handled candidates across multiple industries</li>
      </ul>

      <hr style={{ margin: "40px 0" }} />

      {/* SERVICES */}
      <h2>Our Services</h2>
      <ul>
        <li>CV Optimization</li>
        <li>Interview Coaching</li>
        <li>LinkedIn Profile Upgrade</li>
      </ul>

      <hr style={{ margin: "40px 0" }} />

      {/* PRICING */}
      <h2>Pricing</h2>
      <ul>
        <li>CV Review → IDR 299K</li>
        <li>Interview Coaching → IDR 499K</li>
        <li>Bundle Package → IDR 699K</li>
      </ul>

      <hr style={{ margin: "40px 0" }} />

      {/* FINAL CTA */}
      <h2>Ready to Get Hired?</h2>
      <a 
        href="https://wa.me/6281212940797"
        style={{
          display: "inline-block",
          padding: "12px 20px",
          background: "green",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none"
        }}
      >
        Book Now via WhatsApp
      </a>

    </main>
  );
}