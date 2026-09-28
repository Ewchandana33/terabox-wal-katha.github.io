"use strict";

/*
 * Add only HTTPS bundle URLs that you are legally authorized to publish.
 *
 * Example:
 * 1: "https://example.com/authorized-destination"
 *
 * Leave a value as null when the bundle is unavailable.
 */
const BUNDLE_LINKS = Object.freeze({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null
});

function getValidatedHttpsUrl(value) {
    if (typeof value !== "string") {
        return null;
    }

    const normalizedValue = value.trim();

    if (normalizedValue === "") {
        return null;
    }

    try {
        const url = new URL(normalizedValue);

        if (url.protocol !== "https:") {
            return null;
        }

        if (!url.hostname) {
            return null;
        }

        return url.href;
    } catch {
        return null;
    }
}

function enableBundle(link, destination, bundleNumber) {
    const description = link.querySelector("small");

    link.href = destination;
    link.target = "_blank";
    link.rel = "noopener noreferrer external nofollow";

    link.classList.remove("is-disabled");
    link.removeAttribute("aria-disabled");

    link.setAttribute(
        "aria-label",
        `Open TeraBox bundle ${bundleNumber} in a new tab`
    );

    if (description) {
        description.textContent = "EXTERNAL TERABOX LINK";
    }
}

function keepBundleUnavailable(link, bundleNumber) {
    const description = link.querySelector("small");

    link.removeAttribute("href");
    link.removeAttribute("target");
    link.removeAttribute("rel");

    link.classList.add("is-disabled");
    link.setAttribute("aria-disabled", "true");
    link.setAttribute(
        "aria-label",
        `TeraBox bundle ${bundleNumber} is unavailable`
    );

    if (description) {
        description.textContent = "CURRENTLY UNAVAILABLE";
    }
}

function configureBundleLinks() {
    const links = document.querySelectorAll("[data-bundle]");
    const status = document.getElementById("bundle-status");
    let availableCount = 0;

    links.forEach((link) => {
        const bundleNumber = link.dataset.bundle;
        const configuredValue = BUNDLE_LINKS[bundleNumber];
        const destination = getValidatedHttpsUrl(configuredValue);

        if (destination) {
            enableBundle(link, destination, bundleNumber);
            availableCount += 1;
            return;
        }

        keepBundleUnavailable(link, bundleNumber);
    });

    if (!status) {
        return;
    }

    if (availableCount === 0) {
        status.textContent =
            "No bundle links are currently available. Please check again later.";
        status.classList.add("is-unavailable");
        return;
    }

    status.textContent =
        `${availableCount} of ${links.length} bundle links are available.`;
    status.classList.remove("is-unavailable");
}

function secureExternalLinks() {
    const links = document.querySelectorAll('a[target="_blank"]');

    links.forEach((link) => {
        const relValues = new Set(
            (link.getAttribute("rel") || "")
                .split(/\s+/)
                .filter(Boolean)
        );

        relValues.add("noopener");
        relValues.add("noreferrer");
        relValues.add("external");

        link.setAttribute(
            "rel",
            Array.from(relValues).join(" ")
        );
    });
}

function updateCopyrightYear() {
    const yearElement = document.getElementById("current-year");

    if (!yearElement) {
        return;
    }

    const currentYear = new Date().getFullYear();
    yearElement.textContent = String(Math.max(2026, currentYear));
}

function initializeApplication() {
    configureBundleLinks();
    secureExternalLinks();
    updateCopyrightYear();
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeApplication,
        {
            once: true
        }
    );
} else {
    initializeApplication();
}

/* APP_SCRIPT_COMPLETE */
