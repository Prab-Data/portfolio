// Central site config for SEO. Set NEXT_PUBLIC_SITE_URL to your real domain
// (a name-matching domain like prabhanjansharma.com ranks best for your name).
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://prabhanjan-portfolio.vercel.app"
).replace(/\/+$/, "");

export const siteName = "Prabhanjan Sharma";

export const siteTitle =
  "Prabhanjan Sharma — Full Stack Developer & Product Engineer";

export const siteDescription =
  "Prabhanjan Sharma is a full-stack developer and product engineer based in Bangalore, India. Senior Software Developer at Webknot — building fast, scalable web products with Next.js, React, Node.js and TypeScript.";
