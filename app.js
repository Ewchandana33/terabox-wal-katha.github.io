"use strict";

const AGE_SESSION_KEY = "video-hub-age-confirmed";
const LANGUAGE_STORAGE_KEY = "video-hub-language";

const languageNames = {
    en: "English",
    si: "සිංහල",
    hi: "हिन्दी",
    es: "Español",
    fr: "Français"
};

const translations = {
    en: {
        pageTitle: "TeraBox Video Hub | 18+ Video Collections",
        metaDescription: "Explore a mobile-friendly directory of curated video collections with clearly labeled external links.",
        skipLink: "Skip to main content",
        brandSubtitle: "Video Hub",
        navHome: "Home",
        navCollections: "Collections",
        navFeatures: "Features",
        navGuide: "Access guide",
        eyebrow: "18+ CURATED VIDEO DIRECTORY",
        heroTitleFirst: "Discover your next",
        heroTitleAccent: "video collection",
        heroDescription: "Explore a clean, fast and mobile-friendly directory of selected TeraBox video bundles with clearly labeled external links.",
        exploreButton: "Explore collections",
        downloadButton: "Download TeraBox",
        adultOnly: "Adults only",
        responsiveTitle: "Responsive",
        allDevices: "All devices",
        clearLinksTitle: "Clear links",
        externalLabels: "External labels",
        previewReady: "Preview ready",
        multipleBundles: "Multiple bundles",
        easyAccess: "Easy access",
        labeledLinks: "Labeled links",
        openNewTab: "Open in a new tab",
        experienceKicker: "BETTER BROWSING EXPERIENCE",
        featuresHeading: "Designed for simple and convenient access",
        featuresDescription: "A lightweight interface created for clarity, accessibility and smooth navigation across modern devices.",
        featureAgeTitle: "Age-aware access",
        featureAgeText: "An age confirmation is shown before website access.",
        featureLanguageTitle: "Five languages",
        featureLanguageText: "Browse the interface in English, Sinhala, Hindi, Spanish or French.",
        featureLinksTitle: "Clear destinations",
        featureLinksText: "External destinations are opened separately and clearly identified.",
        featureSpeedTitle: "Fast and responsive",
        featureSpeedText: "Optimized for desktop, tablet and mobile screen sizes.",
        collectionKicker: "VIDEO COLLECTIONS",
        collectionsHeading: "Choose a bundle to continue",
        collectionsDescription: "The buttons below currently use demo destinations. Verified bundle links can be connected later.",
        bundleOne: "Video bundle one",
        bundleTwo: "Video bundle two",
        bundleThree: "Video bundle three",
        bundleFour: "Video bundle four",
        bundleFive: "Video bundle five",
        bundleSix: "Video bundle six",
        demoCollection: "Demo collection link",
        officialApp: "OFFICIAL TERABOX APPLICATION",
        appHeading: "Get the TeraBox app from Google Play",
        appDescription: "Install the official TeraBox application before opening supported collection links.",
        getItOn: "GET IT ON",
        guideKicker: "QUICK ACCESS GUIDE",
        guideHeading: "How to use this directory",
        stepOneTitle: "Confirm your age",
        stepOneText: "Continue only if you meet the legal age requirement.",
        stepTwoTitle: "Choose a language",
        stepTwoText: "Select one of the five available interface languages.",
        stepThreeTitle: "Install TeraBox",
        stepThreeText: "Use the official Google Play link when the app is required.",
        stepFourTitle: "Open a collection",
        stepFourText: "Select a verified bundle link and review its destination.",
        noticeHeading: "Important notice",
        noticeText: "This website is an independent external-link directory and is not affiliated with TeraBox. Verify the legality, ownership, privacy policy and safety of every destination before accessing or sharing content.",
        footerDescription: "An independent 18+ external-link directory.",
        rightsText: "All rights reserved.",
        changeLanguage: "Change language"
    },

    si: {
        pageTitle: "TeraBox Video Hub | 18+ වීඩියෝ එකතු",
        metaDescription: "පැහැදිලිව සලකුණු කළ external links සමඟ mobile-friendly video collection directory එකක් ගවේෂණය කරන්න.",
        skipLink: "ප්‍රධාන අන්තර්ගතයට යන්න",
        brandSubtitle: "වීඩියෝ මධ්‍යස්ථානය",
        navHome: "මුල් පිටුව",
        navCollections: "එකතු",
        navFeatures: "විශේෂාංග",
        navGuide: "ප්‍රවේශ මාර්ගෝපදේශය",
        eyebrow: "18+ තෝරාගත් වීඩියෝ DIRECTORY",
        heroTitleFirst: "ඔබගේ මීළඟ",
        heroTitleAccent: "වීඩියෝ එකතුව සොයාගන්න",
        heroDescription: "පැහැදිලිව සලකුණු කළ external links සහිත තෝරාගත් TeraBox video bundles සඳහා සරල, වේගවත් සහ mobile-friendly directory එකක් ගවේෂණය කරන්න.",
        exploreButton: "එකතු ගවේෂණය කරන්න",
        downloadButton: "TeraBox බාගන්න",
        adultOnly: "වැඩිහිටියන්ට පමණි",
        responsiveTitle: "Responsive",
        allDevices: "සියලු උපාංග",
        clearLinksTitle: "පැහැදිලි links",
        externalLabels: "External සලකුණු",
        previewReady: "Preview සූදානම්",
        multipleBundles: "Bundles කිහිපයක්",
        easyAccess: "පහසු ප්‍රවේශය",
        labeledLinks: "සලකුණු කළ links",
        openNewTab: "නව tab එකක විවෘත වේ",
        experienceKicker: "වඩා හොඳ BROWSING අත්දැකීම",
        featuresHeading: "සරල සහ පහසු ප්‍රවේශයක් සඳහා නිර්මාණය කර ඇත",
        featuresDescription: "පැහැදිලි බව, accessibility සහ සියලු නවීන උපාංගවල සුමට navigation සඳහා සකස් කළ සැහැල්ලු interface එකකි.",
        featureAgeTitle: "වයස පදනම් වූ ප්‍රවේශය",
        featureAgeText: "අඩවියට පිවිසීමට පෙර වයස තහවුරු කිරීම පෙන්වයි.",
        featureLanguageTitle: "භාෂා පහක්",
        featureLanguageText: "English, සිංහල, हिन्दी, Español හෝ Français භාෂාවකින් interface එක භාවිතා කරන්න.",
        featureLinksTitle: "පැහැදිලි destinations",
        featureLinksText: "External destinations වෙනම විවෘත වන අතර පැහැදිලිව හඳුන්වා ඇත.",
        featureSpeedTitle: "වේගවත් සහ responsive",
        featureSpeedText: "Desktop, tablet සහ mobile screen සඳහා ප්‍රශස්ත කර ඇත.",
        collectionKicker: "වීඩියෝ එකතු",
        collectionsHeading: "ඉදිරියට යාමට bundle එකක් තෝරන්න",
        collectionsDescription: "පහත buttons දැනට demo destinations භාවිතා කරයි. Verified bundle links පසුව සම්බන්ධ කළ හැක.",
        bundleOne: "වීඩියෝ bundle එක",
        bundleTwo: "වීඩියෝ bundle දෙක",
        bundleThree: "වීඩියෝ bundle තුන",
        bundleFour: "වීඩියෝ bundle හතර",
        bundleFive: "වීඩියෝ bundle පහ",
        bundleSix: "වීඩියෝ bundle හය",
        demoCollection: "Demo collection link",
        officialApp: "නිල TERABOX APPLICATION එක",
        appHeading: "Google Play වෙතින් TeraBox app එක ලබාගන්න",
        appDescription: "සහාය දක්වන collection links විවෘත කිරීමට පෙර නිල TeraBox application එක ස්ථාපනය කරන්න.",
        getItOn: "ලබාගන්න",
        guideKicker: "ඉක්මන් ප්‍රවේශ මාර්ගෝපදේශය",
        guideHeading: "මෙම directory එක භාවිතා කරන ආකාරය",
        stepOneTitle: "ඔබගේ වයස තහවුරු කරන්න",
        stepOneText: "නීතිමය වයස් සීමාව සපුරාලන්නේ නම් පමණක් ඉදිරියට යන්න.",
        stepTwoTitle: "භාෂාවක් තෝරන්න",
        stepTwoText: "ලබාදී ඇති interface භාෂා පහෙන් එකක් තෝරන්න.",
        stepThreeTitle: "TeraBox ස්ථාපනය කරන්න",
        stepThreeText: "App එක අවශ්‍ය නම් නිල Google Play link එක භාවිතා කරන්න.",
        stepFourTitle: "එකතුවක් විවෘත කරන්න",
        stepFourText: "Verified bundle link එකක් තෝරා එහි destination එක පරීක්ෂා කරන්න.",
        noticeHeading: "වැදගත් දැනුම්දීම",
        noticeText: "මෙම අඩවිය ස්වාධීන external-link directory එකක් වන අතර TeraBox සමඟ සම්බන්ධ නොවේ. Content එකකට පිවිසීමට හෝ බෙදාගැනීමට පෙර destination එකේ නීත්‍යානුකූලභාවය, අයිතිය, privacy policy සහ ආරක්ෂාව තහවුරු කරන්න.",
        footerDescription: "ස්වාධීන 18+ external-link directory එකකි.",
        rightsText: "සියලු හිමිකම් ඇවිරිණි.",
        changeLanguage: "භාෂාව වෙනස් කරන්න"
    },

    hi: {
        pageTitle: "TeraBox Video Hub | 18+ वीडियो संग्रह",
        metaDescription: "स्पष्ट रूप से चिह्नित बाहरी लिंक के साथ मोबाइल-अनुकूल वीडियो संग्रह निर्देशिका देखें।",
        skipLink: "मुख्य सामग्री पर जाएं",
        brandSubtitle: "वीडियो हब",
        navHome: "होम",
        navCollections: "संग्रह",
        navFeatures: "विशेषताएं",
        navGuide: "एक्सेस गाइड",
        eyebrow: "18+ चयनित वीडियो निर्देशिका",
        heroTitleFirst: "अपना अगला",
        heroTitleAccent: "वीडियो संग्रह खोजें",
        heroDescription: "स्पष्ट रूप से चिह्नित बाहरी लिंक के साथ चयनित TeraBox वीडियो बंडलों की तेज़ और मोबाइल-अनुकूल निर्देशिका देखें।",
        exploreButton: "संग्रह देखें",
        downloadButton: "TeraBox डाउनलोड करें",
        adultOnly: "केवल वयस्क",
        responsiveTitle: "Responsive",
        allDevices: "सभी डिवाइस",
        clearLinksTitle: "स्पष्ट लिंक",
        externalLabels: "बाहरी लेबल",
        previewReady: "Preview तैयार",
        multipleBundles: "कई बंडल",
        easyAccess: "आसान पहुंच",
        labeledLinks: "चिह्नित लिंक",
        openNewTab: "नए टैब में खुलेगा",
        experienceKicker: "बेहतर ब्राउज़िंग अनुभव",
        featuresHeading: "सरल और सुविधाजनक पहुंच के लिए डिज़ाइन किया गया",
        featuresDescription: "स्पष्टता, accessibility और आधुनिक उपकरणों पर आसान navigation के लिए हल्का interface।",
        featureAgeTitle: "आयु-आधारित पहुंच",
        featureAgeText: "वेबसाइट खोलने से पहले आयु की पुष्टि दिखाई जाती है।",
        featureLanguageTitle: "पांच भाषाएं",
        featureLanguageText: "English, Sinhala, Hindi, Spanish या French में interface देखें।",
        featureLinksTitle: "स्पष्ट गंतव्य",
        featureLinksText: "बाहरी गंतव्य अलग से खुलते हैं और स्पष्ट रूप से पहचाने जाते हैं।",
        featureSpeedTitle: "तेज़ और responsive",
        featureSpeedText: "Desktop, tablet और mobile स्क्रीन के लिए अनुकूलित।",
        collectionKicker: "वीडियो संग्रह",
        collectionsHeading: "आगे बढ़ने के लिए बंडल चुनें",
        collectionsDescription: "नीचे दिए गए buttons अभी demo destinations उपयोग करते हैं। Verified links बाद में जोड़े जा सकते हैं।",
        bundleOne: "वीडियो बंडल एक",
        bundleTwo: "वीडियो बंडल दो",
        bundleThree: "वीडियो बंडल तीन",
        bundleFour: "वीडियो बंडल चार",
        bundleFive: "वीडियो बंडल पांच",
        bundleSix: "वीडियो बंडल छह",
        demoCollection: "Demo collection link",
        officialApp: "आधिकारिक TERABOX APPLICATION",
        appHeading: "Google Play से TeraBox app प्राप्त करें",
        appDescription: "समर्थित collection links खोलने से पहले आधिकारिक TeraBox application install करें।",
        getItOn: "यहां प्राप्त करें",
        guideKicker: "त्वरित एक्सेस गाइड",
        guideHeading: "इस निर्देशिका का उपयोग कैसे करें",
        stepOneTitle: "अपनी आयु की पुष्टि करें",
        stepOneText: "केवल तभी आगे बढ़ें जब आप कानूनी आयु आवश्यकता पूरी करते हों।",
        stepTwoTitle: "भाषा चुनें",
        stepTwoText: "उपलब्ध पांच interface भाषाओं में से एक चुनें।",
        stepThreeTitle: "TeraBox install करें",
        stepThreeText: "App आवश्यक होने पर आधिकारिक Google Play link उपयोग करें।",
        stepFourTitle: "संग्रह खोलें",
        stepFourText: "Verified bundle link चुनें और destination की जांच करें।",
        noticeHeading: "महत्वपूर्ण सूचना",
        noticeText: "यह वेबसाइट एक स्वतंत्र external-link directory है और TeraBox से संबद्ध नहीं है। किसी भी content को खोलने या साझा करने से पहले destination की वैधता, ownership, privacy policy और safety जांचें।",
        footerDescription: "एक स्वतंत्र 18+ external-link directory।",
        rightsText: "सर्वाधिकार सुरक्षित।",
        changeLanguage: "भाषा बदलें"
    },

    es: {
        pageTitle: "TeraBox Video Hub | Colecciones de vídeo 18+",
        metaDescription: "Explora un directorio de colecciones de vídeo optimizado para móviles con enlaces externos claramente identificados.",
        skipLink: "Saltar al contenido principal",
        brandSubtitle: "Centro de vídeos",
        navHome: "Inicio",
        navCollections: "Colecciones",
        navFeatures: "Funciones",
        navGuide: "Guía de acceso",
        eyebrow: "DIRECTORIO DE VÍDEOS PARA MAYORES DE 18",
        heroTitleFirst: "Descubre tu próxima",
        heroTitleAccent: "colección de vídeos",
        heroDescription: "Explora un directorio limpio, rápido y optimizado para móviles de paquetes de vídeo TeraBox seleccionados.",
        exploreButton: "Explorar colecciones",
        downloadButton: "Descargar TeraBox",
        adultOnly: "Solo adultos",
        responsiveTitle: "Responsive",
        allDevices: "Todos los dispositivos",
        clearLinksTitle: "Enlaces claros",
        externalLabels: "Etiquetas externas",
        previewReady: "Vista previa lista",
        multipleBundles: "Varios paquetes",
        easyAccess: "Acceso sencillo",
        labeledLinks: "Enlaces identificados",
        openNewTab: "Abrir en una pestaña nueva",
        experienceKicker: "UNA MEJOR EXPERIENCIA",
        featuresHeading: "Diseñado para un acceso sencillo y cómodo",
        featuresDescription: "Una interfaz ligera creada para ofrecer claridad, accesibilidad y navegación fluida.",
        featureAgeTitle: "Acceso según la edad",
        featureAgeText: "La confirmación de edad aparece antes de acceder al sitio.",
        featureLanguageTitle: "Cinco idiomas",
        featureLanguageText: "Utiliza la interfaz en inglés, cingalés, hindi, español o francés.",
        featureLinksTitle: "Destinos claros",
        featureLinksText: "Los destinos externos se abren por separado y están claramente identificados.",
        featureSpeedTitle: "Rápido y adaptable",
        featureSpeedText: "Optimizado para ordenadores, tabletas y móviles.",
        collectionKicker: "COLECCIONES DE VÍDEO",
        collectionsHeading: "Elige un paquete para continuar",
        collectionsDescription: "Los botones siguientes utilizan destinos de demostración. Los enlaces verificados se pueden añadir después.",
        bundleOne: "Paquete de vídeo uno",
        bundleTwo: "Paquete de vídeo dos",
        bundleThree: "Paquete de vídeo tres",
        bundleFour: "Paquete de vídeo cuatro",
        bundleFive: "Paquete de vídeo cinco",
        bundleSix: "Paquete de vídeo seis",
        demoCollection: "Enlace de demostración",
        officialApp: "APLICACIÓN OFICIAL DE TERABOX",
        appHeading: "Obtén TeraBox desde Google Play",
        appDescription: "Instala la aplicación oficial de TeraBox antes de abrir enlaces compatibles.",
        getItOn: "DISPONIBLE EN",
        guideKicker: "GUÍA DE ACCESO RÁPIDO",
        guideHeading: "Cómo utilizar este directorio",
        stepOneTitle: "Confirma tu edad",
        stepOneText: "Continúa solamente si cumples el requisito legal de edad.",
        stepTwoTitle: "Elige un idioma",
        stepTwoText: "Selecciona uno de los cinco idiomas disponibles.",
        stepThreeTitle: "Instala TeraBox",
        stepThreeText: "Utiliza el enlace oficial de Google Play cuando necesites la aplicación.",
        stepFourTitle: "Abre una colección",
        stepFourText: "Selecciona un enlace verificado y revisa su destino.",
        noticeHeading: "Aviso importante",
        noticeText: "Este sitio es un directorio independiente de enlaces externos y no está afiliado con TeraBox. Verifica la legalidad, propiedad, política de privacidad y seguridad de cada destino.",
        footerDescription: "Un directorio independiente de enlaces externos para mayores de 18.",
        rightsText: "Todos los derechos reservados.",
        changeLanguage: "Cambiar idioma"
    },

    fr: {
        pageTitle: "TeraBox Video Hub | Collections vidéo 18+",
        metaDescription: "Explorez un annuaire de collections vidéo adapté aux mobiles avec des liens externes clairement identifiés.",
        skipLink: "Aller au contenu principal",
        brandSubtitle: "Centre vidéo",
        navHome: "Accueil",
        navCollections: "Collections",
        navFeatures: "Fonctionnalités",
        navGuide: "Guide d’accès",
        eyebrow: "ANNUAIRE VIDÉO RÉSERVÉ AUX 18+",
        heroTitleFirst: "Découvrez votre prochaine",
        heroTitleAccent: "collection vidéo",
        heroDescription: "Explorez un annuaire rapide et adapté aux mobiles de collections vidéo TeraBox sélectionnées.",
        exploreButton: "Explorer les collections",
        downloadButton: "Télécharger TeraBox",
        adultOnly: "Adultes uniquement",
        responsiveTitle: "Responsive",
        allDevices: "Tous les appareils",
        clearLinksTitle: "Liens clairs",
        externalLabels: "Libellés externes",
        previewReady: "Aperçu disponible",
        multipleBundles: "Plusieurs collections",
        easyAccess: "Accès facile",
        labeledLinks: "Liens identifiés",
        openNewTab: "Ouverture dans un nouvel onglet",
        experienceKicker: "UNE MEILLEURE EXPÉRIENCE",
        featuresHeading: "Conçu pour un accès simple et pratique",
        featuresDescription: "Une interface légère conçue pour la clarté, l’accessibilité et une navigation fluide.",
        featureAgeTitle: "Accès selon l’âge",
        featureAgeText: "Une confirmation d’âge est affichée avant l’accès au site.",
        featureLanguageTitle: "Cinq langues",
        featureLanguageText: "Utilisez l’interface en anglais, cingalais, hindi, espagnol ou français.",
        featureLinksTitle: "Destinations claires",
        featureLinksText: "Les destinations externes s’ouvrent séparément et sont clairement identifiées.",
        featureSpeedTitle: "Rapide et responsive",
        featureSpeedText: "Optimisé pour les ordinateurs, tablettes et appareils mobiles.",
        collectionKicker: "COLLECTIONS VIDÉO",
        collectionsHeading: "Choisissez une collection pour continuer",
        collectionsDescription: "Les boutons utilisent actuellement des destinations de démonstration. Les liens vérifiés pourront être ajoutés ultérieurement.",
        bundleOne: "Collection vidéo un",
        bundleTwo: "Collection vidéo deux",
        bundleThree: "Collection vidéo trois",
        bundleFour: "Collection vidéo quatre",
        bundleFive: "Collection vidéo cinq",
        bundleSix: "Collection vidéo six",
        demoCollection: "Lien de démonstration",
        officialApp: "APPLICATION TERABOX OFFICIELLE",
        appHeading: "Téléchargez TeraBox depuis Google Play",
        appDescription: "Installez l’application officielle TeraBox avant d’ouvrir les liens compatibles.",
        getItOn: "DISPONIBLE SUR",
        guideKicker: "GUIDE D’ACCÈS RAPIDE",
        guideHeading: "Comment utiliser cet annuaire",
        stepOneTitle: "Confirmez votre âge",
        stepOneText: "Continuez uniquement si vous remplissez la condition d’âge légal.",
        stepTwoTitle: "Choisissez une langue",
        stepTwoText: "Sélectionnez l’une des cinq langues disponibles.",
        stepThreeTitle: "Installez TeraBox",
        stepThreeText: "Utilisez le lien Google Play officiel lorsque l’application est nécessaire.",
        stepFourTitle: "Ouvrez une collection",
        stepFourText: "Sélectionnez un lien vérifié et examinez sa destination.",
        noticeHeading: "Avis important",
        noticeText: "Ce site est un annuaire indépendant de liens externes et n’est pas affilié à TeraBox. Vérifiez la légalité, la propriété, la politique de confidentialité et la sécurité de chaque destination.",
        footerDescription: "Un annuaire indépendant de liens externes réservé aux 18+.",
        rightsText: "Tous droits réservés.",
        changeLanguage: "Changer de langue"
    }
};

