# Prabhanjan Sharma — Developer & Trader Portfolio

A dark, terminal-themed portfolio that targets **both** software recruiters and the trading/fintech world. Built from scratch with Next.js.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll/entrance animations
- **lightweight-charts** — candlestick trading chart
- **lucide-react** + inline brand icons

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where to edit

**Everything lives in one file:** [`src/lib/data.ts`](src/lib/data.ts).
Profile, experience, skills, trading stats, quant tools and projects are all
there. Anything marked `// TODO` is a placeholder — replace it with your real
info:

- `profile.socials` — your GitHub / TradingView / Medium URLs
- `trading` — your markets, style and real stats (win rate, R:R, years)
- `quantTools` — the bots / backtesters / dashboards you've actually built
- `projects` — your real projects with live + repo links

## Sections

1. **Hero** — animated terminal headline + ticker tape
2. **About** — bridge story + metrics
3. **Experience** — timeline (from your resume)
4. **Trading Desk** ⭐ — candlestick chart + stats (your differentiator)
5. **Quant / Tools** ⭐ — trading systems you build with code
6. **Skills** — Engineering vs Markets
7. **Projects** — selected builds + achievements
8. **Contact**

## Structure

```
src/
  app/            layout, page, global theme (globals.css)
  lib/data.ts     ← single source of truth, edit here
  components/
    Nav, Footer
    CandleChart.tsx
    sections/     Hero, About, Experience, TradingDesk, QuantTools, Skills, Projects, Contact
    ui/           Section, Reveal, TerminalWindow, BrandIcons
```

## Deploy

Push to GitHub, import into [Vercel](https://vercel.com), done. Add a custom
domain in Vercel's dashboard.
