# Elham Alizadeh — personal landing page

A responsive, dependency-free website built with HTML, CSS, and JavaScript. No installation or build step is required.

## Preview

Open `index.html` in a browser. Everything is local, including the original portrait and downloadable résumé. The font uses the visitor’s system font, with fallbacks.

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload the **contents of this folder** to the repository root, keeping the `assets` directory intact. `index.html` should be at the root, not inside another folder.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose your uploaded branch (usually `main`) and **/ (root)**, then save.
6. GitHub will display the published URL after deployment finishes.

Relative asset paths work for both `username.github.io` sites and `username.github.io/repository-name/` sites.

## Update your content

- `index.html`: page copy, email address, project summaries, and links.
- `styles.css`: colors, spacing, fonts, rounded buttons, and responsive layouts.
- `script.js`: current year and project disclosure behavior.
- `assets/elham-alizadeh.jpg`: your original, unedited photo. CSS controls the crop only.
- `assets/elham-alizadeh-resume.pdf`: your supplied résumé, available to download. It includes the contact details from your original résumé.

Project text is based on the supplied résumé. Project illustrations are decorative CSS artwork, not screenshots of shipped products. Email and LinkedIn links come from the supplied résumé.

The page includes keyboard focus styles, a skip link, semantic sections, native accessible project disclosures, and reduced-motion support. There are no forms, trackers, backend services, or external dependencies.
