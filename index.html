"use strict";

/*
 * Publish only links that you are legally authorized to share.
 *
 * Bundles 1-10 are the primary links supplied by the site operator.
 * Bundles 11-20 are loaded from /more-bundles.json.
 */
const BUNDLE_LINKS = Object.freeze({
    1: "https://1024terabox.com/s/1Uvm-lbRlZwIuLjWRaffprg",
    2: "https://1024terabox.com/s/1sJbqyVgz5GcW6kmvWWG9Yg",
    3: "https://1024terabox.com/s/1EjY0eZkY2JFDyJpKihZcIw",
    4: "https://1024terabox.com/s/11dfl5OFqPgac7tBoUsjnzQ",
    5: "https://1024terabox.com/s/1A-oWGLIvH90DPWyqGAY1Jw",
    6: "https://1024terabox.com/s/1ZIc39rpZ067AuHdll_2WLA",
    7: "https://1024terabox.com/s/13JMO9tr6W1vGDH4DCAIkPg",
    8: "https://1024terabox.com/s/1KxskEvHhaMfLyA-OOgBdHQ",
    9: "https://1024terabox.com/s/1H_VXYWAC-qZt3qx2Nw6uKA",
    10: "https://1024terabox.com/s/1oKaOWVfDkMkrigERpURgUg"
});

const MORE_BUNDLES_URL = "/more-bundles.json";
const PRIMARY_BUNDLE_COUNT = 10;
const EXTRA_BUNDLE_START = 11;
const EXTRA_BUNDLE_END = 20;

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

        if (
            url.protocol !== "https:"
            || !url.hostname
            || url.username
            || url.password
        ) {
            return null;
        }

        return url.href;
    } catch {
        return null;
    }
}

