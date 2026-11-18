
/* ========================================
   AETHER BACKGROUND LAB
   BACKGROUND COLLECTION SYSTEM
======================================== */

const abstractBackgrounds = [
    {
        id: "15",
        name: "AETHER Core",
        description: "Ein futuristisches Energieportal mit leuchtenden Partikeln.",
        color: "#1769ff",
        favorite: true
    },
    {
        id: "14",
        name: "Glass Dimension",
        description: "Digitale Glasstrukturen und transparente 3D-Elemente.",
        color: "#49aaff",
        favorite: true
    },
    {
        id: "11",
        name: "Light Rays",
        description: "Dynamische Lichtstrahlen und volumetrische Beleuchtung.",
        color: "#236bff",
        favorite: true
    },
    {
        id: "12",
        name: "Digital Terrain",
        description: "Eine digitale Landschaft mit beweglichen 3D-Wellen.",
        color: "#087fbd",
        favorite: true
    },
    {
        id: "09",
        name: "Liquid Motion",
        description: "Flüssige Formen und dynamische Farbverläufe.",
        color: "#a04bff",
        favorite: true
    },
    {
        id: "10",
        name: "Orbit",
        description: "Leuchtende Planeten und rotierende Umlaufbahnen.",
        color: "#397bff",
        favorite: true
    },
    {
        id: "07",
        name: "Geometry",
        description: "Abstrakte geometrische Formen in einer 3D-Umgebung.",
        color: "#00a6c9",
        favorite: true
    },
    {
        id: "05",
        name: "Holo Grid",
        description: "Ein futuristisches holografisches Gitternetz.",
        color: "#327bff",
        favorite: true
    },
    {
        id: "01",
        name: "Blue Aura",
        description: "Atmosphärische blaue Lichter und sanfte Farbverläufe.",
        color: "#1455ff",
        favorite: true
    },
    {
        id: "02",
        name: "Cyber Circuits",
        description: "Leuchtende digitale Schaltkreise.",
        color: "#00a6ff"
    },
    {
        id: "03",
        name: "Deep Waves",
        description: "Abstrakte Wellen und digitale Tiefen.",
        color: "#145de0"
    },
    {
        id: "04",
        name: "Particle Space",
        description: "Schwebende Partikel in einem digitalen Universum.",
        color: "#8b5cff"
    },
    {
        id: "06",
        name: "Energy Flow",
        description: "Leuchtende Energiebänder in Bewegung.",
        color: "#008cff"
    },
    {
        id: "08",
        name: "Digital Rain",
        description: "Ein futuristischer digitaler Regen.",
        color: "#00b8a9"
    },
    {
        id: "13",
        name: "Neural Network",
        description: "Ein Netzwerk aus digitalen Verbindungen.",
        color: "#526fff"
    }
];


/* AUTOMOTIVE COLLECTION */

const automotiveBackgrounds = [
    {
        id: "auto-01",
        name: "Neon Garage",
        description: "Ein Sportwagen in einer futuristischen Neon-Garage.",
        color: "#087cff"
    },
    {
        id: "auto-02",
        name: "Night Drive",
        description: "Eine nächtliche Fahrt durch eine beleuchtete Stadt.",
        color: "#2761ff"
    },
    {
        id: "auto-03",
        name: "Hyper Tunnel",
        description: "Ein Hypercar in einem futuristischen Lichttunnel.",
        color: "#00a6d9"
    },
    {
        id: "auto-04",
        name: "Dark Showroom",
        description: "Eine luxuriöse Fahrzeugpräsentation.",
        color: "#687fff"
    },
    {
        id: "auto-05",
        name: "Mountain Run",
        description: "Eine kurvenreiche Bergstrasse bei Sonnenaufgang.",
        color: "#e18a42"
    },
    {
        id: "auto-06",
        name: "Engine Core",
        description: "Mechanische Details und eine futuristische Motorwelt.",
        color: "#ff663c"
    },
    {
        id: "auto-07",
        name: "Future Machine",
        description: "Ein futuristisches Konzeptfahrzeug.",
        color: "#00b6c9"
    },
    {
        id: "auto-08",
        name: "Sunset Drive",
        description: "Ein Sportwagen auf einer Strasse im Abendlicht.",
        color: "#e58b45"
    },
    {
        id: "auto-09",
        name: "Carbon Vision",
        description: "Carbon-Details und dramatische Fahrzeugbeleuchtung.",
        color: "#397bff"
    }
];


/* ========================================
   CREATE BACKGROUND CARDS
======================================== */

function createBackgroundCard(background, category) {

    const card = document.createElement("article");

    card.className = "background-card";

    card.innerHTML = `
        <div
            class="background-thumbnail"
            style="--scene-color: ${background.color}"
        >
            <span class="background-number">
                ${background.id.toUpperCase()}
            </span>
        </div>

        <span class="background-category">
            ${category}
        </span>

        <h3>${background.name}</h3>

        <p>${background.description}</p>

        <div class="background-card-content">

            <div class="background-actions">

                <button
                    class="preview-button"
                    type="button"
                >
                    Preview
                </button>

                <button
                    type="button"
                    disabled
                    title="Download wird später verfügbar sein"
                >
                    Download bald
                </button>

            </div>

        </div>
    `;

    const previewButton = card.querySelector(".preview-button");

    previewButton.addEventListener("click", () => {
        openBackgroundPreview(background, category);
    });

    return card;
}


