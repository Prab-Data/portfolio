import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prabhanjan Sharma — Full Stack Developer & Trader",
  description:
    "Full Stack Software Developer and active markets trader. I build scalable systems and trade the markets I build for.",
  keywords: [
    "Prabhanjan Sharma",
    "Full Stack Developer",
    "Next.js",
    "Trader",
    "Quant",
    "React",
    "Node.js",
  ],
  openGraph: {
    title: "Prabhanjan Sharma — Full Stack Developer & Trader",
    description:
      "Full Stack Software Developer and active markets trader. Engineering meets the markets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
