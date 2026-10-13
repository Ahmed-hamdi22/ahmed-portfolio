# Ahmed Hamdi Portfolio

Next.js portfolio with English/Arabic UI, persistent Light/Dark themes, local project screenshots and technology icons.

## Development

Use Node.js 20 or newer. Install the locked dependencies with `yarn install --frozen-lockfile`, then run `npm run dev`.

## Checks and production

- `npm run typecheck` validates TypeScript. `npm run lint` is an alias for this check; the project does not add an ESLint dependency.
- `npm test` checks project-link combinations, translations, approved CV dates, and local assets.
- `npm run build` creates the production build.
- `npm start` serves that build.

Vercel can use its standard Next.js preset and the committed Yarn lockfile. All image/icon assets are in `public`; no preview-folder paths or remote icon CDNs are needed.

## Content

Edit `lib/data.ts` for projects, certificates, dates and contact details. Add optional `demo` and/or `github` links; the UI shows only available links and project images open the live demo first, then GitHub.

Edit `lib/i18n.ts` for Arabic UI copy and translated descriptions. Project names, certificate names, technical roles and technology labels stay in English. `lib/technologies.ts` controls the unified technology list.

The WhatsApp destination is derived from the phone in `siteConfig`. The downloaded CV is `public/cv.pdf`.