/* ========================================
   LOAD COLLECTIONS
======================================== */

function loadBackgroundCollections() {

    const abstractGrid = document.getElementById("abstract-grid");
    const automotiveGrid = document.getElementById("automotive-grid");

    if (!abstractGrid || !automotiveGrid) return;

    abstractGrid.innerHTML = "";
    automotiveGrid.innerHTML = "";

    abstractBackgrounds.forEach(background => {

        const card = createBackgroundCard(
            background,
            "ABSTRACT COLLECTION"
        );

        abstractGrid.appendChild(card);

    });

    automotiveBackgrounds.forEach(background => {

        const card = createBackgroundCard(
            background,
            "AUTOMOTIVE COLLECTION"
        );

        automotiveGrid.appendChild(card);

    });

}


/* ========================================
   FULLSCREEN PREVIEW
======================================== */

function openBackgroundPreview(background, category) {

    const preview = document.getElementById("background-preview");
    const previewContent = document.getElementById("preview-content");
    const previewTitle = document.getElementById("preview-title");

    if (!preview || !previewContent || !previewTitle) return;

    previewContent.innerHTML = "";

    const scene = document.createElement("div");

    scene.className = "preview-scene";

    scene.style.setProperty("--scene-color", background.color);

    const orbit = document.createElement("div");
    orbit.className = "preview-orbit";

    const core = document.createElement("div");
    core.className = "preview-core";

    scene.appendChild(orbit);
    scene.appendChild(core);

    previewContent.appendChild(scene);

    previewTitle.textContent = background.name;

    preview.classList.add("active");

    preview.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}


/* ========================================
   CLOSE PREVIEW
======================================== */

function closeBackgroundPreview() {

    const preview = document.getElementById("background-preview");

    if (!preview) return;

    preview.classList.remove("active");

    preview.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


/* ========================================
   EVENT LISTENERS
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadBackgroundCollections();

    const closeButton = document.getElementById("close-preview");

    if (closeButton) {
        closeButton.addEventListener("click", closeBackgroundPreview);
    }

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeBackgroundPreview();
        }

    });

});


/* BACKGROUND LAB - PREVIEW EFFECTS */

.background-number {
    position: absolute;
    top: 15px;
    left: 18px;
    z-index: 2;
    color: rgba(255,255,255,0.65);
    font-size: 12px;
    letter-spacing: 2px;
}

.background-thumbnail {
    background:
        radial-gradient(
            circle at 50% 50%,
            var(--scene-color),
            transparent 60%
        ),
        linear-gradient(135deg, #101c35, #080b12);
    background-size: 200% 200%;
    animation: sceneMovement 10s ease-in-out infinite alternate;
}

@keyframes sceneMovement {
    from {
        background-position: 0% 50%;
    }
    to {
        background-position: 100% 50%;
    }
}

/* FULLSCREEN SCENE */

.preview-scene {
    position: absolute;
    inset: 0;
    overflow: hidden;
    background:
        radial-gradient(
            circle at 50% 50%,
            var(--scene-color),
            transparent 35%
        ),
        radial-gradient(
            circle at 20% 80%,
            rgba(20, 80, 180, 0.25),
            transparent 40%
        ),
        #050810;
    animation: previewAtmosphere 8s ease-in-out infinite alternate;
}

.preview-orbit {
    position: absolute;
    width: min(65vw, 650px);
    aspect-ratio: 1;
    border: 1px solid rgba(100,160,255,0.55);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow:
        0 0 50px rgba(50,120,255,0.2),
        inset 0 0 50px rgba(50,120,255,0.15);
    animation: previewOrbit 18s linear infinite;
}

.preview-core {
    position: absolute;
    width: 160px;
    height: 160px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: var(--scene-color);
    opacity: 0.25;
    filter: blur(65px);
    animation: previewPulse 4s ease-in-out infinite alternate;
}

@keyframes previewAtmosphere {
    from {
        transform: scale(1);
        filter: hue-rotate(0deg);
    }
    to {
        transform: scale(1.12);
        filter: hue-rotate(25deg);
    }
}

@keyframes previewOrbit {
    from {
        transform: translate(-50%, -50%) rotate(0deg) scale(0.8);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg) scale(1.15);
    }
}

@keyframes previewPulse {
    from {
        opacity: 0.15;
        scale: 0.8;
    }
    to {
        opacity: 0.65;
        scale: 1.6;
    }
}

@media (max-width: 600px) {
    .preview-orbit {
        width: 85vw;
    }

    .preview-core {
        width: 100px;
        height: 100px;
    }
}
