"use strict";

/*
 * Replace these placeholder destinations with the real, verified
 * TeraBox bundle links.
 */
const BUNDLE_LINKS = Object.freeze({
    1: "https://example.com/",
    2: "https://example.com/",
    3: "https://example.com/",
    4: "https://example.com/",
    5: "https://example.com/",
    6: "https://example.com/"
});

function configureBundleLinks() {
    const bundleButtons = document.querySelectorAll("[data-bundle]");

    bundleButtons.forEach((button) => {
        const bundleNumber = button.getAttribute("data-bundle");
        const destination = BUNDLE_LINKS[bundleNumber];

        if (!destination) {
            return;
        }

        button.setAttribute("href", destination);

        const title = button.querySelector("strong");
        const accessibleName = title
            ? title.textContent.trim()
            : `View bundle ${bundleNumber}`;

        button.setAttribute(
            "aria-label",
            `${accessibleName} - opens in a new tab`
        );
    });
}

function configureExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');

    externalLinks.forEach((link) => {
        const currentRel = new Set(
            (link.getAttribute("rel") || "")
                .split(/\s+/)
                .filter(Boolean)
        );

        currentRel.add("noopener");
        currentRel.add("noreferrer");
        currentRel.add("nofollow");

        link.setAttribute("rel", Array.from(currentRel).join(" "));
    });
}

function updateCopyrightYear() {
    const yearElement = document.getElementById("current-year");

    if (!yearElement) {
        return;
    }

    yearElement.textContent = String(new Date().getFullYear());
}

function initializeApplication() {
    configureBundleLinks();
    configureExternalLinks();
    updateCopyrightYear();
}

document.addEventListener("DOMContentLoaded", initializeApplication);

/* APP_SCRIPT_COMPLETE */
