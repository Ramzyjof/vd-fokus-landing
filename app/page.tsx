"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "id">("en");
  const menuItems: { name: string; id: string }[] = [
  { name: "Home", id: "cas-hero" },
  { name: "Problem", id: "cas-problem" },
  { name: "Why Us", id: "cas-why" },
  { name: "Process", id: "cas-process" },
  { name: "Package", id: "cas-package" },
  { name: "Visit", id: "cas-visit" }
];
const text = {
  en: {
    translate: "Bahasa Indonesia",

    heroTitle:
      "Get Selected, Not Just Interviewed",

    heroSubtitle:
      "We help professionals pass HR screening and interviews using real hiring insights.",

    whyFail:
      "Why You Keep Failing Interviews",

    whyFailText:
      "Most candidates don’t fail because they lack experience, they fail because they present it poorly.",

    fail1:
      "❌ No structured interview preparation",

    fail2:
      "❌ Lack of real feedback or practice",

    fail3:
      "❌ Weak communication & body language",

    whyVD:
      "Why VD Fokus?",

    whyVDText:
      "We know what hiring managers actually look for, because we’ve been on the other side.",

    vd1:
      "✅ 20+ years of Executive Search experience",

    vd2:
      "✅ Direct insight into hiring decisions",

    vd3:
      "✅ Proven strategies to get shortlisted",

    vd4:
      "✅ Focused on real outcomes: interviews & offers",

    testimonials:
      "What Professionals Say",

    process:
      "How It Works",

    package:
      "Career Acceleration Services Package",

    packageText:
      "Everything you need to get shortlisted, perform confidently, and secure job offers.",

    launch:
      "🚀 Launch Offer (Only 5 slots available)",

    seeDetails:
      "See Full Details",

    hideDetails:
      "Hide Details",

    gain:
      "What you will gain from this session:",

    outcome:
      "🎯 Final Outcome",

    outcomeText:
      "Higher chance of passing interviews and securing job offers.",

    session:
      "📌 Session Details",

    book:
      "Book via WhatsApp",

    visit:
      "Visit Us",

    visitText:
      "Come visit our office in West Java",

    direction:
      "Get Directions →"
  },

  id: {
    translate: "English",

    heroTitle:
      "Dapatkan Pekerjaan, Bukan Sekadar Interview",

    heroSubtitle:
      "Kami membantu profesional lolos screening HR dan interview menggunakan insight nyata dari dunia rekrutmen.",

    whyFail:
      "Kenapa Anda Terus Gagal Interview",

    whyFailText:
      "Sebagian besar kandidat gagal bukan karena kurang pengalaman, tetapi karena tidak mampu menyampaikannya dengan baik.",

    fail1:
      "❌ Tidak memiliki persiapan interview yang terstruktur",

    fail2:
      "❌ Kurangnya feedback dan latihan nyata",

    fail3:
      "❌ Komunikasi dan body language yang lemah",

    whyVD:
      "Mengapa VD Fokus?",

    whyVDText:
      "Kami memahami apa yang sebenarnya dicari hiring manager karena kami pernah berada di posisi mereka.",

    vd1:
      "✅ Pengalaman Executive Search lebih dari 20 tahun",

    vd2:
      "✅ Insight langsung terhadap keputusan hiring",

    vd3:
      "✅ Strategi terbukti untuk meningkatkan peluang shortlist",

    vd4:
      "✅ Fokus pada hasil nyata: interview & job offer",

    testimonials:
      "Apa Kata Profesional",

    process:
      "Bagaimana Prosesnya",

    package:
      "Paket Career Acceleration Service",

    packageText:
      "Semua yang Anda butuhkan untuk meningkatkan peluang shortlist, tampil percaya diri, dan mendapatkan job offer.",

    launch:
      "🚀 Promo Launching (Hanya tersedia 5 slot)",

    seeDetails:
      "Lihat Detail Lengkap",

    hideDetails:
      "Sembunyikan Detail",

    gain:
      "Yang akan Anda dapatkan dari sesi ini:",

    outcome:
      "🎯 Hasil Akhir",

    outcomeText:
      "Peluang lebih tinggi untuk lolos interview dan mendapatkan job offer.",

    session:
      "📌 Detail Sesi",

    book:
      "Booking via WhatsApp",

    visit:
      "Kunjungi Kami",

    visitText:
      "Kunjungi kantor kami di Jawa Barat",

    direction:
      "Buka Google Maps →"
  }
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -100;
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, []);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  
  
}, []);

  return (
    <main
  style={{
    position: "relative", // 🔥 added
    overflow: "hidden",   // 🔥 added
    fontFamily: "Inter, sans-serif",
    background: "radial-gradient(circle at top, #1e293b, #0f172a)",
    color: "#fff",
    minHeight: "100vh"
    
  }}
>
<header
  style={{
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    background: "rgba(11,18,32,0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(127,29,29,0.2)",
    transition: "all 0.3s ease",
    padding: scrolled ? "10px 0" : "16px 0"
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "auto",
      padding: "0 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    {/* LOGO */}
    <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer"
  }}
  onClick={() => {
  window.location.href = "https://vdfokus.co.id/";
}}
>
  <Image
    src="/logo.png"
    alt="VD Fokus"
    width={32}
    height={32}
    style={{
      objectFit: "contain"
    }}
  />

  <span style={{ fontWeight: 600 }}>
    VD Fokus
  </span>
</div>

    {/* DESKTOP MENU */}
    <nav
  style={{
    display: isMobile ? "none" : "flex",
    gap: "18px",
    fontSize: scrolled ? "13px" : "14px",
    alignItems: "center"
  }}
>
  {menuItems.map((item, i) => (
    <span
      key={i}
      onClick={() => scrollToSection(item.id)}
      style={{
        cursor: "pointer",
        color: "#94a3b8"
      }}
    >
      {item.name}
    </span>
  ))}

  {/* LANGUAGE BUTTON */}
  <div
  onClick={() =>
    setLanguage(
      language === "en"
        ? "id"
        : "en"
    )
  }
  style={{
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent:
      language === "en"
        ? "flex-start"
        : "flex-end",
    width: "110px",
    height: "46px",
    borderRadius: "999px",
    background:
      "rgba(255,255,255,0.08)",
    border:
      "1px solid rgba(255,255,255,0.12)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    padding: "4px"
  }}
>
  {/* SLIDER */}
  <div
    style={{
      position: "absolute",
      top: "4px",
      left:
        language === "en"
          ? "4px"
          : "calc(100% - 50px)",
      width: "42px",
      height: "38px",
      borderRadius: "999px",
      background:
        "linear-gradient(135deg,#3B82F6,#7F1D1D)",
      transition: "all 0.3s ease",
      boxShadow:
        "0 4px 12px rgba(0,0,0,0.4)"
    }}
  />

  {/* ENGLISH */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "6px",
      color: "#fff",
      fontWeight: 600,
      fontSize: "13px"
    }}
  >
    <img
      src="https://flagcdn.com/w40/us.png"
      alt="English"
      style={{
        width: "18px",
        height: "18px",
        borderRadius: "999px",
        objectFit: "cover"
      }}
    />

    {language === "en" && "EN"}
  </div>

  {/* INDONESIA */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "6px",
      color: "#fff",
      fontWeight: 600,
      fontSize: "13px"
    }}
  >
    {language === "id" && "ID"}

    <img
      src="https://flagcdn.com/w40/id.png"
      alt="Indonesia"
      style={{
        width: "18px",
        height: "18px",
        borderRadius: "999px",
        objectFit: "cover"
      }}
    />
  </div>
