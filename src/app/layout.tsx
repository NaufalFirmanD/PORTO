import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://naufalfirman.my.id";
const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Naufal Firman Dhani",
  url: siteUrl,
  jobTitle: "Fullstack Developer",
  sameAs: [
    "https://github.com/bonnnchannn",
    "https://www.linkedin.com/in/naufal-firman-dhani-66967b28b/",
  ],
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Naufal Firman Dhani",
  url: siteUrl,
  inLanguage: "id-ID",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portofolio | Naufal Firman Dhani",
    template: "%s | Naufal Firman Dhani",
  },
  description:
    "Portofolio pribadi saya sebagai web developer yang berpengalaman di React.js, Next.js, dan teknologi web modern.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: "Portofolio | Naufal Firman Dhani",
    description:
      "Portofolio pribadi saya sebagai web developer yang berpengalaman di React.js, Next.js, dan teknologi web modern.",
    siteName: "Naufal Firman Dhani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio | Naufal Firman Dhani",
    description:
      "Portofolio pribadi saya sebagai web developer yang berpengalaman di React.js, Next.js, dan teknologi web modern.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary/30`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <CustomCursor />
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}


