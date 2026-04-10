import "./globals.css";

export const metadata = {
  title: "VD Fokus — Career Acceleration Service",
  description:
    "We help professionals pass HR screening and interviews using real hiring insights.",

  openGraph: {
    title: "VD Fokus — Career Acceleration Service",
    description:
      "Get shortlisted, perform confidently, and land the job.",
    url: "https://vd-fokus-interview-preparation-wioa.vercel.app",
    siteName: "VD Fokus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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