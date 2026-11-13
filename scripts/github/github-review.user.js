// ==UserScript==
// @name         GitHub Review Minimal UI
// @namespace    custom.github.review
// @version      1.6.1
// @description  Simplified two-column GitHub PR review with a persistent shortcut reminder
// @match        https://github.com/*/*/pull/*
// @run-at       document-start
// @grant        none
//  @homepageURL  https://github.com/bugrazdemir/tampermonkey-userscripts
// @supportURL   https://github.com/bugrazdemir/tampermonkey-userscripts/issues
// @updateURL    https://raw.githubusercontent.com/bugrazdemir/tampermonkey-userscripts/main/scripts/github/github-review.user.js
// @downloadURL  https://raw.githubusercontent.com/bugrazdemir/tampermonkey-userscripts/main/scripts/github/github-review.user.js
// ==/UserScript==

(function () {
    'use strict';

    const ROOT = 'gh-review-minimal';
    const STORAGE = 'gh-review-minimal-enabled';
    const STYLE_ID = 'github-review-minimal-ui';
    const HINT_ID = 'gh-review-shortcut-hint';

    const hiddenSelectors = [
        // Review comment header, reactions, resolve, reply.
        'div.ml-n1.flex-items-center.clearfix.d-flex.flex-row.flex-items-start:has(a.author)',
        '.comment-reactions.just-bottom',
        'form.js-resolvable-timeline-thread-form',
        '.review-thread-reply',

        // Copilot suggestion banner.
        'div.Stack.bgColor-muted:has(> div.StackItem > svg.octicon-copilot)',

        // PR description, pushed commits, and discussion sidebar.
        'rails-partial[data-partial-name="pullRequestsConversationsRoute.Body"]',
        'div.js-timeline-item.js-timeline-progressive-focus-container:has([id^="commits-pushed-"])',
        '#partial-discussion-sidebar',
        '.discussion-sidebar:has(#partial-discussion-sidebar)'
    ];

    const hiddenCSS = hiddenSelectors
        .map(selector => `html.${ROOT} ${selector}`)
        .join(',\n') + ' { display: none !important; }';

    const layoutCSS = `
        /* Full-width discussion area */
        html.${ROOT} .discussion-timeline-cols {
            display: block !important;
            width: 100% !important;
            max-width: none !important;
        }

        html.${ROOT} .discussion-timeline-cols .discussion-timeline {
            display: block !important;
            width: 100% !important;
            max-width: none !important;
            min-width: 0 !important;
            flex: 1 1 100% !important;
            float: none !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
        }

        html.${ROOT} .discussion-timeline::before {
            display: none !important;
        }

        /* Outer review group */
        html.${ROOT} .discussion-timeline
        .TimelineItem:has(> .TimelineItem-body > turbo-frame[id^="review-thread-or-comment-id-"]) {
            display: block !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: none !important;
            margin: 0 0 16px !important;
            padding: 0 !important;
        }

        html.${ROOT} .discussion-timeline
        .TimelineItem:has(> .TimelineItem-body > turbo-frame[id^="review-thread-or-comment-id-"])::before,
        html.${ROOT} .discussion-timeline
        .TimelineItem:has(> .TimelineItem-body > turbo-frame[id^="review-thread-or-comment-id-"])::after {
            display: none !important;
        }

        /* Two-column review layout */
        html.${ROOT} .discussion-timeline
        .TimelineItem > .TimelineItem-body:has(> turbo-frame[id^="review-thread-or-comment-id-"]) {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            column-gap: 16px !important;
            row-gap: 16px !important;
            align-items: start !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: none !important;
            min-width: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        html.${ROOT} .discussion-timeline
        .TimelineItem-body > turbo-frame[id^="review-thread-or-comment-id-"] {
            display: block !important;
            box-sizing: border-box !important;
            width: 100% !important;
            min-width: 0 !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        html.${ROOT} .discussion-timeline
        .TimelineItem-body > turbo-frame[id^="review-thread-or-comment-id-"]
        > review-thread-collapsible {
            display: block !important;
            box-sizing: border-box !important;
            width: 100% !important;
            min-width: 0 !important;
            max-width: 100% !important;
            margin: 0 !important;
        }

        html.${ROOT} .discussion-timeline
        review-thread-collapsible .blob-wrapper {
            max-width: 100% !important;
            overflow-x: auto !important;
        }

        html.${ROOT} .discussion-timeline
        review-thread-collapsible .js-inline-comments-container,
        html.${ROOT} .discussion-timeline
        review-thread-collapsible [data-target="review-thread-collapsible.body"] {
            min-width: 0 !important;
        }

        html.${ROOT} .discussion-timeline
        review-thread-collapsible .review-comment .tmp-ml-5 {
            margin-left: 0 !important;
        }

        html.${ROOT} .discussion-timeline
        review-thread-collapsible .review-comment .comment-body {
            padding: 12px 14px !important;
            overflow-wrap: anywhere !important;
        }

        @media (max-width: 1150px) {
            html.${ROOT} .discussion-timeline
            .TimelineItem > .TimelineItem-body:has(> turbo-frame[id^="review-thread-or-comment-id-"]) {
                grid-template-columns: minmax(0, 1fr) !important;
                row-gap: 12px !important;
            }
        }
    `;

    // This hint deliberately does NOT depend on the ROOT class.
    // It stays visible when minimal mode is switched off.
    const hintCSS = `
        #${HINT_ID} {
            position: fixed !important;
            bottom: 16px !important;
            left: 16px !important;
            z-index: 9999 !important;
            display: flex !important;
            align-items: center !important;
            gap: 7px !important;
            max-width: calc(100vw - 32px) !important;
            padding: 8px 11px !important;
            border: 1px solid var(--borderColor-default, #30363d) !important;
            border-radius: 9px !important;
            background: var(--bgColor-default, #0d1117) !important;
            color: var(--fgColor-muted, #9198a1) !important;
            font: 12px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
            box-shadow: 0 3px 14px rgba(0, 0, 0, 0.18) !important;
            pointer-events: none !important;
        }

        #${HINT_ID} kbd {
            display: inline-block !important;
            padding: 2px 5px !important;
            border: 1px solid var(--borderColor-default, #30363d) !important;
            border-radius: 4px !important;
            color: var(--fgColor-default, #e6edf3) !important;
            background: var(--bgColor-muted, #151b23) !important;
            font: 600 11px/1.4 ui-monospace, SFMono-Regular, Consolas, monospace !important;
            white-space: nowrap !important;
        }

        @media (max-width: 600px) {
            #${HINT_ID} {
                bottom: 8px !important;
                left: 8px !important;
                font-size: 11px !important;
                padding: 6px 8px !important;
            }
        }
    `;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = hiddenCSS + '\n' + layoutCSS + '\n' + hintCSS;

    document.documentElement.classList.toggle(
        ROOT,
        localStorage.getItem(STORAGE) !== 'off'
    );

    function installStyles() {
        if (!document.getElementById(STYLE_ID)) {
            (document.head || document.documentElement).appendChild(style);
        }
    }

    function installHint() {
        if (!document.body || document.getElementById(HINT_ID)) return;

        const hint = document.createElement('div');
        hint.id = HINT_ID;
        hint.setAttribute('role', 'note');
        const turkish = navigator.language?.toLowerCase().startsWith('tr');
        hint.setAttribute('aria-label', turkish
            ? 'Tasarımı değiştirmek için Alt Shift M'
            : 'Press Alt Shift M to toggle the layout');
        hint.innerHTML = turkish
            ? 'Tasarımı değiştirmek için <kbd>Alt + Shift + M</kbd>'
            : 'Toggle layout: <kbd>Alt + Shift + M</kbd>';
        document.body.appendChild(hint);
    }

    function install() {
        installStyles();
        installHint();
    }

    installStyles();
    if (document.body) installHint();

    document.addEventListener('DOMContentLoaded', install);
    document.addEventListener('turbo:load', install);
    document.addEventListener('pjax:end', install);

    // Alt + Shift + M: toggle minimal mode; the reminder remains visible.
    document.addEventListener('keydown', event => {
        if (!(event.altKey && event.shiftKey && event.key?.toLowerCase() === 'm')) return;
        if (event.ctrlKey || event.metaKey || event.repeat) return;
        if (event.target?.closest?.('input, textarea, [contenteditable="true"]')) return;

        event.preventDefault();
        const enabled = document.documentElement.classList.toggle(ROOT);
        localStorage.setItem(STORAGE, enabled ? 'on' : 'off');
    });
})();
