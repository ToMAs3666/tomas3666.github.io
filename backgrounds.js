
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

let currentRenderer = null;
let currentAnimation = null;

function openBackgroundPreview(background, category) {

    const preview = document.getElementById("background-preview");
    const previewContent = document.getElementById("preview-content");
    const previewTitle = document.getElementById("preview-title");

    if (!preview || !previewContent || !previewTitle) return;

    // Limpiar escena anterior
    if (currentAnimation) {
        cancelAnimationFrame(currentAnimation);
        currentAnimation = null;
    }

    if (currentRenderer) {
        currentRenderer.dispose();
        currentRenderer = null;
    }

    previewContent.innerHTML = "";

    previewTitle.textContent = background.name;

    preview.classList.add("active");
    preview.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    if (typeof THREE === "undefined") {
        previewContent.textContent = "Three.js konnte nicht geladen werden.";
        return;
    }

    // ESCENA 3D
    const scene = new THREE.Scene();

    scene.background = new THREE.Color("#030711");

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.setSize(window.innerWidth, window.innerHeight);

    previewContent.appendChild(renderer.domElement);

    currentRenderer = renderer;

    // ILUMINACIÓN
    const light = new THREE.PointLight(
        new THREE.Color(background.color),
        3,
        30
    );

    light.position.set(0, 0, 4);

    scene.add(light);

    scene.add(
        new THREE.AmbientLight(0xffffff, 0.4)
    );

    // AETHER CORE
    const geometry = new THREE.IcosahedronGeometry(1.5, 2);

    const material = new THREE.MeshPhysicalMaterial({
        color: background.color,
        metalness: 0.6,
        roughness: 0.2,
        emissive: background.color,
        emissiveIntensity: 0.7,
        wireframe: background.id !== "15"
    });

    const core = new THREE.Mesh(geometry, material);

    scene.add(core);

    // PARTÍCULAS
    const particleGeometry = new THREE.BufferGeometry();

    const particleCount = 1200;

    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 18;
    }

    particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
        color: 0x8abaff,
        size: 0.035,
        transparent: true,
        opacity: 0.8
    });

    const particles = new THREE.Points(
        particleGeometry,
        particleMaterial
    );

    scene.add(particles);

    // ANIMACIÓN
    function animate() {

        currentAnimation = requestAnimationFrame(animate);

        core.rotation.x += 0.003;
        core.rotation.y += 0.006;

        particles.rotation.y += 0.0007;

        light.intensity = 2.5 + Math.sin(Date.now() * 0.002) * 0.7;

        renderer.render(scene, camera);

    }

    animate();

    // RESPONSIVE
    function resizeScene() {

        if (!currentRenderer) return;

        camera.aspect = window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }

    window.addEventListener("resize", resizeScene);

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


