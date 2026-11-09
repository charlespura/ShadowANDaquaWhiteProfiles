# Shadow & Aqua

A quiet, photo-led home for Shadow the Shih Tzu and Aqua the Aspin. Built with **React, Vite, TypeScript, and Tailwind CSS**, using the original photographs and video.

[Live website](https://charlespura.github.io/ShadowANDaquaWhiteProfiles/)

## Run locally

Install Node.js 22.12+ (Node 24 also works), then:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

```sh
npm run typecheck   # Strict TypeScript checks
npm run build       # TypeScript checks and production build in dist/
npm run preview     # Serve the production build locally
```

This is a Vite application: use the development server or built output instead of opening index.html directly or serving the source through XAMPP.

## Features

- Responsive profiles, story, memories, and original local media.
- Photo filters and a keyboard-accessible photo viewer: Escape to close, arrow keys to navigate.
- Mobile navigation, visible keyboard focus, reduced-motion support, and a skip link.
- Email, telephone, and Facebook contact links.
- A validated contact form that prepares an email in the visitor’s email app. The visitor must send it there; there is no backend, message storage, or delivery confirmation.

## Edit content

```text
src/
  App.tsx           Page sections and interactive components
  data.ts           Dog profiles, gallery captions, asset helper
  index.css         Tailwind import, theme, and responsive styling
  main.tsx          React entry point
public/picture/     Original photos and video
.github/workflows/ Deployment workflow
vite.config.ts     React, Tailwind, and hosting base path
```

Edit profiles and photos in `src/data.ts`, stories and contact details in `src/App.tsx`, and colors/layout in `src/index.css`. Ages are supplied profile values, not calculated birth dates; update them when appropriate. Add media under `public/picture/` and reference it with `asset('filename.jpg')` so the repository base path is preserved.

## GitHub Pages deployment

The Vite base path is `/ShadowANDaquaWhiteProfiles/`, matching this repository’s existing Pages URL.

1. In the GitHub repository, open **Settings → Pages** and choose **GitHub Actions** as the source.
2. Push these changes to `main`, or run **Deploy to GitHub Pages** manually from Actions.
3. The workflow installs locked dependencies, checks TypeScript, builds, and publishes `dist/`.

If your default branch has another name, update the workflow’s branch filter. For a different repository name, update `base` in `vite.config.ts`. For a root domain, use `/`.

The repository includes deployment configuration; local edits do not update the live website until pushed and successfully deployed. No API keys or environment variables are required.

## Design

Warm off-white surfaces, muted green accents, editorial serif headings, and simple sans-serif body text keep the photographs central. Motion is limited to small interaction cues. The original content and media remain local to the project.
