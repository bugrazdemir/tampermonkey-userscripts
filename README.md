# Open Userscripts

**Free, open-source browser customizations for everyone.** Discover, install, and contribute site-specific userscripts that improve everyday workflows.

[Türkçe kullanım kılavuzu](./docs/README.tr.md) · [Contributing](./CONTRIBUTING.md) · [License](./LICENSE)

## Script catalog

| Website | Userscript | What it does | Documentation | Install |
|---|---|---|---|---|
| GitHub | **GitHub Review Minimal UI** | Two-column pull request review layout, less visual noise, keyboard toggle | [Details](./scripts/github/README.md) | [Install userscript](https://raw.githubusercontent.com/bugrazdemir/tampermonkey-userscripts/main/scripts/github/github-review.user.js) |

Each script is optional and independently installed, enabled, disabled, and updated. More websites and scripts can be added under `scripts/<website>/`.

## Install

1. Install [Tampermonkey](https://www.tampermonkey.net/) for your browser.
2. If prompted by your browser, enable the extension's **Allow user scripts** permission.
3. Choose a script from the catalog and open its **Install userscript** link. Tampermonkey should offer to install it. Alternatively, use the extension's **Utilities → Import from URL** option.
4. Review the script's target domains and permissions before confirming installation.

**Updates:** Installed scripts can receive new versions automatically when Tampermonkey's update checks and automatic installation are enabled. Updates are periodic, **not instantaneous**. A newly added script is **not** installed automatically for anyone.

## For maintainers

Before publishing, replace every `YOUR_GITHUB_USERNAME` placeholder with the GitHub account or organization owning the repository. If you choose another repository name, update every raw URL and homepage/support URL, too.

To release a change:

1. Edit the targeted `.user.js` file.
2. Increase its `@version` (for example, `1.6.0` → `1.6.1`). Tampermonkey uses `@version` to detect updates.
3. Update that script's README and changelog.
4. Merge/push the release to `main` and verify the raw URL is accessible.

Keep `@updateURL` and `@downloadURL` pointing to that script's stable raw URL. **Don't rename or move a published script without a migration plan**, since existing installations would otherwise keep checking the old URL. Also preserve an existing script's `@name` and `@namespace` when updating it to avoid duplicate installations.

## Add another website

1. Create `scripts/<website>/<name>.user.js` based on [`userscript-template.user.js.example`](./templates/userscript-template.user.js.example).
2. Create `scripts/<website>/README.md` based on [`README.template.md`](./templates/README.template.md).
3. Choose precise `@match` rules, unique `@name` / `@namespace`, and correct per-script update/download URLs.
4. Add an install link and documentation link to the catalog above.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for pull requests and review guidelines.

## Safety and privacy

Userscripts execute inside your browser on the websites they match. **Only install code you trust and have reviewed.** Public scripts must not contain credentials, API tokens, private endpoints, customer information, or internal company assets. Request the minimum permissions; avoid unnecessary `@grant`, `@require`, and third-party network calls. Contributions are reviewed before merging, but this is not a security guarantee.

## License

MIT — see [LICENSE](./LICENSE). Site names and trademarks belong to their respective owners. This is an independent community project, not endorsed by GitHub, Tampermonkey, or any supported website.

## Documentation

- [Tampermonkey metadata documentation](https://www.tampermonkey.net/documentation.php)
- [Tampermonkey install FAQ](https://www.tampermonkey.net/faq.php)
