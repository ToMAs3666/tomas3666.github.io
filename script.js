
// ==========================================
// AETHER - MAIN JAVASCRIPT
// ==========================================


// WELCOME MESSAGE

console.log("Willkommen auf meiner Website!");


// FOOTER YEAR

const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Tomás. Alle Rechte vorbehalten.`;
}


// ==========================================
// PROJECT ANIMATION
// ==========================================

const projectCards = document.querySelectorAll(".project-card");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.2
    });

    projectCards.forEach((card) => {
        observer.observe(card);
    });

} else {

    projectCards.forEach((card) => {
        card.classList.add("visible");
    });

}


// ==========================================
// DYNAMIC TEXT
// ==========================================

const words = [
    "Informatik.",
    "Technologie.",
    "Programmierung.",
    "Kreativität."
];

const dynamicText = document.getElementById("dynamic-text");

let currentIndex = 0;

if (dynamicText) {

    setInterval(() => {

        dynamicText.classList.add("fade");

        setTimeout(() => {

            currentIndex = (currentIndex + 1) % words.length;

            dynamicText.textContent = words[currentIndex];

            dynamicText.classList.remove("fade");

        }, 400);

    }, 2500);

}


// ==========================================
// CONTACT FORM - EMAILJS
// ==========================================
emailjs.init({
    publicKey: "3qUOXSf77BxsqjaLI"
});
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const websiteField = document.getElementById("website");

        // Honeypot protection
        if (websiteField && websiteField.value !== "") {
            return;
        }

        if (typeof emailjs === "undefined") {

            formStatus.textContent =
                "E-Mail-Dienst momentan nicht verfügbar.";

            return;
        }

        formStatus.textContent = "Nachricht wird gesendet...";

        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send(
            "service_cbwu036",
            "template_tvw5s13",
            templateParams
        )

        .then(() => {

            formStatus.textContent =
                "Nachricht erfolgreich gesendet!";

            contactForm.reset();

        })

        .catch((error) => {

            console.error("EmailJS Fehler:", error);

            formStatus.textContent =
                "Fehler beim Senden. Bitte versuche es erneut.";

        });

    });

}


// ==========================================
// COOKIE CONSENT - GOOGLE ANALYTICS
// ==========================================

const cookieBanner = document.getElementById("cookie-banner");

const acceptCookies = document.getElementById("accept-cookies");
const rejectCookies = document.getElementById("reject-cookies");

const GA_MEASUREMENT_ID = "G-02JWNYGVFS";


// Load Google Analytics only after consent

function activateGoogleAnalytics() {

    if (window.googleAnalyticsLoaded) {
        return;
    }

    window.googleAnalyticsLoaded = true;

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        window.dataLayer.push(arguments);
    }

    window.gtag = gtag;

    // Set consent before configuring Analytics
    gtag("consent", "default", {
        analytics_storage: "denied"
    });

    gtag("consent", "update", {
        analytics_storage: "granted"
    });

    gtag("js", new Date());

    gtag("config", GA_MEASUREMENT_ID);

    // Load Google tag
    const script = document.createElement("script");

    script.async = true;

    script.src =
        "https://www.googletagmanager.com/gtag/js?id=" +
        GA_MEASUREMENT_ID;

    document.head.appendChild(script);

}


// Hide cookie banner

function hideCookieBanner() {

    if (cookieBanner) {
        cookieBanner.hidden = true;
    }

}


// Show banner if no choice has been saved

const savedConsent = localStorage.getItem("aether_cookie_consent");

if (savedConsent === "accepted") {

    activateGoogleAnalytics();

} else if (savedConsent === "rejected") {

    // Analytics remains disabled

} else {

    if (cookieBanner) {
        cookieBanner.hidden = false;
    }

}


// ACCEPT COOKIES

if (acceptCookies) {

    acceptCookies.addEventListener("click", () => {

        localStorage.setItem("aether_cookie_consent", "accepted");

        activateGoogleAnalytics();

        hideCookieBanner();

    });

}


// REJECT COOKIES

if (rejectCookies) {

    rejectCookies.addEventListener("click", () => {

        localStorage.setItem("aether_cookie_consent", "rejected");

        hideCookieBanner();

    });

}