</div>
</nav>

    {/* HAMBURGER */}
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      style={{
        display: isMobile ? "block" : "none",
        cursor: "pointer",
        fontSize: "20px"
      }}
    >
      ☰
    </div>
  </div>

  {/* MOBILE DROPDOWN */}
  <div
    style={{
      maxHeight: menuOpen ? "300px" : "0px",
      overflow: "hidden",
      transition: "all 0.3s ease",
      background: "rgba(11,18,32,0.98)",
      borderTop: "1px solid rgba(127,29,29,0.2)"
    }}
  >
    {menuItems.map((item, i) => (
      <div
        key={i}
        onClick={() => {
          scrollToSection(item.id);
          setMenuOpen(false);
        }}
        style={{
          padding: "14px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          cursor: "pointer",
          color: "#94a3b8"
        }}
      >
        {item.name}
      </div>
    ))}
  </div>

  {/* RED ACCENT */}
  <div
    style={{
      height: "2px",
      background:
        "linear-gradient(to right, transparent, #7F1D1D, transparent)",
      opacity: 0.6
    }}
  />
</header>
      {/* HERO */}
      <section
  id="cas-hero"
  style={{
    position: "relative", // REQUIRED for watermark
    textAlign: "center",
    paddingTop: isMobile ? "140px" : "180px",
    paddingBottom: isMobile ? "60px" : "80px",
    paddingLeft: "20px",
    paddingRight: "20px",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: "all 1s ease"
  }}
