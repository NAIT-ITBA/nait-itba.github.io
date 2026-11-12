# Discover ITBA at NAIT

Astro + MDX source for **https://nait-itba.github.io/**, the NAIT-ITBA program discovery hub.

## Develop

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

The development server prints its local URL. Before publishing:

```sh
npm run check
npm run build
npm run preview
```

Astro generates static HTML in `dist/`. No server runtime, database, account system, or client-side framework is required.

## Edit content

- `src/pages/index.mdx` — discovery landing page.
- `src/pages/business-analysis.mdx` — illustrative walkthrough and an example of long-form MDX authoring.
- `src/pages/faq.mdx` — question-led directory of authoritative references. The maintained `FAQ - ITBA.docx` in the `006 Open House Materials` library guides the questions and grouping; the original DOCX stays in its library. Link directly to NAIT and IIBA under the relevant question instead of copying their answers or figures into the site.
- `src/components/FaqItem.astro` — native, keyboard-accessible question disclosure; no JavaScript required.
- `src/layouts/PageLayout.astro` — reusable layout for additional MDX pages. Use `layout`, `title`, `description`, and optional `eyebrow` in frontmatter, following the walkthrough.
- `src/layouts/BaseLayout.astro` — document metadata, Adobe Fonts embed, header, and footer.
- `src/styles/global.css` — shared design tokens, typography, layout, and responsive styles.
- `src/assets/` — source images optimized by Astro at build time.
- `public/brand/` — official NAIT logo assets served unchanged.

Internal links start at `/`, because this repository is the organization's root website. Do not set an Astro `base` to the repository name. `site` is configured as `https://nait-itba.github.io`.

The example booking scenario is fictional and labelled as illustrative. Program details, admission requirements, tuition, and dates link to the official NAIT program page rather than duplicating information that changes.

Content rule: when an authoritative external source maintains the information, link to it under the relevant FAQ question. Do not hard-code program duration, course counts, workload, admission availability, contact details, salary figures, survey statistics, or other externally maintained answers. Use descriptive link labels and identify membership requirements. [IIBA’s 2026 public highlights](https://www.iiba.org/career-resources/the-global-state-of-business-analysis/the-global-state-of-business-analysis-reports-and-surveys/the-global-state-of-business-analysis-2026/) are accessible without signing in; the complete report is a membership benefit. The website links to the public overview and does not host the report.

## Branding and source assets

Brand reference: [NAIT IT Business Analysis](https://nait.ca/itbusiness), inspected November 11, 2026; redirects to `https://www.nait.ca/programs/it-business-analysis`.

- **Headings:** Industry Regular/Bold, using the site owner's supplied Adobe Fonts web project: `https://use.typekit.net/qec7wiv.css`. Its current CSS uses `font-display: auto`; the project owner can select Swap in Adobe Fonts. Font files are served by Adobe and are not copied into this repository.
- **Body:** Source Sans 3, self-hosted through `@fontsource/source-sans-3`; Latin 400, 600, and 700. This also supplies the fallback if Industry cannot load.
- **Colours:** Midnight `#002d74`, Ook Blue `#00a0df`, and Sky `#005cb9`. Bright blue is an accent; darker blue is used for readable text on white.
- **Logo:** [NAIT inverted logo](https://www.nait.ca/App_Themes/NAIT.caStyles/img/nait-logo-inverted-web.svg) and [shield](https://www.nait.ca/App_Themes/NAIT.caStyles/img/nait-logo-shield.svg), downloaded from the official website.
- **Photography:** [Program-page image](https://assets-us-01.kc-usercontent.com/d6a9597f-2e6e-0006-ad27-50e384133464/bcc04eaf-d5da-4f4f-a09f-b44bd8b041b0/it-business-analysis-1920x1080.jpg). Retained locally and optimized into responsive WebP images.

NAIT branding and photography retain their existing ownership and usage restrictions. Public repository visibility does not grant a license to reuse them. Dependencies and fonts retain their respective licenses.

## Hosting and publication

The public repository is `NAIT-ITBA/nait-itba.github.io`. In repository **Settings → Pages**, set the publishing source to **GitHub Actions**.

- Pull requests run Astro diagnostics and a production build.
- Pushes to `main` run diagnostics, build, upload the static artifact, and deploy to the `github-pages` environment.
- Deployment can also be triggered manually from Actions.
- The checked-in lockfile pins npm dependencies; CI uses `npm ci`.

Only files in the generated `dist/` artifact are deployed. Other organization repositories are not imported, listed, or published by this site.

## Public content and visitor requests

Keep internal planning, student records, consent records, credentials, and unapproved student material outside this public repository. Review program wording and media before adding them.

The site contains no forms, analytics, tracking scripts, embeds, or client-side JavaScript. Assets and body fonts are served from the site. **Industry loads from Adobe Fonts**, including Adobe's stylesheet/font network requests; this is an explicit exception to a fully self-hosted-font design. GitHub Pages also logs visitor IP addresses for security. Do not describe the hosting arrangement as collecting no data.

The website supports public program discovery; official NAIT pages remain authoritative for program and admissions information.
