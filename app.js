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
    6: null,
    7: null,
    8: null,
    9: null,
    10: null
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

        if (url.protocol !== "https:" || !url.hostname) {
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
        description.textContent = "TERABOX COLLECTION";
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
        `TeraBox bundle ${bundleNumber} is currently unavailable`
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
            "Bundle links are currently being updated.";
        status.classList.add("is-unavailable");
        return;
    }

    status.textContent =
        `${availableCount} of ${links.length} bundles are available.`;

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

function configureAccessGuide() {
    const launcher = document.getElementById("help-launcher");
    const dialog = document.getElementById("access-guide-dialog");
    const closeButton = document.getElementById(
        "access-dialog-close"
    );
    const doneButton = document.getElementById(
        "access-dialog-done"
    );

    if (
        !(launcher instanceof HTMLButtonElement)
        || !(dialog instanceof HTMLDialogElement)
    ) {
        return;
    }

    let shouldRestoreLauncherFocus = false;

    function openGuide() {
        shouldRestoreLauncherFocus = true;

        if (typeof dialog.showModal === "function") {
            dialog.showModal();
        } else {
            dialog.setAttribute("open", "");
        }

        document.body.classList.add("dialog-is-open");

        if (closeButton instanceof HTMLButtonElement) {
            closeButton.focus();
        }
    }

    function closeGuide(options = {}) {
        const {
            scrollToBundles = false
        } = options;

        if (dialog.open && typeof dialog.close === "function") {
            dialog.close();
        } else {
            dialog.removeAttribute("open");
            document.body.classList.remove("dialog-is-open");

            if (shouldRestoreLauncherFocus) {
                launcher.focus();
            }
        }

        if (scrollToBundles) {
            const bundles = document.getElementById("bundles");

            if (bundles) {
                window.setTimeout(() => {
                    bundles.scrollIntoView({
                        behavior: window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                        ).matches
                            ? "auto"
                            : "smooth",
                        block: "start"
                    });
                }, 50);
            }
        }
    }

    launcher.addEventListener("click", openGuide);

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            closeGuide();
        });
    }

    if (doneButton) {
        doneButton.addEventListener("click", () => {
            closeGuide({
                scrollToBundles: true
            });
        });
    }

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            closeGuide();
        }
    });

    dialog.addEventListener("cancel", () => {
        document.body.classList.remove("dialog-is-open");
    });

    dialog.addEventListener("close", () => {
        document.body.classList.remove("dialog-is-open");

        if (shouldRestoreLauncherFocus) {
            launcher.focus({
                preventScroll: true
            });
        }

        shouldRestoreLauncherFocus = false;
    });
}

function initializeApplication() {
    configureBundleLinks();
    secureExternalLinks();
    updateCopyrightYear();
    configureAccessGuide();
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