>

  {/* TITLE */}
  <h1
  style={{
    position: "relative",
    zIndex: 1,
    fontSize: isMobile ? "26px" : "48px",
    fontWeight: 600,
    letterSpacing: "-1px"
  }}
>
  {
    language === "en"
      ? "Get Selected, Not Just Interviewed"
      : "Dapatkan Pekerjaan, Bukan Sekadar Interview"
  }
</h1>
  {/* SUBTITLE */}
  <p
  style={{
    position: "relative",
    zIndex: 1,
    marginTop: "16px",
    color: "#94a3b8",
    fontSize: "18px"
  }}
>
  {
    language === "en"
      ? "We help professionals pass HR screening and interviews using real hiring insights."
      : "Kami membantu profesional lolos screening HR dan interview menggunakan insight nyata dari dunia rekrutmen."
  }
</p>

</section>

      {/* DIVIDER */}
      <div
        style={{
          width: "60%",
          margin: "0 auto 40px",
          borderTop: "1px solid rgba(127,29,29,0.2)",
          borderBottom: "1px solid rgba(127,29,29,0.2)"
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          padding: isMobile ? "20px 16px" : "40px 20px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(60px)",
          transition: "all 1s ease 0.2s"
        }}
      >
        {/* WHY FAIL */}
        <div id="cas-problem" style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "12px", scrollMarginTop: "100px" }}>
            {text[language].whyFail}
          </h2>

          <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
            {text[language].whyFailText}
          </p>

          <ul style={{ lineHeight: "2", color: "#e2e8f0" }}>
            <li>{text[language].fail1}</li>
            <li>{text[language].fail2}</li>
            <li>{text[language].fail3}</li>
          </ul>
        </div>
        
{/* WHY VD FOKUS */}
<div id="cas-why"
  style={{
    marginBottom: "60px",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(60px)",
    transition: "all 1s ease 0.3s",
    scrollMarginTop: "100px"
  }}
>
  <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
    {text[language].whyVD}
  </h2>

  <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
    {text[language].whyVDText}
  </p>

 <ul style={{ lineHeight: "2", color: "#e2e8f0" }}>
  <li>
    {
      language === "en"
        ? "✅ 20+ years of Executive Search experience"
        : "✅ Pengalaman Executive Search lebih dari 20 tahun"
    }
  </li>

  <li>
    {
      language === "en"
        ? "✅ Direct insight into hiring decisions"
        : "✅ Insight langsung terhadap keputusan hiring"
    }
  </li>

  <li>
    {
      language === "en"
        ? "✅ Proven strategies to get shortlisted"
        : "✅ Strategi terbukti untuk meningkatkan peluang shortlist"
    }
  </li>

  <li>
    {
      language === "en"
        ? "✅ Focused on real outcomes: interviews & offers"
        : "✅ Fokus pada hasil nyata: interview & job offer"
    }
  </li>
