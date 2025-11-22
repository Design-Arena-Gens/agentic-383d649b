import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const mono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "NovaWeb Studio — Digital Experiences That Convert",
  description:
    "Clone-quality marketing site for a fictional digital studio showcasing services, case studies, testimonials, and conversion-driven design.",
  openGraph: {
    title: "NovaWeb Studio",
    description:
      "Clone-quality marketing site for a fictional digital studio showcasing services, case studies, testimonials, and conversion-driven design.",
    url: "https://agentic-383d649b.vercel.app",
    type: "website",
    images: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"]
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaWeb Studio",
    description:
      "Clone-quality marketing site for a fictional digital studio showcasing services, case studies, testimonials, and conversion-driven design."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