function getElement(id) {
    return document.getElementById(id);
}

function safelyReadStorage(storage, key) {
    try {
        return storage.getItem(key);
    } catch {
        return null;
    }
}

function safelyWriteStorage(storage, key, value) {
    try {
        storage.setItem(key, value);
    } catch {
        return;
    }
}

function openDialog(dialog) {
    if (!(dialog instanceof HTMLDialogElement)) {
        return;
    }

    document.body.classList.add("dialog-open");

    if (typeof dialog.showModal === "function") {
        dialog.showModal();
        return;
    }

    dialog.setAttribute("open", "");
}

function closeDialog(dialog) {
    if (!(dialog instanceof HTMLDialogElement)) {
        return;
    }

    if (typeof dialog.close === "function" && dialog.open) {
        dialog.close();
    } else {
        dialog.removeAttribute("open");
    }

    document.body.classList.remove("dialog-open");
}

function showLanguageDialog() {
    const languageDialog = getElement("language-dialog");

    if (!(languageDialog instanceof HTMLDialogElement)) {
        return;
    }

    openDialog(languageDialog);
}

function initializeAccessFlow() {
    const ageDialog = getElement("age-dialog");
    const languageDialog = getElement("language-dialog");
    const ageConfirmButton = getElement("age-confirm");

    if (
        !(ageDialog instanceof HTMLDialogElement) ||
        !(languageDialog instanceof HTMLDialogElement) ||
        !(ageConfirmButton instanceof HTMLButtonElement)
    ) {
        return;
    }

    ageDialog.addEventListener("cancel", (event) => {
        event.preventDefault();
    });

    languageDialog.addEventListener("cancel", (event) => {
        event.preventDefault();
    });

    ageConfirmButton.addEventListener("click", () => {
        safelyWriteStorage(window.sessionStorage, AGE_SESSION_KEY, "true");
        closeDialog(ageDialog);

        window.setTimeout(() => {
            showLanguageDialog();
        }, 120);
    });

    const ageConfirmed = safelyReadStorage(
        window.sessionStorage,
        AGE_SESSION_KEY
    );

    if (ageConfirmed === "true") {
        showLanguageDialog();
    } else {
        openDialog(ageDialog);
    }
}

