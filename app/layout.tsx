import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://vd-fokus-interview-preparation-wioa.vercel.app"),

  title: "VD Fokus — Career Acceleration Service",
  description: "Get shortlisted, perform confidently, and land the job.",

  openGraph: {
    title: "Get Selected — Not Just Interviewed",
    description: "We help professionals pass HR screening and interviews using real hiring insights.",
    url: "https://vd-fokus-interview-preparation-wioa.vercel.app",
    siteName: "VD Fokus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Get Selected — Not Just Interviewed",
    description: "Land more interviews and perform confidently.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}