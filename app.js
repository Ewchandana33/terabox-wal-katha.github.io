"use strict";
/*
 * Publish only links that you are legally authorised to share.
 * All destinations must use HTTPS.
 */
const BUNDLE_LINKS = Object.freeze({
    1: "https://1024terabox.com/s/1ZIc39rpZ067AuHdll_2WLA",
    2: "https://1024terabox.com/s/1Uvm-lbRlZwIuLjWRaffprg",
    3: "https://1024terabox.com/s/1H_VXYWAC-qZt3qx2Nw6uKA",
    4: "https://1024terabox.com/s/11dfl5OFqPgac7tBoUsjnzQ",
    5: "https://1024terabox.com/s/1KxskEvHhaMfLyA-OOgBdHQ",
    6: "https://1024terabox.com/s/1A-oWGLIvH90DPWyqGAY1Jw",
    7: "https://1024terabox.com/s/1oKaOWVfDkMkrigERpURgUg",
    8: "https://1024terabox.com/s/1EjY0eZkY2JFDyJpKihZcIw",
    9: "https://1024terabox.com/s/13JMO9tr6W1vGDH4DCAIkPg",
    10: "https://1024terabox.com/s/1sJbqyVgz5GcW6kmvWWG9Yg"
});
/*
 * Replace these placeholder URLs with authorised HTTPS links later.
 *
 * Example:
 * {
 *     id: 11,
 *     url: "https://1024terabox.com/s/your-real-link",
 *     demo: false
 * }
 */