</ul>
</div>
{/* TESTIMONIALS */}
<div id="cas-testimonials" style={{ marginBottom: "60px" }}>
  <h2 style={{ fontSize: "22px", marginBottom: "20px", scrollMarginTop: "100px" }}>
    {text[language].testimonials}
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px"
    }}
  >
    {[
  {
    text:
      language === "en"
        ? "After applying the changes, I finally started getting interview calls within 2 weeks."
        : "Setelah menerapkan perubahan yang disarankan, saya akhirnya mulai mendapatkan panggilan interview dalam 2 minggu.",

    name:
      language === "en"
        ? "Senior Candidate"
        : "Kandidat Senior",

    role:
      language === "en"
        ? "Operations Manager"
        : "Manager Operasional"
  },

  {
    text:
      language === "en"
        ? "The interview preparation completely changed how I present myself. I felt much more confident."
        : "Persiapan interview benar-benar mengubah cara saya mempresentasikan diri. Saya jadi jauh lebih percaya diri.",

    name:
      language === "en"
        ? "Mid-Level Professional"
        : "Profesional Mid-Level",

    role:
      language === "en"
        ? "Finance Executive"
        : "Eksekutif Finance"
  },

  {
    text:
      language === "en"
        ? "This helped me understand what hiring managers actually look for. Huge difference."
        : "Program ini membantu saya memahami apa yang sebenarnya dicari hiring manager. Hasilnya sangat berbeda.",

    name:
      language === "en"
        ? "Job Seeker"
        : "Pencari Kerja",

    role:
      language === "en"
        ? "Business Analyst"
        : "Business Analyst"
  }
].map((t, i) => (
      <div
        key={i}
        style={{
          padding: "20px",
          borderRadius: "16px",
          background: "#1F2937",
          border: "1px solid rgba(127,29,29,0.25)",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-5px)";
  e.currentTarget.style.background = "#2A1A1A";
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.background = "#1F2937";
}}
      >
        <p style={{ color: "#e2e8f0", marginBottom: "12px", lineHeight: "1.6" }}>
          “{t.text}”
        </p>

        <div style={{ fontSize: "13px", color: "#94a3b8" }}>
          <strong style={{ color: "#fff" }}>{t.name}</strong> — {t.role}
        </div>
      </div>
    ))}
  </div>
</div>
<div
  id="cas-process"
  style={{
    marginBottom: "80px",
    scrollMarginTop: "100px"
  }}
