"use strict";

/*
 * Replace null with real HTTPS bundle URLs that you are authorized
 * to publish.
 */
const BUNDLE_LINKS = Object.freeze({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null
});

const LEGAL_LINKS = Object.freeze([
    {
        href: "/privacy-policy.html",
        label: "Privacy Policy"
    },
    {
        href: "/terms.html",
        label: "Terms"
    },
    {
        href: "/disclaimer.html",
        label: "Disclaimer"
    },
    {
        href: "/copyright-policy.html",
        label: "Copyright"
    },
    {
        href: "/cookie-policy.html",
        label: "Cookies"
    },
    {
        href: "/accessibility.html",
        label: "Accessibility"
    },
    {
        href: "/contact.html",
        label: "Contact"
    }
]);

function isValidHttpsUrl(value) {
    if (typeof value !== "string" || value.trim() === "") {
        return false;
    }

    try {
        const url = new URL(value);
        return url.protocol === "https:";
    } catch {
        return false;
    }
}

function enableBundle(button, destination, bundleNumber) {
    button.href = destination;
    button.target = "_blank";
    button.rel = "noopener noreferrer external nofollow";
    button.removeAttribute("aria-disabled");

    button.setAttribute(
        "aria-label",
        `Open TeraBox bundle ${bundleNumber} in a new tab`
    );
}

function disableBundle(button) {
    button.href = "#bundle-status";
    button.setAttribute("aria-disabled", "true");
    button.removeAttribute("target");
    button.removeAttribute("rel");

    button.addEventListener("click", (event) => {
        event.preventDefault();

        const status = document.getElementById("bundle-status");

        if (status) {
            status.textContent =
                "This bundle is temporarily unavailable.";

            status.focus({
                preventScroll: false
            });
        }
    });
}

function configureBundleLinks() {
    const buttons = document.querySelectorAll("[data-bundle]");
    let availableCount = 0;

    buttons.forEach((button) => {
        const bundleNumber = button.dataset.bundle;
        const destination = BUNDLE_LINKS[bundleNumber];

        if (isValidHttpsUrl(destination)) {
            enableBundle(button, destination, bundleNumber);
            availableCount += 1;
        } else {
            disableBundle(button);
        }
    });

    const status = document.getElementById("bundle-status");

    if (!status) {
        return;
    }

    status.textContent = availableCount > 0
        ? `${availableCount} of ${buttons.length} bundles are available.`
        : "Bundle links are currently being updated.";
}

function secureExternalLinks() {
    const links = document.querySelectorAll(
        'a[target="_blank"]'
    );

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

function addLegalNavigation() {
    const footer = document.querySelector(".site-footer");

    if (!footer || document.querySelector(".footer-legal-links")) {
        return;
    }

    const navigation = document.createElement("nav");
    navigation.className = "footer-legal-links";
    navigation.setAttribute("aria-label", "Legal and support pages");

    LEGAL_LINKS.forEach((item) => {
        const link = document.createElement("a");
        link.href = item.href;
        link.textContent = item.label;
        navigation.appendChild(link);
    });

    footer.insertAdjacentElement("beforebegin", navigation);
}

function updateCopyrightYear() {
    const year = document.getElementById("current-year");

    if (year) {
        year.textContent = String(
            new Date().getFullYear()
        );
    }
}

function initializeApplication() {
    configureBundleLinks();
    addLegalNavigation();
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
