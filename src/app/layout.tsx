import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evolution Vocational Tutors | Healthcare & Skills Training in Nigeria",
  description: "Get professional skills and certifications that will transform your life. We offer CNA, Nursing, Fashion Design, Computer Training, and Study Abroad services in Lagos, Nigeria.",
  keywords: "vocational training, nursing assistant, CNA Nigeria, healthcare training, fashion design school, computer training, IELTS, study abroad, Lagos",
  openGraph: {
    title: "Evolution Vocational Tutors | Educate, Mentor, Train, Empower",
    description: "Professional vocational training and certification programs in Healthcare, Fashion, Technology, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