>
  <h2 style={{ fontSize: "24px", marginBottom: "30px" }}>
    {text[language].process}
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
      gap: "20px"
    }}
  >
    {[
  {
    step: "01",

    title:
      language === "en"
        ? "Book Your Session"
        : "Booking Sesi Anda",

    desc:
      language === "en"
        ? "Contact us via WhatsApp to secure your slot. Limited sessions available each week."
        : "Hubungi kami melalui WhatsApp untuk mengamankan slot Anda. Slot terbatas setiap minggu."
  },

  {
    step: "02",

    title:
      language === "en"
        ? "Get Personalized Strategy"
        : "Dapatkan Strategi Personal",

    desc:
      language === "en"
        ? "We review your CV, experience, and target role to identify what’s holding you back."
        : "Kami mereview CV, pengalaman, dan target posisi Anda untuk mengetahui apa yang menghambat Anda."
  },

  {
    step: "03",

    title:
      language === "en"
        ? "Practice & Improve"
        : "Latihan & Tingkatkan",

    desc:
      language === "en"
        ? "Go through mock interviews, structured answers, and real feedback to boost your performance."
        : "Lakukan mock interview, latihan jawaban terstruktur, dan dapatkan feedback nyata untuk meningkatkan performa Anda."
  }
].map((item, i) => (
      
      <div
        key={i}
        style={{
          padding: "24px",
          borderRadius: "16px",
          background: "#1F2937",
          border: "1px solid rgba(127,29,29,0.25)",
          transition: "all 0.3s ease",
          position: "relative"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.background = "#2A1A1A";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "#1F2937";
        }}
      >
        {/* STEP NUMBER */}
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#7F1D1D",
            marginBottom: "8px"
          }}
        >
          STEP {item.step}
        </div>

        {/* TITLE */}
        <h3 style={{ marginBottom: "10px" }}>
          {item.title}
        </h3>

        {/* DESC */}
        <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6" }}>
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>
       {/* PACKAGE */}
<div id="cas-package"
  tabIndex={0}
  style={{
    padding: isMobile ? "20px" : "32px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    transition: "all 0.3s ease",
    outline: "none",
    marginTop: "40px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
    scrollMarginTop: "100px"
  }}

  // 🖱 HOVER
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.6)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  }}

  // ⌨ FOCUS (TAB)
  onFocus={(e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.6)";
  }}

  onBlur={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  }}

>
  <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
    {text[language].package}
  </h2>

  <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
    {text[language].packageText}
  </p>

  {/* PRICE */}
  <div style={{ marginBottom: "20px" }}>
    <span
      style={{
        textDecoration: "line-through",
        color: "#64748b",
        marginRight: "10px",
        fontSize: "22px"
      }}
    >
      IDR 400K
    </span>

    <span
      style={{
        fontSize: "24px",
        fontWeight: 600
      }}
    >
      IDR 299K
    </span>
  </div>

  <p style={{ color: "#facc15", fontSize: "14px", marginBottom: "20px" }}>
    {text[language].launch}
  </p>

  <div
    style={{
      borderTop: "1px solid rgba(127,29,29,0.2)",
      borderBottom: "1px solid rgba(127,29,29,0.2)",
      margin: "20px 0"
    }}
  />
<button
  onClick={() => setShowDetails(!showDetails)}
  style={{
    marginBottom: "20px",
    padding: "10px 20px",
    borderRadius: "999px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease"
  }}
>
  {
  showDetails
    ? text[language].hideDetails
    : text[language].seeDetails
}
</button>
<div
  style={{
    maxHeight: showDetails ? "none" : "0px",
    overflow: "hidden",
    transition: "all 0.5s ease",
    opacity: showDetails ? 1 : 0,
    transform: showDetails ? "translateY(0)" : "translateY(-10px)"
  }}