function updateMetadata(language) {
    const translation = translations[language];
    const description = getElement("meta-description");
    const openGraphTitle = getElement("og-title");
    const openGraphDescription = getElement("og-description");
    const twitterTitle = getElement("twitter-title");
    const twitterDescription = getElement("twitter-description");

    document.title = translation.pageTitle;

    if (description) {
        description.setAttribute("content", translation.metaDescription);
    }

    if (openGraphTitle) {
        openGraphTitle.setAttribute("content", translation.pageTitle);
    }

    if (openGraphDescription) {
        openGraphDescription.setAttribute(
            "content",
            translation.metaDescription
        );
    }

    if (twitterTitle) {
        twitterTitle.setAttribute("content", translation.pageTitle);
    }

    if (twitterDescription) {
        twitterDescription.setAttribute(
            "content",
            translation.metaDescription
        );
    }
}

function applyLanguage(language) {
    const safeLanguage = translations[language] ? language : "en";
    const translation = translations[safeLanguage];
    const activeLanguageLabel = getElement("active-language-label");

    document.documentElement.lang = safeLanguage;
    document.documentElement.dir = "ltr";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");

        if (translationKey && translation[translationKey]) {
            element.textContent = translation[translationKey];
        }
    });

    if (activeLanguageLabel) {
        activeLanguageLabel.textContent = languageNames[safeLanguage];
    }

    updateMetadata(safeLanguage);
    safelyWriteStorage(
        window.localStorage,
        LANGUAGE_STORAGE_KEY,
        safeLanguage
    );
}

