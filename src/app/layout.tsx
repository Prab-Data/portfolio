import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollTitle } from "@/components/ScrollTitle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prabhanjan",
  description:
    "Full-stack product engineer. I design and ship end-to-end web products — scalable backends, polished frontends, shipped fast.",
  keywords: [
    "Prabhanjan Sharma",
    "Full Stack Developer",
    "Product Engineer",
    "Next.js",
    "React",
    "Node.js",
    "MERN",
  ],
  openGraph: {
    title: "Prabhanjan Sharma — Full Stack Developer & Product Engineer",
    description:
      "Full-stack product engineer. I design and ship end-to-end web products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">
        <ScrollTitle />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
