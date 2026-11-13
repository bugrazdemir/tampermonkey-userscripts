Open Userscripts
Free, open-source browser customizations for everyone. Browse, install, and contribute independent userscripts that improve website interfaces and everyday workflows.

[Türkçe kılavuz](./docs/README.tr.md) · [Contributing](./CONTRIBUTING.md) · [Security](./SECURITY.md) · MIT License
Script catalog
Each script is optional and can be installed, enabled, disabled, and updated independently.
Website	Userscript	Description	Version	Documentation	Install
GitHub	GitHub Review Minimal UI	Cleaner pull request discussions, responsive two-column review layout, and keyboard toggle	1.6.2	[Details](./scripts/github/README.md)	Install


Additional websites and userscripts will be listed here as they are published.
Installation
1. Install Tampermonkey for your browser.
2. Enable any browser permission needed to run userscripts (for example, Allow user scripts, if prompted).
3. Select Install from the script catalog above. Tampermonkey should display an installation prompt. Alternatively, open Tampermonkey Dashboard → Utilities → Import from URL and paste the installation link.
4. Review the script's source code, matching websites, and requested permissions before confirming.
5. Open a page supported by the script. For GitHub Review Minimal UI, visit a GitHub pull request and press Alt + Shift + M to toggle the customized layout.
Note: Installing a script is a one-time action per browser profile. New scripts added to the catalog are not automatically installed.
Updates
Published scripts use Tampermonkey's versioned update mechanism:
- @version identifies the script release.
- @updateURL specifies where Tampermonkey checks for new versions.
- @downloadURL specifies where updated code is downloaded.
Tampermonkey checks for updates periodically, depending on the user's settings. Updates are not instantaneous. To test a release, use Tampermonkey Dashboard → Check for userscript updates, then refresh the affected website. Automatic installation depends on Tampermonkey settings.
For maintainers
Release an existing script
1. Edit the appropriate .user.js file under scripts/.
2. Increase its @version (for example, 1.6.2 → 1.6.3).
3. Update the script's README, version number, and changelog.
4. Commit or merge the changes into main.
5. Confirm that the published Raw userscript URL serves the expected version and test a Tampermonkey update.
Keep @updateURL and @downloadURL pointing to the stable, public Raw URL of that specific script. Do not rename or relocate an already published .user.js file without a migration plan: installed copies may continue checking the old address. Keep @name and @namespace stable to avoid duplicate installations.
Add a new website or script
1. Create scripts/<website>/<script-name>.user.js, using [the userscript template](./templates/userscript-template.user.js.example) as a starting point.
2. Add scripts/<website>/README.md using [the documentation template](./templates/README.template.md).
3. Replace all example domains, folder names, and script names. Use specific @match rules and unique @name / @namespace values.
4. Set both update URLs to the new script's actual Raw URL in this repository.
5. Document features, permissions, usage, limitations, and the changelog. Add an Install link to the catalog above.
6. Verify the installation and update process in Tampermonkey.
See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines and pull request expectations.
Safety and privacy
Userscripts run in your browser on their matching websites and may access page content. Review a script before installing it. This repository is public: do not publish credentials, API tokens, private company code, customer data, or internal endpoints. Use the narrowest practical @match rules and request only the permissions a script needs. Review external dependencies and network requests carefully.

To report a potential vulnerability, follow [SECURITY.md](./SECURITY.md). Do not disclose private repository information in public issues or screenshots.
License and attribution
Distributed under the MIT License. Website names and trademarks belong to their respective owners. This community project is independent and is not endorsed by GitHub, Tampermonkey, or the websites it customizes.
Useful links
- Tampermonkey documentation
- Tampermonkey FAQ
- Report an issue or request a feature