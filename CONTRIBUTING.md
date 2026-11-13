# Contributing to Open Userscripts

Thanks for making browser customizations accessible to more users.

## Propose a change

1. Search existing issues and pull requests to avoid duplicates.
2. Open an issue describing the problem, or fork the repository and submit a pull request.
3. Keep each pull request focused on one script or one related documentation change.
4. Include a concise description, manual verification steps, and before/after screenshots for UI changes (redact private data).
5. Verify your script locally on the latest supported website UI before submitting.

## Required for every userscript

- The script is useful to the public, not tied to private infrastructure.
- The `.user.js` metadata includes `@name`, `@namespace`, `@version`, `@description`, specific `@match` rules, and correct stable `@updateURL` / `@downloadURL` URLs.
- External permissions and network requests are minimized, justified and documented.
- No secrets, telemetry, user data collection, hidden tracking or obfuscated code.
- The corresponding script README explains its purpose, install link, permissions, limitations and changelog.
- Update the root README catalog when adding a new script.

## Release guidelines

- Maintainers release through the `main` branch; contributors should not push release changes directly.
- Increase `@version` for any shipped changes to installed code, metadata, or behavior.
- Keep published file paths stable, and don't change existing `@name` / `@namespace` casually; doing so can create duplicates.
- Review the diff carefully before release: installed scripts will receive these changes automatically according to their update settings.

## License

By contributing, you agree that your contribution may be distributed under the repository's MIT license. Only submit code you have the right to license.
