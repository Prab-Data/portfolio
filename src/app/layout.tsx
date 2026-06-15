import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollTitle } from "@/components/ScrollTitle";
import { profile } from "@/lib/data";
import { siteUrl, siteName, siteTitle, siteDescription } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s · Prabhanjan Sharma",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Prabhanjan Sharma", url: siteUrl }],
  creator: "Prabhanjan Sharma",
  publisher: "Prabhanjan Sharma",
  keywords: [
    "Prabhanjan Sharma",
    "Prabhanjan",
    "Prabhanjan Sharma developer",
    "Prabhanjan Sharma portfolio",
    "Full Stack Developer",
    "Product Engineer",
    "Software Engineer Bangalore",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "MERN stack developer",
    "TypeScript developer",
    "Webknot",
  ],
  alternates: { canonical: "/" },
  category: "technology",
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
    siteName,
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Prabhanjan Sharma",
      alternateName: "Prabhanjan",
      url: siteUrl,
      image: `${siteUrl}/icon.png`,
      jobTitle: "Full Stack Developer & Product Engineer",
      description: siteDescription,
      email: `mailto:${profile.email}`,
      worksFor: { "@type": "Organization", name: "Webknot" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "ITM SLS Baroda University",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      nationality: "Indian",
      knowsAbout: [
        "Full-Stack Web Development",
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "System Design",
        "API Architecture",
        "MERN Stack",
        "Go",
      ],
      sameAs: [profile.socials.linkedin, profile.socials.github],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: siteTitle,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollTitle />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
