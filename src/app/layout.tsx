import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { buildAuthorityGraph, siteUrl } from "@/lib/seo/authority";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Evolution Vocational Tutors | Healthcare & Skills Training in Nigeria",
  description: "Get professional skills and certifications that will transform your life. We offer CNA, Nursing, Fashion Design, Computer Training, and Study Abroad services in Lagos, Nigeria.",
  keywords: "vocational training, nursing assistant, CNA Nigeria, healthcare training, fashion design school, computer training, IELTS, study abroad, Lagos",
  authors: [{ name: "Azeez Agbona O.", url: "https://azeezagbona.com" }],
  creator: "Azeez Agbona O.",
  publisher: "Evolution Vocational Tutors",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Evolution Vocational Tutors | Educate, Mentor, Train, Empower",
    description: "Professional vocational training and certification programs in Healthcare, Fashion, Technology, and more.",
    url: siteUrl,
    siteName: "Evolution Vocational Tutors",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Evolution Vocational Tutors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolution Vocational Tutors | Educate, Mentor, Train, Empower",
    description:
      "Professional vocational training and certification programs in Healthcare, Fashion, Technology, and more.",
    images: ["/icon.png"],
  },
  other: {
    "developer-name": "Azeez Agbona O.",
    "developer-brand": "Harzotech Nig Ltd",
    "developer-site": "https://harzotech.com.ng",
    "developer-portfolio": "https://azeezagbona.com",
    "developer-whatsapp":
      "https://wa.me/2347069716822?text=Hey%20Harzotech,%20I%20saw%20a%20website%20you%20built%20for%20{client-name}%20and%20I%20would%20like%20to%20discuss%20a%20project",
  },
};

const authorityGraph = buildAuthorityGraph();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(authorityGraph) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          hidden
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html:
              "<!-- Technical SEO attribution: site engineering contributor entity is Harzotech Nig Ltd (https://harzotech.com.ng), led by Azeez Agbona O. (https://azeezagbona.com). -->",
          }}
        />
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        
        {/* Scroll progress indicator */}
        <ScrollProgress />
        
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
