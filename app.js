"use strict";

const AGE_STORAGE_KEY = "terabox-video-hub-age-confirmed";

function updateCopyrightYear() {
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = String(new Date().getFullYear());
    }
}

function hasAgeConfirmation() {
    try {
        return window.localStorage.getItem(AGE_STORAGE_KEY) === "true";
    } catch {
        return false;
    }
}

function saveAgeConfirmation() {
    try {
        window.localStorage.setItem(AGE_STORAGE_KEY, "true");
    } catch {
        return;
    }
}

function initializeAgeDialog() {
    const dialog = document.getElementById("age-dialog");
    const confirmButton = document.getElementById("age-confirm");

    if (!(dialog instanceof HTMLDialogElement) || !(confirmButton instanceof HTMLButtonElement)) {
        return;
    }

    if (!hasAgeConfirmation()) {
        dialog.showModal();
    }

    dialog.addEventListener("cancel", (event) => {
        event.preventDefault();
    });

    confirmButton.addEventListener("click", () => {
        saveAgeConfirmation();
        dialog.close();
    });
}

function initializeExternalLinkLabels() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');

    externalLinks.forEach((link) => {
        const currentLabel = link.getAttribute("aria-label");

        if (!currentLabel) {
            const text = link.textContent.trim();
            link.setAttribute("aria-label", `${text} - නව tab එකක විවෘත වේ`);
        }
    });
}

function initializeApplication() {
    updateCopyrightYear();
    initializeAgeDialog();
    initializeExternalLinkLabels();
}

document.addEventListener("DOMContentLoaded", initializeApplication);
