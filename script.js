
// ==========================================
// AETHER - MAIN JAVASCRIPT
// ==========================================


// WELCOME MESSAGE

console.log("Willkommen auf meiner Website!");


// ==========================================
// FOOTER YEAR
// ==========================================

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

// Initialize EmailJS

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "3qUOXSf77BxsqjaLI"
    });

} else {

    console.error("EmailJS konnte nicht geladen werden.");

}


// Listen for form submissions in capture phase

document.addEventListener("submit", function (event) {

    const form = event.target;

    if (!form || form.id !== "contact-form") {
        return;
    }

    // Prevent page reload immediately

    event.preventDefault();
    event.stopPropagation();

    console.log("AETHER: Contact form submitted.");

    const formStatus = document.getElementById("form-status");

    const websiteField = document.getElementById("website");

    // Honeypot protection

    if (websiteField && websiteField.value !== "") {
        return;
    }

    // Check EmailJS

    if (typeof emailjs === "undefined") {

        if (formStatus) {
            formStatus.textContent =
                "E-Mail-Dienst momentan nicht verfügbar.";
        }

        return;
    }

    // Get form fields

    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');

    if (!name || !email || !message) {

        console.error("AETHER: Contact form fields are missing.");

        if (formStatus) {
            formStatus.textContent =
                "Formularfehler. Bitte versuche es erneut.";
        }

        return;
    }

    const submitButton = form.querySelector('[type="submit"]');

    if (submitButton) {
        submitButton.disabled = true;
    }

    if (formStatus) {
        formStatus.textContent = "Nachricht wird gesendet...";
    }

    const templateParams = {
        name: name.value,
        email: email.value,
        message: message.value
    };

    // Send email

    emailjs.send(
        "service_cbwu036",
        "template_tvw5s13",
        templateParams
    )

    .then(() => {

        console.log("AETHER: Email sent successfully.");

        if (formStatus) {
            formStatus.textContent =
                "Nachricht erfolgreich gesendet!";
        }

        form.reset();

    })

    .catch((error) => {

        console.error("AETHER EmailJS Fehler:", error);

        if (formStatus) {
            formStatus.textContent =
                "Fehler beim Senden. Bitte versuche es erneut.";
        }

    })

    .finally(() => {

        if (submitButton) {
            submitButton.disabled = false;
        }

    });

}, true);


// ==========================================
// COOKIE CONSENT - GOOGLE ANALYTICS
// ==========================================

const cookieBanner = document.getElementById("cookie-banner");

const acceptCookies = document.getElementById("accept-cookies");

const rejectCookies = document.getElementById("reject-cookies");

const GA_MEASUREMENT_ID = "G-02JWNYGVFS";


// Load Google Analytics

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

    gtag("consent", "default", {
        analytics_storage: "denied"
    });

    gtag("consent", "update", {
        analytics_storage: "granted"
    });

    gtag("js", new Date());

    gtag("config", GA_MEASUREMENT_ID);

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


// Read saved consent safely

let savedConsent = null;

try {

    savedConsent = localStorage.getItem("aether_cookie_consent");

} catch (error) {

    console.error("Cookie storage unavailable:", error);

}


// Apply saved consent

if (savedConsent === "accepted") {

    activateGoogleAnalytics();

} else if (savedConsent !== "rejected") {

    if (cookieBanner) {
        cookieBanner.hidden = false;
    }

}


// Accept cookies

if (acceptCookies) {

    acceptCookies.addEventListener("click", () => {

        try {
            localStorage.setItem("aether_cookie_consent", "accepted");
        } catch (error) {
            console.error(error);
        }

        activateGoogleAnalytics();

        hideCookieBanner();

    });

}


// Reject cookies

if (rejectCookies) {

    rejectCookies.addEventListener("click", () => {

        try {
            localStorage.setItem("aether_cookie_consent", "rejected");
        } catch (error) {
            console.error(error);
        }

        hideCookieBanner();

    });

}


// ==========================================
// END OF AETHER JAVASCRIPT
// ==========================================
