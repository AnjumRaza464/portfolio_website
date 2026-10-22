# Hafiz Anjum — Portfolio

Personal portfolio built with Next.js 16, React 19 and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content

All content (profile, skills, experience, projects, education, contact) lives in
`src/data/portfolio.ts`. To add a project, append an entry to `projects`:

```ts
{
  title: "My App",
  tagline: "One-line summary",
  description: "What it does and who it's for.",
  highlights: ["Key feature 1", "Key feature 2"],
  tech: ["Next.js", "Claude API"],
  liveUrl: "https://my-app.vercel.app",
  sourceUrl: "https://github.com/me/my-app",
  builtWithClaude: true,
  featured: true,
}
```

- **GitHub / LinkedIn:** fill in `profile.socials`.
- **Downloadable CV:** put a PDF at `public/resume.pdf` (remove CNIC / date of birth first) and set `profile.resumeUrl = "/resume.pdf"`.

## Deploy

Push to GitHub and import the repo on [vercel.com/new](https://vercel.com/new), or run `npx vercel`.
