# GitHub Review Minimal UI

**Current version:** `1.6.0` · **Applies to:** `https://github.com/*/*/pull/*` · **License:** MIT

[Install](https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/open-userscripts/main/scripts/github/github-review.user.js) · [Source](./github-review.user.js) · [Main catalog](../../README.md)

## Description

An optional visual customization for GitHub pull request review pages. It removes selected interface clutter and gives review threads a responsive two-column layout.

## Features

- Responsive two-column review thread arrangement; switches to one column on smaller screens (under 1150px).
- Hides selected comment controls, reactions, selected timeline noise and the standard PR sidebar while enabled.
- Toggle the layout with **Alt + Shift + M**.
- A subtle shortcut reminder remains visible even when the custom layout is disabled.
- Remembers the on/off preference using `localStorage` on GitHub.
- Shortcut reminder uses Turkish on Turkish browser locales and English otherwise.

The script does not require external libraries or an external service. Its userscript metadata grants no privileged Tampermonkey APIs (`@grant none`).

## Install and use

1. Install Tampermonkey and allow userscripts if your browser requires it.
2. Open the [Install link](https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/open-userscripts/main/scripts/github/github-review.user.js) and accept the installation prompt.
3. Open a GitHub pull request; press **Alt + Shift + M** to enable/disable the layout.

**Permissions:** Runs on GitHub pull-request URLs matched by `@match`. Read the source code before installing.

## Limitations

- GitHub may change its HTML and CSS, which can break layout selectors. Please report reproducible issues with a URL pattern and screenshot **without private repository information**.
- Because the script matches pull-request URLs, some GitHub client-side navigation paths may require a page reload before the userscript is injected.
- The selected UI elements are intentionally hidden, including some review controls. Use the shortcut to return to the original layout when needed.

## Update policy

The `@version`, `@updateURL`, and `@downloadURL` metadata provide periodic updates through Tampermonkey. Existing users keep their updates linked to the original repository address. If you previously installed a copy from a different repository, install this distribution explicitly; repository renaming does not migrate existing installations automatically.

## Changelog

- **1.6.0:** Public open-source distribution metadata and English/Turkish shortcut hint, with existing visual behavior preserved.
- **1.5.0:** GitHub-based update metadata introduced.
- **1.4.0:** Responsive two-column review layout and persistent keyboard shortcut hint.
