
// Begrüssung in der Konsole

console.log("Willkommen auf meiner Website!");

// Aktuelles Jahr im Footer anzeigen

const footer = document.querySelector("footer p");

footer.textContent =
    `© ${new Date().getFullYear()} Tomás. Alle Rechte vorbehalten.`;

// PROJECT ANIMATION

const projectCards = document.querySelectorAll(".project-card");

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
    observer.observe(card);// BEGRÜSSUNG IN DER KONSOLE

console.log("Willkommen auf meiner Website!");


// AKTUELLES JAHR IM FOOTER

const footer = document.querySelector("footer p");

if (footer) {

    footer.textContent =
        `© ${new Date().getFullYear()} Tomás. Alle Rechte vorbehalten.`;

}


// PROJECT ANIMATION

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


// DYNAMIC TEXT

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

} else {

    console.error("Element dynamic-text wurde nicht gefunden!");

}


// CONTACT FORM

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();
        const websiteField = document.getElementById("website");

if (websiteField && websiteField.value !== "") {
    return;
}

        formStatus.textContent =
            "Das Formular ist noch nicht mit einem E-Mail-Dienst verbunden.";

    });

}
});// CONTACT FORM - EMAILJS

emailjs.init({
    publicKey: "3qUOXSf77BxsqjaLI"
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

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
    console.log("Status:", error.status);
    console.log("Text:", error.text);

    formStatus.textContent =
        "Fehler beim Senden. Bitte versuche es erneut.";

});

    });

}

// DYNAMIC TEXT

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

} else {
    console.error("Element dynamic-text wurde nicht gefunden!");
}