const EXTRA_BUNDLE_LINKS = Object.freeze([
    Object.freeze({
        id: 11,
        url: "https://example.com/?demo-bundle=11",
        demo: true
    }),
    Object.freeze({
        id: 12,
        url: "https://example.com/?demo-bundle=12",
        demo: true
    }),
    Object.freeze({
        id: 13,
        url: "https://example.com/?demo-bundle=13",
        demo: true
    }),
    Object.freeze({
        id: 14,
        url: "https://example.com/?demo-bundle=14",
        demo: true
    }),
    Object.freeze({
        id: 15,
        url: "https://example.com/?demo-bundle=15",
        demo: true
    }),
    Object.freeze({
        id: 16,
        url: "https://example.com/?demo-bundle=16",
        demo: true
    }),
    Object.freeze({
        id: 17,
        url: "https://example.com/?demo-bundle=17",
        demo: true
    }),
    Object.freeze({
        id: 18,
        url: "https://example.com/?demo-bundle=18",
        demo: true
    }),
    Object.freeze({
        id: 19,
        url: "https://example.com/?demo-bundle=19",
        demo: true
    }),
    Object.freeze({
        id: 20,
        url: "https://example.com/?demo-bundle=20",
        demo: true
    })
]);
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
function configurePrimaryBundleLinks() {
    const links = document.querySelectorAll(
        ".bundle-grid [data-bundle]"
    );
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
function createExtraBundleElement(bundle) {
    const destination = getValidatedHttpsUrl(bundle.url);
    const link = document.createElement("a");
    const liveDot = document.createElement("span");
    const icon = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const description = document.createElement("small");
    link.className = "bundle-button extra-bundle-button";
    link.dataset.extraBundle = String(bundle.id);
    liveDot.className = "live-dot";
    liveDot.setAttribute("aria-hidden", "true");
    icon.className = "bundle-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = String(bundle.id).padStart(2, "0");
    copy.className = "bundle-copy";
    title.textContent = `VIEW BUNDLE ${bundle.id}`;
    description.textContent = bundle.demo
        ? "DEMO PLACEHOLDER"
        : "TERABOX COLLECTION";
    copy.append(title, description);
    link.append(liveDot, icon, copy);
    if (!destination) {
        keepBundleUnavailable(link, bundle.id);
        return link;
    }
    link.href = destination;
    link.target = "_blank";
    link.rel = "noopener noreferrer external nofollow";
    link.setAttribute(
        "aria-label",
        bundle.demo
            ? `Open demo placeholder for bundle ${bundle.id} in a new tab`
            : `Open TeraBox bundle ${bundle.id} in a new tab`
    );
    if (bundle.demo) {
        link.classList.add("is-demo");
    }
    return link;
}
function createMoreLinksInterface() {
    const visibleExtraBundles = EXTRA_BUNDLE_LINKS.filter((bundle) => {
        return !bundle.demo && getValidatedHttpsUrl(bundle.url) !== null;
    });
    if (visibleExtraBundles.length === 0) {
        return;
    }
    const bundleSection = document.getElementById("bundles");
    const primaryGrid = bundleSection?.querySelector(".bundle-grid");
    if (!bundleSection || !primaryGrid) {
        return;
    }
    if (document.getElementById("extra-bundles-panel")) {
        return;
    }
    const controls = document.createElement("div");
    const showButton = document.createElement("button");
    const extraPanel = document.createElement("section");
    const heading = document.createElement("div");
    const headingCopy = document.createElement("div");
    const eyebrow = document.createElement("span");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const extraGrid = document.createElement("div");
    const bottomControls = document.createElement("div");
    const closeButton = document.createElement("button");
    controls.className = "more-links-controls";
    showButton.className = "more-links-button";
    showButton.id = "show-more-links";
    showButton.type = "button";
    showButton.setAttribute("aria-expanded", "false");
    showButton.setAttribute(
        "aria-controls",
        "extra-bundles-panel"
    );
    showButton.innerHTML = `
        <span class="more-links-symbol" aria-hidden="true">＋</span>
        <span>
            <strong>SHOW MORE LINKS</strong>
            <small>OPEN ${visibleExtraBundles.length} EXTRA BUNDLES</small>
        </span>
        <span class="more-links-arrow" aria-hidden="true">⌄</span>
    `;
    extraPanel.className = "extra-bundles-panel";
    extraPanel.id = "extra-bundles-panel";
    extraPanel.hidden = true;
    extraPanel.setAttribute(
        "aria-labelledby",
        "extra-bundles-title"
    );
    heading.className = "extra-bundles-heading";
    headingCopy.className = "extra-bundles-heading-copy";
    eyebrow.className = "extra-bundles-eyebrow";
    eyebrow.textContent = "ADDITIONAL COLLECTION";
    title.id = "extra-bundles-title";
    title.textContent = `${visibleExtraBundles.length} EXTRA BUNDLE LINKS`;
    description.textContent =
        "More bundle links from the same directory.";
    headingCopy.append(eyebrow, title, description);
    heading.append(headingCopy);
    extraGrid.className = "bundle-grid extra-bundle-grid";
    extraGrid.setAttribute(
        "aria-label",
        "Additional video bundle links"
    );
    visibleExtraBundles.forEach((bundle) => {
        extraGrid.append(createExtraBundleElement(bundle));
    });
    bottomControls.className = "extra-bundles-bottom-controls";
    closeButton.className = "close-extra-links-button";
    closeButton.id = "close-extra-links";
    closeButton.type = "button";
    closeButton.innerHTML = `
        <span aria-hidden="true">×</span>
        <span>
            <strong>CLOSE EXTRA LINKS</strong>
            <small>HIDE THE ADDITIONAL BUNDLES</small>
        </span>
        <span aria-hidden="true">⌃</span>
    `;
    bottomControls.append(closeButton);
    extraPanel.append(heading, extraGrid, bottomControls);
    controls.append(showButton);
    primaryGrid.insertAdjacentElement("afterend", controls);
    controls.insertAdjacentElement("afterend", extraPanel);
    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );
    function openExtraBundles() {
        extraPanel.hidden = false;
        showButton.hidden = true;
        showButton.setAttribute("aria-expanded", "true");
        window.requestAnimationFrame(() => {
            extraPanel.classList.add("is-visible");
        });
        const extraTitle = document.getElementById(
            "extra-bundles-title"
        );
        if (extraTitle) {
            extraTitle.setAttribute("tabindex", "-1");
            extraTitle.focus({
                preventScroll: true
            });
        }
        extraPanel.scrollIntoView({
            behavior: reducedMotion.matches ? "auto" : "smooth",
            block: "start"
        });
    }
    function closeExtraBundles() {
        extraPanel.classList.remove("is-visible");
        const finishClosing = () => {
            extraPanel.hidden = true;
            showButton.hidden = false;
            showButton.setAttribute("aria-expanded", "false");
            showButton.focus({
                preventScroll: true
            });
            controls.scrollIntoView({
                behavior: reducedMotion.matches ? "auto" : "smooth",
                block: "center"
            });
        };
        if (reducedMotion.matches) {
            finishClosing();
            return;
        }
        window.setTimeout(finishClosing, 220);
    }
    showButton.addEventListener("click", openExtraBundles);
    closeButton.addEventListener("click", closeExtraBundles);
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
    yearElement.textContent = String(
        Math.max(2026, currentYear)
    );
}
function configureDarkBrowserTheme() {
    const themeColor = document.querySelector(
        'meta[name="theme-color"]'
    );
    const colorScheme = document.querySelector(
        'meta[name="color-scheme"]'
    );
    if (themeColor) {
        themeColor.setAttribute("content", "#050505");
    }
    if (colorScheme) {
        colorScheme.setAttribute("content", "dark");
    }
    document.documentElement.style.colorScheme = "dark";
}
function configureAccessGuide() {
    const launcher = document.getElementById("help-launcher");
    const dialog = document.getElementById(
        "access-guide-dialog"
    );
    const closeButton = document.getElementById(
        "access-dialog-close"
    );
    const doneButton = document.getElementById(
        "access-dialog-done"
    );
    if (
        !(launcher instanceof HTMLButtonElement) ||
        !(dialog instanceof HTMLDialogElement)
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
    configureDarkBrowserTheme();
    configurePrimaryBundleLinks();
    createMoreLinksInterface();
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