>
  {/* DROPDOWN DETAIL */}
  <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
    {text[language].gain}
  </p>

  {/* ITEM */}
  {[
  {
    title:
      language === "en"
        ? "Clarity on What Interviewers Want"
        : "Memahami Apa yang Dicari Interviewer",

    desc:
      language === "en"
        ? "Understand how hiring managers evaluate candidates and what makes them select or reject."
        : "Pahami bagaimana hiring manager menilai kandidat dan alasan kandidat diterima atau ditolak."
  },

  {
    title:
      language === "en"
        ? "Structured Answer Framework"
        : "Framework Jawaban Terstruktur",

    desc:
      language === "en"
        ? "Learn how to answer questions clearly, professionally, and with strong impact."
        : "Pelajari cara menjawab pertanyaan secara jelas, profesional, dan impactful."
  },

  {
    title:
      language === "en"
        ? "Realistic Mock Interview"
        : "Mock Interview Realistis",

    desc:
      language === "en"
        ? "Practice in a real interview simulation so you’re fully prepared for the actual situation."
        : "Latihan interview dengan simulasi nyata agar lebih siap menghadapi interview sesungguhnya."
  },

  {
    title:
      language === "en"
        ? "Personalized Feedback"
        : "Feedback Personal",

    desc:
      language === "en"
        ? "Get direct, actionable feedback on what to improve and how to fix it immediately."
        : "Dapatkan feedback langsung dan actionable tentang apa yang harus diperbaiki."
  },

  {
    title:
      language === "en"
        ? "Confidence & Communication Upgrade"
        : "Upgrade Komunikasi & Confidence",

    desc:
      language === "en"
        ? "Improve how you speak, present yourself, and handle pressure during interviews."
        : "Tingkatkan cara berbicara, membangun kesan profesional, dan menghadapi tekanan interview."
  },

  {
    title:
      language === "en"
        ? "Real Interview Readiness"
        : "Kesiapan Interview Nyata",

    desc:
      language === "en"
        ? "Walk into interviews with clarity, confidence, and a much higher chance of success."
        : "Masuk interview dengan lebih jelas, percaya diri, dan peluang sukses yang jauh lebih tinggi."
  }
].map((item, i) => (
    <div
      key={i}
      style={{
        marginBottom: isMobile ? "14px" : "18px",
        maxHeight: showDetails ? (isMobile ? "1500px" : "1200px") : "0px",
        padding: isMobile ? "14px" : "16px",
        borderRadius: "12px",
        background: "#1F2937",
        border: "1px solid rgba(127,29,29,0.25)",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: "6px" }}>
        {item.title}
      </div>
      <div style={{ color: "#94a3b8", fontSize: "14px" }}>
        {item.desc}
      </div>
    </div>
  ))}

  {/* OUTCOME BOX */}
  <div
    style={{
      marginTop: "20px",
      padding: "18px",
      borderRadius: "14px",
      background: "rgba(34,197,94,0.1)",
      border: "1px solid rgba(34,197,94,0.3)"
    }}
  >
    <div style={{ fontWeight: 600, marginBottom: "6px" }}>
      {text[language].outcome}
    </div>
    <div style={{ color: "#bbf7d0" }}>
      {text[language].outcomeText}
    </div>
  </div>
   {/* SESSION DETAILS */}
{/* SESSION DETAILS */}
<div
  style={{
    marginTop: "20px",
    marginBottom: "30px",
    padding: "18px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)"
  }}
>
  {/* TITLE */}
  <div
    style={{
      fontWeight: 600,
      marginBottom: "10px"
    }}
  >
    {
      language === "en"
        ? "📌 Session Details"
        : "📌 Detail Sesi"
    }
  </div>

  {/* CONTENT */}
  <div
    style={{
      color: "#cbd5f5",
      lineHeight: "1.8",
      fontSize: "14px",
      whiteSpace: "pre-line"
    }}
  >
    {
      language === "en"
        ? `• Each session is designed as a focused 60-minute deep-dive to maximize results.
• Additional time can be arranged if needed (+IDR 100K per hour).
• We recommend conducting the session in person at our office for maximum results.
• Online sessions are also available via Google Meet or Microsoft Teams.`

        : `• Setiap sesi dirancang sebagai deep-dive fokus selama 60 menit untuk memaksimalkan hasil.
• Tambahan waktu tersedia jika dibutuhkan (+IDR 100K per jam).
• Kami merekomendasikan sesi dilakukan langsung di kantor kami untuk hasil terbaik.
• Sesi online juga tersedia melalui Google Meet atau Microsoft Teams.`
    }
  </div>