function initializeLanguageControls() {
    const languageDialog = getElement("language-dialog");
    const changeLanguageButton = getElement("change-language");
    const footerLanguageButton = getElement("footer-language-button");

    document.querySelectorAll("[data-language]").forEach((button) => {
        button.addEventListener("click", () => {
            const language = button.getAttribute("data-language") || "en";

            applyLanguage(language);

            if (languageDialog instanceof HTMLDialogElement) {
                closeDialog(languageDialog);
            }
        });
    });

    [changeLanguageButton, footerLanguageButton].forEach((button) => {
        if (!(button instanceof HTMLButtonElement)) {
            return;
        }

        button.addEventListener("click", () => {
            showLanguageDialog();
        });
    });
}

function initializeExternalLinkLabels() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');

    externalLinks.forEach((link) => {
        if (link.hasAttribute("aria-label")) {
            return;
        }

        const linkText = link.textContent.trim();

        if (linkText) {
            link.setAttribute(
                "aria-label",
                `${linkText} - opens in a new tab`
            );
        }
    });
}

function updateCopyrightYear() {
    const yearElement = getElement("current-year");

    if (yearElement) {
        yearElement.textContent = String(new Date().getFullYear());
    }
}

function initializeApplication() {
    const savedLanguage =
        safelyReadStorage(window.localStorage, LANGUAGE_STORAGE_KEY) || "en";

    applyLanguage(savedLanguage);
    updateCopyrightYear();
    initializeLanguageControls();
    initializeExternalLinkLabels();
    initializeAccessFlow();
}

document.addEventListener("DOMContentLoaded", initializeApplication);
