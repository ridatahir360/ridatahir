# Rida Tahir — Executive Portfolio

A premium, production-ready personal portfolio built with **Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons**. Positioned for senior roles in Product Management, GRC, IT Governance, BCM, Compliance, Digital Transformation and Technology Strategy.

## Quick start
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Folder structure
```
public/
  Rida-Tahir-Resume.pdf     ← your downloadable resume (replace anytime)
src/
  app/                      ← one folder per page (Next.js App Router)
    layout.tsx              ← global layout, SEO metadata, fonts, theme script
    globals.css             ← ALL colors & themes live here
    page.tsx                ← Home
    about/ experience/ projects/ skills/ resume/
    certifications/ achievements/ services/ insights/ contact/
  components/
    ui/                     ← Button, Card, Badge, Alert, Progress
    Navbar / Footer / Section / Reveal
    ThemeProvider / ThemeSwitcher
    ExperienceTimeline / ProjectsGrid / ContactForm
  data/                     ← ✏️ ALL CONTENT — edit these files only
    profile.ts  experience.ts  projects.ts  skills.ts  misc.ts
```

## Updating content
All site copy lives in `src/data/`. You never need to touch components to change content.
- **Headline, stats, story, values** → `profile.ts`
- **Roles** → `experience.ts` (add a new object to the array; timeline updates automatically)
- **Projects** → `projects.ts` (add an object; filtering picks up the category automatically)
- **Skills & levels** → `skills.ts`
- **Certifications, achievements, services, articles, testimonials** → `misc.ts`

Anything marked `[REPLACE]` is a placeholder waiting for your real content (photo, testimonials, certification IDs).

### Adding a future project
Open `src/data/projects.ts`, copy an existing object, change `slug`, `title`, `category` and the case-study fields. Done — it appears on /projects with filtering.

### Your photo
Save your headshot as `public/photo.jpg`, then in `profile.ts` set `photo: "/photo.jpg"`.

## Changing colors & themes
Colors are **never hardcoded** — everything reads CSS variables.
1. Open `src/app/globals.css`
2. Each theme is one block (light) + one block (dark). Edit any hex value.
3. To add a theme: copy a block, rename `data-theme="my-theme"`, then add it to `THEMES` in `src/components/ThemeProvider.tsx`.

Included themes: **Royal Purple (default)**, Executive Navy, Emerald Professional, Midnight Cyber, Modern Slate, Minimal Black & White. The palette icon in the navbar switches instantly; the choice persists in localStorage. To change the default theme, update `data-theme` in `layout.tsx` and the fallbacks in `ThemeProvider.tsx` and the inline script.

## Changing fonts
1. In `src/app/layout.tsx`, edit the Google Fonts `<link>` (currently Sora + Manrope).
2. In `src/app/globals.css`, update `--font-display` and `--font-body`.

## Contact form
Ships with a zero-backend `mailto:` handoff. For a real form, create a free [Formspree](https://formspree.io) form and in `ContactForm.tsx` replace the `submit` function with a `fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form), headers: { "Content-Type": "application/json" } })`.

## Deployment (free)
**Vercel (recommended, ~5 min):**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo → Deploy. Zero config needed.
3. Add your custom domain (e.g. from Namecheap/Cloudflare, ~$12/yr) under Project → Settings → Domains.

Also works on Netlify and Cloudflare Pages. Remember to update `metadataBase` in `layout.tsx` to your final domain for correct SEO/social previews.

## Built-in quality
- Dark/light mode + 6 instant themes (persisted, no flash on load)
- Framer Motion scroll reveals, timeline & skill-bar animations, route loading spinner
- Fully responsive; mobile nav; keyboard focus styles; skip-to-content link; `prefers-reduced-motion` respected
- Per-page SEO metadata + Open Graph
