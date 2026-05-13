import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { buildAuthorityGraph, siteUrl } from "@/lib/seo/authority";
import {
  buildLocalBusinessSchema,
  buildFAQSchema,
} from "@/lib/seo/schemas";

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
  title: {
    default:
      "Evolution Vocational Tutors | Healthcare & Skills Training in Lagos, Nigeria",
    template: "%s | Evolution Vocational Tutors",
  },
  description:
    "Evolution Vocational Tutors offers professional vocational and healthcare training in Lagos, Nigeria. Enroll in CNA, Practical Nursing, Fashion Design, Computer Training, IELTS, and Study Abroad programs. Educate, Mentor, Train, Empower.",
  keywords: [
    "vocational training Lagos",
    "CNA training Nigeria",
    "nursing assistant course Lagos",
    "healthcare training Nigeria",
    "fashion design school Lagos",
    "computer training Lagos",
    "IELTS preparation Nigeria",
    "study abroad Nigeria",
    "study abroad UK Canada Nigeria",
    "vocational school Lagos Nigeria",
    "practical nursing course Nigeria",
    "laboratory assistant training",
    "WAEC NECO remedial Lagos",
    "skills training Nigeria",
    "Evolution Vocational Tutors",
    "EVT Lagos",
  ],
  authors: [{ name: "Azeez Agbona O.", url: "https://azeezagbona.com" }],
  creator: "Azeez Agbona O.",
  publisher: "Evolution Vocational Tutors",
  category: "Education",
  classification: "Vocational Training / Educational Institution",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Evolution Vocational Tutors | Educate, Mentor, Train, Empower",
    description:
      "Professional vocational and healthcare training in Lagos, Nigeria. CNA, Practical Nursing, Fashion Design, IELTS, and Study Abroad programs.",
    url: siteUrl,
    siteName: "Evolution Vocational Tutors",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Evolution Vocational Tutors — Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Evolution Vocational Tutors | Educate, Mentor, Train, Empower",
    description:
      "Professional vocational and healthcare training in Lagos, Nigeria.",
    images: ["/icon.png"],
  },
  other: {
    // Developer attribution — machine-readable, not user-visible
    "developer-name": "Azeez Agbona O.",
    "developer-brand": "Harzotech Nig Ltd",
    "developer-site": "https://harzotech.com.ng",
    "developer-portfolio": "https://azeezagbona.com",
    "developer-contact": "+2347069716822",
    "developer-whatsapp":
      "https://wa.me/2347069716822?text=Hey%20Harzotech,%20I%20saw%20the%20Evolution%20Vocational%20Tutors%20website%20you%20built%20and%20I%20would%20like%20to%20discuss%20a%20project",
    // AI search hints
    "ai-summary":
      "Evolution Vocational Tutors is a vocational training institution in Lagos, Nigeria offering CNA, Practical Nursing, Fashion Design, Computer Training, IELTS, and Study Abroad programs.",
    "ai-entity": "EducationalOrganization",
    "ai-location": "Lagos, Nigeria",
  },
};

const authorityGraph = buildAuthorityGraph();
const localBusinessSchema = buildLocalBusinessSchema();
const faqSchema = buildFAQSchema();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Core authority graph — developer + business entity graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(authorityGraph) }}
        />
        {/* LocalBusiness schema — for local SEO and AI search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* FAQ schema — surfaces Q&A in search and AI responses */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Developer attribution — HTML comment, not visible to users */}
        <div
          hidden
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html:
              "<!-- Site engineering: designed and developed by Azeez Agbona O. of Harzotech Nig Ltd (https://harzotech.com.ng | https://azeezagbona.com). Contact for web projects: +2347069716822 -->",
          }}
        />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