function enableBundle(
    link,
    destination,
    bundleNumber,
    subtitle = "TERABOX COLLECTION"
) {
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
        description.textContent = subtitle;
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
        "[data-bundle]:not([data-extra-bundle])"
    );

    const status = document.getElementById("bundle-status");
    let availableCount = 0;

    links.forEach((link) => {
        const bundleNumber = link.dataset.bundle;
        const configuredValue = BUNDLE_LINKS[bundleNumber];
        const destination = getValidatedHttpsUrl(configuredValue);

        if (destination) {
            enableBundle(
                link,
                destination,
                bundleNumber,
                "TERABOX COLLECTION"
            );

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

function createElement(tagName, className, textContent) {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (typeof textContent === "string") {
        element.textContent = textContent;
    }

    return element;
}

function createExtraBundleElement(bundle) {
    const link = createElement(
        "a",
        "bundle-button is-disabled"
    );

    link.dataset.bundle = String(bundle.id);
    link.dataset.extraBundle = "true";
    link.setAttribute("aria-disabled", "true");

    const liveDot = createElement("span", "live-dot");
    liveDot.setAttribute("aria-hidden", "true");

    const icon = createElement(
        "span",
        "bundle-icon",
        String(bundle.id).padStart(2, "0")
    );

    icon.setAttribute("aria-hidden", "true");

    const copy = createElement("span", "bundle-copy");

    const title = createElement(
        "strong",
        "",
        bundle.title || `VIEW BUNDLE ${bundle.id}`
    );

    const subtitle = createElement(
        "small",
        "",
        bundle.subtitle || "TERABOX COLLECTION"
    );

    copy.append(title, subtitle);
    link.append(liveDot, icon, copy);

    const destination = getValidatedHttpsUrl(bundle.url);

    if (destination) {
        enableBundle(
            link,
            destination,
            bundle.id,
            bundle.subtitle || "TERABOX COLLECTION"
        );
    } else {
        keepBundleUnavailable(link, bundle.id);
    }

    return link;
}

function validateMoreBundles(data) {
    if (!Array.isArray(data)) {
        throw new TypeError(
            "The additional bundle file must contain an array."
        );
    }

    const validBundles = [];
    const usedIds = new Set();

    data.forEach((item) => {
        if (
            !item
            || typeof item !== "object"
            || !Number.isInteger(item.id)
            || item.id < EXTRA_BUNDLE_START
            || item.id > EXTRA_BUNDLE_END
            || usedIds.has(item.id)
        ) {
            return;
        }

        const destination = getValidatedHttpsUrl(item.url);

        if (!destination) {
            return;
        }

        usedIds.add(item.id);

        validBundles.push({
            id: item.id,
            title:
                typeof item.title === "string"
                    ? item.title.trim()
                    : `VIEW BUNDLE ${item.id}`,
            subtitle:
                typeof item.subtitle === "string"
                    ? item.subtitle.trim()
                    : "TERABOX COLLECTION",
            url: destination,
            demo: item.demo === true
        });
    });

    validBundles.sort((first, second) => {
        return first.id - second.id;
    });

    if (validBundles.length === 0) {
        throw new Error(
            "No valid additional bundle links were found."
        );
    }

    return validBundles;
}

function createMoreLinksInterface() {
    const primaryGrid = document.querySelector(
        ".bundle-section .bundle-grid"
    );

    if (
        !primaryGrid
        || document.getElementById("more-links-controls")
    ) {
        return null;
    }

    const controls = createElement(
        "div",
        "more-links-controls"
    );

    controls.id = "more-links-controls";

    const moreButton = createElement(
        "button",
        "hero-button more-links-button"
    );

    moreButton.id = "more-links-button";
    moreButton.type = "button";
    moreButton.setAttribute("aria-expanded", "false");
    moreButton.setAttribute(
        "aria-controls",
        "additional-bundle-grid"
    );

    const buttonIcon = createElement(
        "span",
        "more-links-button-icon",
        "+"
    );

    buttonIcon.setAttribute("aria-hidden", "true");

    const buttonText = createElement(
        "span",
        "more-links-button-text",
        "SHOW MORE LINKS"
    );

    moreButton.append(buttonIcon, buttonText);

    const loadingStatus = createElement(
        "p",
        "bundle-status more-links-status",
        "Ten more demo links are available."
    );

    loadingStatus.id = "more-links-status";
    loadingStatus.setAttribute("role", "status");
    loadingStatus.setAttribute("aria-live", "polite");
    loadingStatus.setAttribute("aria-atomic", "true");

    const extraGrid = createElement(
        "div",
        "bundle-grid additional-bundle-grid"
    );

    extraGrid.id = "additional-bundle-grid";
    extraGrid.setAttribute(
        "aria-label",
        "Additional TeraBox video bundle links"
    );

    extraGrid.hidden = true;
    extraGrid.style.display = "none";

    controls.append(moreButton, loadingStatus, extraGrid);
    primaryGrid.insertAdjacentElement("afterend", controls);

    return {
        controls,
        moreButton,
        buttonIcon,
        buttonText,
        loadingStatus,
        extraGrid
    };
}

async function loadMoreBundles(interfaceElements) {
    const {
        moreButton,
        buttonIcon,
        buttonText,
        loadingStatus,
        extraGrid
    } = interfaceElements;

    if (
        moreButton.dataset.loading === "true"
        || moreButton.dataset.loaded === "true"
    ) {
        return;
    }

    moreButton.dataset.loading = "true";
    moreButton.disabled = true;
    moreButton.setAttribute("aria-busy", "true");

    buttonIcon.textContent = "…";
    buttonText.textContent = "LOADING MORE LINKS";

    loadingStatus.textContent =
        "Loading ten additional bundle links…";

    loadingStatus.classList.remove("is-unavailable");

    try {
        const response = await fetch(MORE_BUNDLES_URL, {
            method: "GET",
            credentials: "same-origin",
            headers: {
                Accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(
                `Additional bundle request failed: ${response.status}`
            );
        }

        const data = await response.json();
        const bundles = validateMoreBundles(data);
        const fragment = document.createDocumentFragment();

        bundles.forEach((bundle) => {
            fragment.appendChild(
                createExtraBundleElement(bundle)
            );
        });

        extraGrid.replaceChildren(fragment);
        extraGrid.hidden = false;
        extraGrid.style.removeProperty("display");

        moreButton.dataset.loaded = "true";
        moreButton.setAttribute("aria-expanded", "true");

        loadingStatus.textContent =
            `${bundles.length} additional demo bundle links loaded.`;

        moreButton.remove();

        const firstExtraLink = extraGrid.querySelector(
            ".bundle-button:not(.is-disabled)"
        );

        if (firstExtraLink instanceof HTMLElement) {
            firstExtraLink.focus({
                preventScroll: true
            });

            firstExtraLink.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
                    ? "auto"
                    : "smooth",
                block: "center"
            });
        }

        secureExternalLinks();
    } catch (error) {
        console.error("Unable to load more bundles:", error);

        loadingStatus.textContent =
            "The additional links could not be loaded. Please try again.";

        loadingStatus.classList.add("is-unavailable");

        moreButton.disabled = false;
        moreButton.removeAttribute("aria-busy");

        buttonIcon.textContent = "↻";
        buttonText.textContent = "TRY AGAIN";
    } finally {
        moreButton.dataset.loading = "false";
    }
}

function configureMoreLinks() {
    const interfaceElements = createMoreLinksInterface();

    if (!interfaceElements) {
        return;
    }

    interfaceElements.moreButton.addEventListener(
        "click",
        () => {
            loadMoreBundles(interfaceElements);
        }
    );
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

function updateCopyrightYear() {
    const yearElement = document.getElementById(
        "current-year"
    );

    if (!yearElement) {
        return;
    }

    const currentYear = new Date().getFullYear();

    yearElement.textContent = String(
        Math.max(2026, currentYear)
    );
}

function configureAccessGuide() {
    const launcher = document.getElementById(
        "help-launcher"
    );

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

        if (
            dialog.open
            && typeof dialog.close === "function"
        ) {
            dialog.close();
        } else {
            dialog.removeAttribute("open");
            document.body.classList.remove(
                "dialog-is-open"
            );

            if (shouldRestoreLauncherFocus) {
                launcher.focus();
            }
        }

        if (scrollToBundles) {
            const bundles = document.getElementById(
                "bundles"
            );

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
        document.body.classList.remove(
            "dialog-is-open"
        );
    });

    dialog.addEventListener("close", () => {
        document.body.classList.remove(
            "dialog-is-open"
        );

        if (shouldRestoreLauncherFocus) {
            launcher.focus({
                preventScroll: true
            });
        }

        shouldRestoreLauncherFocus = false;
    });
}

function initializeApplication() {
    configurePrimaryBundleLinks();
    configureMoreLinks();
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