</div>
</div>

  {/* FEATURES */}
  {[
  language === "en"
    ? "CV Optimization"
    : "Optimasi CV",

  language === "en"
    ? "Interview Preparation"
    : "Persiapan Interview",

  language === "en"
    ? "Mock Interview Session + Feedback"
    : "Mock Interview + Feedback",

  language === "en"
    ? "🎁 Get a free follow-up interview preparation session when you land your first interview"
    : "🎁 Dapatkan sesi persiapan interview gratis saat Anda mendapatkan panggilan interview pertama",

  language === "en"
    ? "⏱ Optional extension: +IDR 100K / hour"
    : "⏱ Tambahan waktu opsional: +IDR 100K / jam"
].map((item, i) => (
    <div
      key={i}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "10px"
      }}
    >
      <span style={{ color: "#22c55e" }}>✔</span>
      <span style={{ color: "#cbd5f5" }}>{item}</span>
    </div>
  ))}

  {/* BUTTON */}
  <a
  href="https://wa.me/6285121305329?text=Hi%20VD%20Fokus,%20I'm%20interested%20in%20your%20Career%20Acceleration%20Service.%20Can%20you%20guide%20me?"
  style={{
  display: "inline-block",
  marginTop: "20px",
  padding: isMobile ? "12px 20px" : "10px 20px",
width: isMobile ? "100%" : "auto",
textAlign: "center",
  borderRadius: "999px",
  background: "#3B82F6",
  border: "1px solid #7F1D1D",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 500,
  animation: "pulse 1.5s"
  
}}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
    e.currentTarget.style.boxShadow = "0 0 25px rgba(34,197,94,0.8)";
    e.currentTarget.style.background = "#7F1D1D";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(34,197,94,0.3)";
    e.currentTarget.style.background = "#3B82F6";
  }}
  
>
  Book via WhatsApp
</a>
</div>
<section
  id="cas-contact"
  style={{
    padding: "100px 20px",
    background: "rgba(255,255,255,0.02)",
    borderTop: "1px solid rgba(127,29,29,0.2)",
    borderBottom: "1px solid rgba(127,29,29,0.2)",
    textAlign: "center",
    scrollMarginTop: "100px"
  }}
>
  <div style={{ maxWidth: "700px", margin: "0 auto" }}>
    
    {/* TITLE */}
    <div id="cas-visit" style={{ marginBottom: "20px" }}>
      <h2
        style={{
          fontSize: "32px",
          fontWeight: 600,
          color: "#e5e7eb"
        }}
      >
        {text[language].visit}
      </h2>
    </div>

    {/* SUBTITLE */}
    <p
      style={{
        color: "#94a3b8",
        marginBottom: "30px",
        fontSize: "16px"
      }}
    >
      {text[language].visitText}
    </p>

    {/* LOGO (REPLACES COMPANY NAME) */}
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px"
  }}
>
  <Image
    src="/logo.png"
    alt="VD Fokus"
    width={80}
    height={80}
    style={{
      filter: "drop-shadow(0 0 10px rgba(127,29,29,0.6))"
    }}
  />
</div>

    {/* ADDRESS */}
    <p
      style={{
        fontSize: "15px",
        color: "#94a3b8",
        marginBottom: "30px",
        lineHeight: "1.6"
      }}
    >
      City Walk 07, Citra Gran Jl. Alternatif Cibubur No.12, RT.005/RW.011, Jatikarya, Kec. Jatisampurna, Kota Bks, Jawa Barat 17435
    </p>

    {/* BUTTON */}
    <a
      href="https://www.google.com/maps?q=-6.3836475,106.9248334"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        marginBottom: "40px",
        padding: "12px 24px",
        borderRadius: "999px",
        background: "#3B82F6",
        border: "1px solid #7F1D1D",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 500,
        textDecoration: "none",
        boxShadow: "0 0 20px rgba(127,29,29,0.4)",
        transition: "all 0.3s ease"
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.transform = "scale(1.05)")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      {text[language].direction}
    </a>

    {/* MAP */}
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid rgba(127,29,29,0.25)"
      }}
    >
      <iframe
        src="https://www.google.com/maps?q=-6.3836475,106.9248334&z=15&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>

  </div>
</section>
      </div> 
</main>
  );
}