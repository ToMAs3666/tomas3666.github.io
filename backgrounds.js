
/* ========================================
   AETHER BACKGROUND LAB
   24 UNIQUE 3D BACKGROUNDS
======================================== */

const abstractBackgrounds = [
    { id:"15", name:"AETHER Core", description:"Ein futuristisches Energieportal mit leuchtenden Partikeln.", color:"#1769ff", favorite:true },
    { id:"14", name:"Glass Dimension", description:"Digitale Glasstrukturen und transparente 3D-Elemente.", color:"#49aaff", favorite:true },
    { id:"11", name:"Light Rays", description:"Dynamische Lichtstrahlen und volumetrische Beleuchtung.", color:"#236bff", favorite:true },
    { id:"12", name:"Digital Terrain", description:"Eine digitale Landschaft mit beweglichen 3D-Wellen.", color:"#087fbd", favorite:true },
    { id:"09", name:"Liquid Motion", description:"Flüssige Formen und dynamische Farbverläufe.", color:"#a04bff", favorite:true },
    { id:"10", name:"Orbit", description:"Leuchtende Planeten und rotierende Umlaufbahnen.", color:"#397bff", favorite:true },
    { id:"07", name:"Geometry", description:"Abstrakte geometrische Formen in einer 3D-Umgebung.", color:"#00a6c9", favorite:true },
    { id:"05", name:"Holo Grid", description:"Ein futuristisches holografisches Gitternetz.", color:"#327bff", favorite:true },
    { id:"01", name:"Blue Aura", description:"Atmosphärische blaue Lichter und sanfte Farbverläufe.", color:"#1455ff", favorite:true },
    { id:"02", name:"Cyber Circuits", description:"Leuchtende digitale Schaltkreise.", color:"#00a6ff" },
    { id:"03", name:"Deep Waves", description:"Abstrakte Wellen und digitale Tiefen.", color:"#145de0" },
    { id:"04", name:"Particle Space", description:"Schwebende Partikel in einem digitalen Universum.", color:"#8b5cff" },
    { id:"06", name:"Energy Flow", description:"Leuchtende Energiebänder in Bewegung.", color:"#008cff" },
    { id:"08", name:"Digital Rain", description:"Ein futuristischer digitaler Regen.", color:"#00b8a9" },
    { id:"13", name:"Neural Network", description:"Ein Netzwerk aus digitalen Verbindungen.", color:"#526fff" }
];

const automotiveBackgrounds = [
    { id:"auto-01", name:"Neon Garage", description:"Ein Sportwagen in einer futuristischen Neon-Garage.", color:"#087cff" },
    { id:"auto-02", name:"Night Drive", description:"Eine nächtliche Fahrt durch eine beleuchtete Stadt.", color:"#2761ff" },
    { id:"auto-03", name:"Hyper Tunnel", description:"Ein Hypercar in einem futuristischen Lichttunnel.", color:"#00a6d9" },
    { id:"auto-04", name:"Dark Showroom", description:"Eine luxuriöse Fahrzeugpräsentation.", color:"#687fff" },
    { id:"auto-05", name:"Mountain Run", description:"Eine kurvenreiche Bergstrasse bei Sonnenaufgang.", color:"#e18a42" },
    { id:"auto-06", name:"Engine Core", description:"Mechanische Details und eine futuristische Motorwelt.", color:"#ff663c" },
    { id:"auto-07", name:"Future Machine", description:"Ein futuristisches Konzeptfahrzeug.", color:"#00b6c9" },
    { id:"auto-08", name:"Sunset Drive", description:"Ein Sportwagen auf einer Strasse im Abendlicht.", color:"#e58b45" },
    { id:"auto-09", name:"Carbon Vision", description:"Carbon-Details und dramatische Fahrzeugbeleuchtung.", color:"#397bff" }
];


/* ========================================
   COLLECTIONS
======================================== */

function createBackgroundCard(background, category) {
    const card = document.createElement("article");
    card.className = "background-card";

    card.innerHTML = `
        <div class="background-thumbnail"
             style="--scene-color:${background.color}">
            <span class="background-number">${background.id.toUpperCase()}</span>
        </div>
        <span class="background-category">${category}</span>
        <h3>${background.name}</h3>
        <p>${background.description}</p>
        <div class="background-card-content">
            <div class="background-actions">
                <button class="preview-button" type="button">Preview</button>
                <button type="button" disabled>Download bald</button>
            </div>
        </div>
    `;

    card.querySelector(".preview-button").addEventListener("click", () => {
        openBackgroundPreview(background, category);
    });

    return card;
}

function loadBackgroundCollections() {
    const abstractGrid = document.getElementById("abstract-grid");
    const automotiveGrid = document.getElementById("automotive-grid");

function createAetherCar(color = 0x1769ff) {
    const car = new THREE.Group();

    const bodyMat = new THREE.MeshPhysicalMaterial({
        color,
        metalness: 0.85,
        roughness: 0.19,
        clearcoat: 1,
        clearcoatRoughness: 0.08
    });

    const darkMat = new THREE.MeshPhysicalMaterial({
        color: 0x080d16,
        metalness: 0.65,
        roughness: 0.16
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x071a30,
        metalness: 0.45,
        roughness: 0.08,
        transparent: true,
        opacity: 0.88
    });

    const rubberMat = new THREE.MeshStandardMaterial({
        color: 0x08090c,
        roughness: 0.85
    });

    const metalMat = new THREE.MeshStandardMaterial({
        color: 0x9aafc5,
        metalness: 1,
        roughness: 0.2
    });

    function part(geometry, material, x, y, z) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        car.add(mesh);
        return mesh;
    }

    // Carrocería principal
    part(new THREE.BoxGeometry(2.5, 0.48, 5.1), bodyMat, 0, 0.65, 0);

    // Capó y parte trasera
    part(new THREE.BoxGeometry(2.35, 0.2, 1.35), bodyMat, 0, 0.94, -1.55);
    part(new THREE.BoxGeometry(2.3, 0.25, 1.05), bodyMat, 0, 0.9, 1.85);

    // Techo deportivo
    const roof = part(
        new THREE.BoxGeometry(1.8, 0.65, 2.15),
        bodyMat,
        0, 1.25, 0.05
    );
    roof.scale.set(1, 0.85, 1);

    // Cristales
    part(new THREE.BoxGeometry(1.68, 0.48, 1.9), glassMat, 0, 1.29, 0.05);

    // Alerón
    part(new THREE.BoxGeometry(2.15, 0.09, 0.35), darkMat, 0, 1.25, 2.25);
    part(new THREE.BoxGeometry(0.12, 0.38, 0.12), metalMat, -0.75, 1.08, 2.15);
    part(new THREE.BoxGeometry(0.12, 0.38, 0.12), metalMat, 0.75, 1.08, 2.15);

    // Ruedas
    const wheels = [];

    for (const x of [-1.2, 1.2]) {
        for (const z of [-1.65, 1.65]) {
            const wheel = new THREE.Group();
            wheel.position.set(x, 0.48, z);

            const tire = new THREE.Mesh(
                new THREE.CylinderGeometry(0.48, 0.48, 0.25, 40),
                rubberMat
            );
            tire.rotation.z = Math.PI / 2;
            wheel.add(tire);

            const rim = new THREE.Mesh(
                new THREE.CylinderGeometry(0.27, 0.27, 0.27, 32),
                metalMat
            );
            rim.rotation.z = Math.PI / 2;
            wheel.add(rim);

            const hub = new THREE.Mesh(
                new THREE.CylinderGeometry(0.09, 0.09, 0.29, 24),
                bodyMat
            );
            hub.rotation.z = Math.PI / 2;
            wheel.add(hub);

            car.add(wheel);
            wheels.push(wheel);
        }
    }

    // Faros delanteros
    for (const x of [-0.85, 0.85]) {
        const headlight = part(
            new THREE.BoxGeometry(0.55, 0.12, 0.08),
            new THREE.MeshBasicMaterial({ color: 0xbceaff }),
            x, 0.75, -2.57
        );

        const glow = new THREE.PointLight(0x83caff, 5, 5);
        glow.position.set(x, 0.8, -2.8);
        car.add(glow);
    }

    // Luces traseras
    for (const x of [-0.85, 0.85]) {
        part(
            new THREE.BoxGeometry(0.55, 0.1, 0.08),
            new THREE.MeshBasicMaterial({ color: 0xff193d }),
            x, 0.78, 2.58
        );
    }

    // Detalles laterales
    for (const x of [-1.26, 1.26]) {
        part(
            new THREE.BoxGeometry(0.06, 0.09, 2.2),
            metalMat,
            x, 0.55, 0
        );
    }

    return { group: car, wheels };
}

    if (!abstractGrid || !automotiveGrid) return;

    abstractGrid.innerHTML = "";
    automotiveGrid.innerHTML = "";

    abstractBackgrounds.forEach(bg =>
        abstractGrid.appendChild(createBackgroundCard(bg, "ABSTRACT COLLECTION"))
    );

    automotiveBackgrounds.forEach(bg =>
        automotiveGrid.appendChild(createBackgroundCard(bg, "AUTOMOTIVE COLLECTION"))
    );
}


/* ========================================
   3D ENGINE
======================================== */

let currentRenderer = null;
let currentAnimation = null;
let currentResize = null;
let currentScene = null;
let currentObjects = [];

const random = (min, max) => Math.random() * (max - min) + min;

function addMesh(scene, geometry, color, options = {}) {
    const material = new THREE.MeshStandardMaterial({
        color,
        metalness: options.metalness ?? 0.65,
        roughness: options.roughness ?? 0.3,
        emissive: color,
        emissiveIntensity: options.glow ?? 0.2,
        transparent: options.transparent ?? false,
        opacity: options.opacity ?? 1,
        wireframe: options.wireframe ?? false
    });

    const mesh = new THREE.Mesh(geometry, material);

    if (options.position) mesh.position.set(...options.position);
    if (options.scale) mesh.scale.set(...options.scale);

    scene.add(mesh);
    currentObjects.push(mesh);

    return mesh;
}

function addParticles(scene, color, count = 700, spread = 17) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        positions[i * 3] = random(-spread, spread);
        positions[i * 3 + 1] = random(-spread, spread);
        positions[i * 3 + 2] = random(-spread, spread);
    }

    geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
        color,
        size: 0.045,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    currentObjects.push(particles);

    return particles;
}

function addRing(scene, color, radius, tube, position = [0, 0, 0]) {
    const ring = addMesh(
        scene,
        new THREE.TorusGeometry(radius, tube, 12, 120),
        color,
        { glow: 1, metalness: 0.5 }
    );

    ring.position.set(...position);
    return ring;
}

function addLine(scene, points, color, radius = 0.025) {
    const curve = new THREE.CatmullRomCurve3(
        points.map(p => new THREE.Vector3(...p))
    );

    return addMesh(
        scene,
        new THREE.TubeGeometry(curve, 80, radius, 6, false),
        color,
        { glow: 1 }
    );
}


/* ========================================
   AUTOMOTIVE MODEL
======================================== */

function createCar(scene, color, futuristic = false) {
    const car = new THREE.Group();

    const bodyMaterial = new THREE.MeshStandardMaterial({
        color,
        metalness: 0.9,
        roughness: 0.2,
        emissive: color,
        emissiveIntensity: 0.12
    });

    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.4, 0.55, 1.5),
        bodyMaterial
    );

    body.position.y = 0;
    car.add(body);

    const cabin = new THREE.Mesh(
        new THREE.BoxGeometry(1.7, 0.65, 1.2),
        new THREE.MeshPhysicalMaterial({
            color: 0x102b48,
            metalness: 0.8,
            roughness: 0.12,
            transparent: true,
            opacity: 0.85
        })
    );

    cabin.position.set(-0.15, 0.55, 0);
    car.add(cabin);

    const wheels = [];

    for (const x of [-1.1, 1.1]) {
        for (const z of [-0.78, 0.78]) {
            const wheel = new THREE.Mesh(
                new THREE.CylinderGeometry(0.38, 0.38, 0.2, 32),
                new THREE.MeshStandardMaterial({
                    color: 0x101318,
                    metalness: 0.7,
                    roughness: 0.5
                })
            );

            wheel.rotation.x = Math.PI / 2;
            wheel.position.set(x, -0.25, z);
            car.add(wheel);
            wheels.push(wheel);
        }
    }

    const spoiler = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.08, 1.8),
        bodyMaterial
    );

    spoiler.position.set(-1.55, 0.55, 0);
    car.add(spoiler);

    if (futuristic) {
        const glow = new THREE.PointLight(color, 4, 7);
        glow.position.set(0, -0.4, 0);
        car.add(glow);
    }

    car.position.y = -0.5;
    car.rotation.y = -0.3;

    scene.add(car);
    currentObjects.push(car);

    return { car, wheels };
}


/* ========================================
   SCENE GENERATOR
======================================== */

function createUniqueScene(scene, bg) {
    const color = new THREE.Color(bg.color);
    const id = bg.id;

    const blue = 0x1688ff;
    const cyan = 0x00eaff;
    const purple = 0x9b55ff;
    const white = 0xc8eaff;

  
// 15 — AETHER CORE
if (id === "15") {

    // Núcleo geométrico
    const core = addMesh(
        scene,
        new THREE.IcosahedronGeometry(1.25, 2),
        0x087bff,
        {
            glow: 0.8,
            wireframe: true,
            metalness: 0.8,
            roughness: 0.2
        }
    );

    // Núcleo energético azul
    const inner = addMesh(
        scene,
        new THREE.SphereGeometry(0.48, 48, 48),
        0x087bff,
        {
            glow: 0.65,
            metalness: 0.35,
            roughness: 0.2
        }
    );

    // Aura interior
    const aura = addMesh(
        scene,
        new THREE.SphereGeometry(0.85, 48, 48),
        0x0066ff,
        {
            transparent: true,
            opacity: 0.12,
            glow: 1
        }
    );

    // Anillos orbitales
    const ring1 = addRing(scene, 0x1688ff, 1.9, 0.018);
    const ring2 = addRing(scene, 0x00eaff, 2.35, 0.025);
    const ring3 = addRing(scene, 0x9b55ff, 2.8, 0.012);

    ring1.rotation.set(0.4, 0.2, 0);
    ring2.rotation.set(1.1, 0.5, 0.3);
    ring3.rotation.set(0.8, 1.2, 0.2);

    // Partículas energéticas
    addParticles(scene, 0x69caff, 1000, 12);

    // Animación independiente
    currentObjects.push({
        update: t => {
            core.rotation.y = t * 0.18;
            core.rotation.x = t * 0.08;

            inner.rotation.y = -t * 0.3;

            aura.scale.setScalar(
                1 + Math.sin(t * 2) * 0.035
            );

            ring1.rotation.z = t * 0.12;
            ring2.rotation.y = t * 0.16;
            ring3.rotation.x = 0.8 + t * 0.1;
        }
    });
}


   
   
// ========================================
// 15 — AETHER CORE
// ========================================
if (id === "15") {

    const coreGroup = new THREE.Group();

    const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.25, 2),
        new THREE.MeshStandardMaterial({
            color: 0x087bff,
            metalness: 0.8,
            roughness: 0.15,
            emissive: 0x0055ff,
            emissiveIntensity: 1.1,
            wireframe: true
        })
    );

    coreGroup.add(core);

    const innerCore = new THREE.Mesh(
        new THREE.SphereGeometry(0.48, 48, 48),
        new THREE.MeshBasicMaterial({
            color: 0x1688ff
        })
    );

    coreGroup.add(innerCore);

    const aura = new THREE.Mesh(
        new THREE.SphereGeometry(0.85, 48, 48),
        new THREE.MeshBasicMaterial({
            color: 0x00dfff,
            transparent: true,
            opacity: 0.12
        })
    );

    coreGroup.add(aura);

    const rings = [];

    const ringColors = [0x1688ff, 0x00dfff, 0x7545ff];

    for (let i = 0; i < 3; i++) {
        const ring = new THREE.Mesh(
            new THREE.TorusGeometry(1.8 + i * 0.35, 0.018, 8, 140),
            new THREE.MeshBasicMaterial({
                color: ringColors[i],
                transparent: true,
                opacity: 0.8
            })
        );

        ring.rotation.x = Math.PI / 2 + i * 0.45;
        ring.rotation.y = i * 0.5;

        coreGroup.add(ring);
        rings.push(ring);
    }

    scene.add(coreGroup);

    const light = new THREE.PointLight(0x087bff, 100, 20);
    light.position.set(0, 1, 3);
    scene.add(light);

    addParticles(scene, 0x1688ff, 1000, 16);

    currentObjects.push({
        update: t => {
            core.rotation.x = t * 0.18;
            core.rotation.y = t * 0.25;
            innerCore.rotation.y = -t * 0.5;
            aura.scale.setScalar(1 + Math.sin(t * 1.5) * 0.1);

            rings.forEach((ring, i) => {
                ring.rotation.z = t * (0.12 + i * 0.04);
            });
        }
    });
}


// ========================================
// 14 — GLASS DIMENSION
// ========================================
else if (id === "14") {

    const glassGroup = new THREE.Group();

    const crystalGeometries = [
        new THREE.OctahedronGeometry(1, 0),
        new THREE.IcosahedronGeometry(0.9, 0),
        new THREE.DodecahedronGeometry(0.85, 0),
        new THREE.TetrahedronGeometry(1, 0),
        new THREE.OctahedronGeometry(0.75, 1),
        new THREE.IcosahedronGeometry(0.7, 1)
    ];

    const crystals = [];

    for (let i = 0; i < 6; i++) {
        const crystal = new THREE.Mesh(
            crystalGeometries[i],
            new THREE.MeshPhysicalMaterial({
                color: i % 2 ? 0x00dfff : 0x1688ff,
                metalness: 0.15,
                roughness: 0.04,
                transmission: 0.75,
                thickness: 1.2,
                transparent: true,
                opacity: 0.8,
                clearcoat: 1
            })
        );

        crystal.position.set(
            random(-4, 4),
            random(-2.5, 2.5),
            random(-3, 2)
        );

        crystal.scale.setScalar(random(0.5, 1.15));

        glassGroup.add(crystal);

        const edges = new THREE.LineSegments(
            new THREE.EdgesGeometry(crystal.geometry),
            new THREE.LineBasicMaterial({
                color: 0x8deaff,
                transparent: true,
                opacity: 0.65
            })
        );

        crystal.add(edges);

        crystals.push({
            mesh: crystal,
            speed: random(0.15, 0.4),
            offset: random(0, Math.PI * 2),
            baseY: crystal.position.y
        });
    }

    // Transparente Glasplatten
    for (let i = 0; i < 5; i++) {
        const panel = new THREE.Mesh(
            new THREE.BoxGeometry(2.8, 3.8, 0.035),
            new THREE.MeshPhysicalMaterial({
                color: 0x1688ff,
                metalness: 0.1,
                roughness: 0.08,
                transmission: 0.65,
                transparent: true,
                opacity: 0.22,
                side: THREE.DoubleSide
            })
        );

        panel.position.set(
            random(-5, 5),
            random(-2, 2),
            random(-4, 1)
        );

        panel.rotation.y = random(-0.7, 0.7);
        glassGroup.add(panel);
    }

    scene.add(glassGroup);

    const blueLight = new THREE.PointLight(0x1688ff, 80, 20);
    blueLight.position.set(-4, 3, 4);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00dfff, 60, 20);
    cyanLight.position.set(4, -2, 3);
    scene.add(cyanLight);

    addParticles(scene, 0x9bdcff, 650, 14);

    currentObjects.push({
        update: t => {
            glassGroup.rotation.y = t * 0.06;

            crystals.forEach(c => {
                c.mesh.rotation.x = t * c.speed;
                c.mesh.rotation.y = t * c.speed * 0.8;
                c.mesh.position.y =
                    c.baseY + Math.sin(t + c.offset) * 0.25;
            });
        }
    });
}


// ========================================
// 11 — LIGHT RAYS
// ========================================
else if (id === "11") {

    for (let i = 0; i < 18; i++) {
        const ray = new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.015,
                random(0.12, 0.3),
                random(7, 12),
                12, 1, true
            ),
            new THREE.MeshBasicMaterial({
                color: i % 2 ? 0x1688ff : 0x00dfff,
                transparent: true,
                opacity: random(0.08, 0.2),
                side: THREE.DoubleSide,
                depthWrite: false
            })
        );

        ray.position.set(
            random(-7, 7),
            random(-1, 2),
            random(-5, 1)
        );

        ray.rotation.z = random(-0.5, 0.5);
        ray.rotation.x = random(-0.3, 0.3);

        scene.add(ray);

        currentObjects.push({
            update: t => {
                ray.rotation.z += 0.0005;
                ray.material.opacity =
                    0.1 + Math.sin(t * 1.2 + i) * 0.06;
            }
        });
    }

    const centralLight = new THREE.PointLight(0x1688ff, 45, 20);
    centralLight.position.set(0, 2, 1);
    scene.add(centralLight);

    const glow = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        new THREE.MeshBasicMaterial({
            color: 0x1688ff,
            transparent: true,
            opacity: 0.12
        })
    );

    glow.position.set(0, 1, -3);
    scene.add(glow);

    currentObjects.push({
        update: t => {
            glow.scale.setScalar(1 + Math.sin(t * 1.5) * 0.15);
        }
    });

    addParticles(scene, 0x9bdcff, 900, 13);
}


// ========================================
// 12 — DIGITAL TERRAIN
// ========================================
else if (id === "12") {

    const terrainGroup = new THREE.Group();

    const geometry = new THREE.PlaneGeometry(18, 12, 100, 80);
    const positions = geometry.attributes.position;
    const basePositions = positions.array.slice();

    const material = new THREE.MeshBasicMaterial({
        color: 0x087bff,
        wireframe: true,
        transparent: true,
        opacity: 0.55
    });

    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI / 2.7;
    terrain.position.y = -1.8;

    terrainGroup.add(terrain);

    const secondTerrain = terrain.clone();
    secondTerrain.scale.set(1.15, 1, 1.15);
    secondTerrain.position.y = -2.1;
    secondTerrain.material = material.clone();
    secondTerrain.material.color.set(0x00dfff);
    secondTerrain.material.opacity = 0.18;

    terrainGroup.add(secondTerrain);
    scene.add(terrainGroup);

    currentObjects.push({
        update: t => {
            for (let i = 0; i < positions.count; i++) {
                const x = basePositions[i * 3];
                const y = basePositions[i * 3 + 1];

                const wave =
                    Math.sin(x * 0.8 + t * 1.2) * 0.35 +
                    Math.cos(y * 1.1 + t) * 0.22 +
                    Math.sin((x + y) * 0.45 - t) * 0.2;

                positions.setZ(i, basePositions[i * 3 + 2] + wave);
            }

            positions.needsUpdate = true;
            geometry.computeVertexNormals();
            terrainGroup.rotation.y = Math.sin(t * 0.15) * 0.08;
        }
    });

    addParticles(scene, 0x1688ff, 500, 15);

    const horizonLight = new THREE.PointLight(0x087bff, 35, 18);
    horizonLight.position.set(0, 3, -4);
    scene.add(horizonLight);
}


// ========================================
// 09 — LIQUID MOTION
// ========================================
else if (id === "09") {

    const liquidGroup = new THREE.Group();

    const colors = [0x087bff, 0x00dfff, 0x6040ff, 0x1688ff];

    for (let i = 0; i < 4; i++) {
        const geometry = new THREE.TorusKnotGeometry(
            random(0.9, 1.5),
            random(0.12, 0.22),
            180, 24,
            random(2, 5),
            random(3, 7)
        );

        const material = new THREE.MeshPhysicalMaterial({
            color: colors[i],
            metalness: 0.85,
            roughness: 0.12,
            clearcoat: 1,
            clearcoatRoughness: 0.05,
            transparent: true,
            opacity: 0.78
        });

        const liquid = new THREE.Mesh(geometry, material);

        liquid.position.set(
            random(-2.5, 2.5),
            random(-1.5, 1.5),
            random(-2, 1)
        );

        liquid.scale.setScalar(random(0.65, 1.1));
        liquidGroup.add(liquid);

        liquid.userData.speed = random(0.15, 0.4);
        liquid.userData.offset = random(0, Math.PI * 2);
    }

    scene.add(liquidGroup);

    const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.75, 48, 48),
        new THREE.MeshBasicMaterial({
            color: 0x087bff,
            transparent: true,
            opacity: 0.12
        })
    );

    scene.add(core);

    const blueLight = new THREE.PointLight(0x087bff, 55, 18);
    blueLight.position.set(-3, 3, 3);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00dfff, 40, 18);
    cyanLight.position.set(3, -2, 2);
    scene.add(cyanLight);

    currentObjects.push({
        update: t => {
            liquidGroup.rotation.y = t * 0.12;
            liquidGroup.rotation.x = Math.sin(t * 0.25) * 0.12;

            liquidGroup.children.forEach(liquid => {
                const speed = liquid.userData.speed;
                const offset = liquid.userData.offset;

                liquid.rotation.x = t * speed + offset;
                liquid.rotation.z = Math.sin(t * 0.35 + offset) * 0.4;
            });

            core.scale.setScalar(1 + Math.sin(t * 1.3) * 0.12);
        }
    });

    addParticles(scene, 0x55cfff, 450, 12);
}


// ========================================
// 10 — ORBIT
// ========================================
else if (id === "10") {

    const orbitGroup = new THREE.Group();

    const planet = new THREE.Mesh(
        new THREE.SphereGeometry(1.25, 64, 64),
        new THREE.MeshPhysicalMaterial({
            color: 0x0755c9,
            metalness: 0.65,
            roughness: 0.25,
            clearcoat: 1,
            emissive: 0x031b55,
            emissiveIntensity: 0.7
        })
    );

    orbitGroup.add(planet);

    const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(1.34, 48, 48),
        new THREE.MeshBasicMaterial({
            color: 0x1688ff,
            transparent: true,
            opacity: 0.16,
            side: THREE.BackSide
        })
    );

    orbitGroup.add(atmosphere);

    const ringColors = [0x1688ff, 0x00dfff, 0x7545ff];
    const rings = [];

    for (let i = 0; i < 3; i++) {
        const ring = new THREE.Mesh(
            new THREE.TorusGeometry(2.1 + i * 0.35, 0.018, 8, 180),
            new THREE.MeshBasicMaterial({
                color: ringColors[i],
                transparent: true,
                opacity: 0.75
            })
        );

        ring.rotation.x = Math.PI / 2.5 + i * 0.25;
        ring.rotation.y = i * 0.6;

        orbitGroup.add(ring);
        rings.push(ring);
    }

    const satellites = [];

    for (let i = 0; i < 5; i++) {
        const satellite = new THREE.Mesh(
            new THREE.SphereGeometry(random(0.08, 0.17), 24, 24),
            new THREE.MeshStandardMaterial({
                color: i % 2 ? 0x00dfff : 0xffffff,
                emissive: 0x1688ff,
                emissiveIntensity: 1.5,
                metalness: 0.7,
                roughness: 0.2
            })
        );

        orbitGroup.add(satellite);

        satellites.push({
            mesh: satellite,
            radius: 2.2 + i * 0.2,
            speed: 0.3 + i * 0.12,
            offset: i * Math.PI * 2 / 5
        });
    }

    scene.add(orbitGroup);

    const blueLight = new THREE.PointLight(0x087bff, 65, 18);
    blueLight.position.set(3, 3, 4);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00dfff, 35, 15);
    cyanLight.position.set(-4, -2, 2);
    scene.add(cyanLight);

    addParticles(scene, 0x9bdcff, 850, 16);

    currentObjects.push({
        update: t => {
            planet.rotation.y = t * 0.12;
            atmosphere.rotation.y = -t * 0.08;

            rings.forEach((ring, i) => {
                ring.rotation.z = t * (0.08 + i * 0.035);
            });

            satellites.forEach(s => {
                const angle = t * s.speed + s.offset;

                s.mesh.position.set(
                    Math.cos(angle) * s.radius,
                    Math.sin(angle * 0.7) * 0.45,
                    Math.sin(angle) * s.radius
                );
            });
        }
    });
}


// ========================================
// 07 — GEOMETRY
// ========================================
else if (id === "07") {

    const geometryGroup = new THREE.Group();

    const colors = [
        0x087bff, 0x00dfff, 0x7545ff,
        0x1688ff, 0x9bdcff
    ];

    const shapes = [
        new THREE.OctahedronGeometry(1, 0),
        new THREE.IcosahedronGeometry(0.9, 0),
        new THREE.TetrahedronGeometry(1, 0),
        new THREE.DodecahedronGeometry(0.85, 0),
        new THREE.TorusKnotGeometry(0.65, 0.16, 100, 12)
    ];

    const objects = [];

    for (let i = 0; i < 12; i++) {
        const geometry = shapes[i % shapes.length].clone();

        const material = new THREE.MeshPhysicalMaterial({
            color: colors[i % colors.length],
            metalness: 0.7,
            roughness: 0.16,
            transmission: 0.25,
            thickness: 0.8,
            transparent: true,
            opacity: 0.85,
            clearcoat: 1,
            emissive: colors[i % colors.length],
            emissiveIntensity: 0.15
        });

        const mesh = new THREE.Mesh(geometry, material);
        const scale = random(0.35, 0.85);

        mesh.scale.setScalar(scale);

        mesh.position.set(
            random(-5, 5),
            random(-3, 3),
            random(-3, 2)
        );

        geometryGroup.add(mesh);

        objects.push({
            mesh,
            speed: random(0.15, 0.5),
            offset: random(0, Math.PI * 2),
            baseY: mesh.position.y
        });

        const edges = new THREE.LineSegments(
            new THREE.EdgesGeometry(geometry),
            new THREE.LineBasicMaterial({
                color: 0x55cfff,
                transparent: true,
                opacity: 0.35
            })
        );

        mesh.add(edges);
    }

    scene.add(geometryGroup);

    const centralFrame = new THREE.Mesh(
        new THREE.IcosahedronGeometry(2.2, 1),
        new THREE.MeshBasicMaterial({
            color: 0x1688ff,
            wireframe: true,
            transparent: true,
            opacity: 0.12
        })
    );

    scene.add(centralFrame);

    const light1 = new THREE.PointLight(0x087bff, 55, 20);
    light1.position.set(-4, 4, 4);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x00dfff, 40, 18);
    light2.position.set(4, -3, 2);
    scene.add(light2);

    addParticles(scene, 0x55cfff, 650, 15);

    currentObjects.push({
        update: t => {
            geometryGroup.rotation.y = t * 0.08;

            objects.forEach(obj => {
                obj.mesh.rotation.x = t * obj.speed + obj.offset;
                obj.mesh.rotation.y = t * obj.speed * 0.7;
                obj.mesh.position.y =
                    obj.baseY + Math.sin(t * 0.7 + obj.offset) * 0.3;
            });

            centralFrame.rotation.x = t * 0.08;
            centralFrame.rotation.y = -t * 0.12;
        }
    });
}


// ========================================
// 05 — HOLO GRID
// ========================================
else if (id === "05") {

    const grid = new THREE.GridHelper(24, 60, 0x1688ff, 0x063b80);
    grid.position.y = -2;
    grid.material.transparent = true;
    grid.material.opacity = 0.45;
    scene.add(grid);

    const verticalGroup = new THREE.Group();

    for (let i = 0; i < 28; i++) {
        const height = random(0.5, 4);

        const bar = new THREE.Mesh(
            new THREE.BoxGeometry(0.035, height, 0.035),
            new THREE.MeshBasicMaterial({
                color: i % 2 ? 0x1688ff : 0x00dfff,
                transparent: true,
                opacity: random(0.25, 0.8)
            })
        );

        bar.position.set(
            random(-8, 8),
            -1 + height / 2,
            random(-5, 4)
        );

        verticalGroup.add(bar);
    }

    scene.add(verticalGroup);

    const ring = addRing(scene, 0x00dfff, 2.5, 0.025);
    ring.rotation.x = Math.PI / 2;

    addParticles(scene, 0x1688ff, 500, 15);

    currentObjects.push({
        update: t => {
            verticalGroup.rotation.y = t * 0.04;
            ring.rotation.z = t * 0.25;
        }
    });
}



// ========================================
// AUTO 02 — NIGHT DRIVE
// ========================================
else if (id === "auto-02") {

    const roadGroup = new THREE.Group();

    const road = new THREE.Mesh(
        new THREE.PlaneGeometry(18, 14),
        new THREE.MeshStandardMaterial({
            color: 0x080d18,
            metalness: 0.6,
            roughness: 0.35
        })
    );

    road.rotation.x = -Math.PI / 2;
    road.position.y = -2;
    roadGroup.add(road);

    // Líneas de carretera
    for (let i = 0; i < 18; i++) {
        const lane = new THREE.Mesh(
            new THREE.BoxGeometry(0.06, 0.015, 0.65),
            new THREE.MeshBasicMaterial({ color: 0x1688ff })
        );

        lane.position.set(0, -1.97, -7 + i * 0.8);
        roadGroup.add(lane);
    }

    // Edificios de ciudad
    for (let i = 0; i < 45; i++) {
        const height = random(1, 5);

        const building = new THREE.Mesh(
            new THREE.BoxGeometry(random(0.4, 1.2), height, 0.5),
            new THREE.MeshStandardMaterial({
                color: 0x101c32,
                emissive: 0x061b44,
                emissiveIntensity: 0.8
            })
        );

        building.position.set(
            i % 2 ? random(5, 9) : random(-9, -5),
            -2 + height / 2,
            random(-7, 6)
        );

        roadGroup.add(building);
    }

    scene.add(roadGroup);

    const headlights = new THREE.PointLight(0x1688ff, 80, 18);
    headlights.position.set(0, 0, 3);
    scene.add(headlights);

    addParticles(scene, 0x1688ff, 500, 14);

    currentObjects.push({
        update: t => {
            roadGroup.position.z = (t * 2) % 0.8;
        }
    });
}


// ========================================
// AUTO 03 — HYPER TUNNEL
// ========================================
else if (id === "auto-03") {

    const tunnel = new THREE.Group();
    const rings = [];

    for (let i = 0; i < 24; i++) {
        const ring = new THREE.Mesh(
            new THREE.TorusGeometry(2.5, 0.025, 8, 80),
            new THREE.MeshBasicMaterial({
                color: i % 2 ? 0x1688ff : 0x00dfff,
                transparent: true,
                opacity: 0.65
            })
        );

        ring.position.z = -i * 0.75;
        tunnel.add(ring);
        rings.push(ring);
    }

    scene.add(tunnel);

    const centerLight = new THREE.PointLight(0x087bff, 100, 20);
    centerLight.position.set(0, 0, 2);
    scene.add(centerLight);

    addParticles(scene, 0x55cfff, 900, 16);

    currentObjects.push({
        update: t => {
            rings.forEach((ring, i) => {
                ring.position.z = -((i * 0.75 + t * 3) % 18);
                ring.rotation.z = t * 0.1 + i * 0.03;
            });
        }
    });
}


// ========================================
// AUTO 04 — DARK SHOWROOM
// ========================================
else if (id === "auto-04") {

    const showroom = new THREE.Group();

    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(18, 14),
        new THREE.MeshStandardMaterial({
            color: 0x080b12,
            metalness: 0.9,
            roughness: 0.2
        })
    );

    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.7;
    showroom.add(floor);

    const platform = new THREE.Mesh(
        new THREE.CylinderGeometry(3.2, 3.2, 0.18, 96),
        new THREE.MeshStandardMaterial({
            color: 0x111b2b,
            metalness: 0.9,
            roughness: 0.18,
            emissive: 0x061b44
        })
    );

    platform.position.y = -1.55;
    showroom.add(platform);

    const rim = new THREE.Mesh(
        new THREE.TorusGeometry(3.15, 0.035, 8, 120),
        new THREE.MeshBasicMaterial({ color: 0x1688ff })
    );

    rim.rotation.x = Math.PI / 2;
    rim.position.y = -1.43;
    showroom.add(rim);

    scene.add(showroom);

    const topLight = new THREE.SpotLight(
        0x8acaff,
        120,
        18,
        Math.PI / 5
    );

    topLight.position.set(0, 7, 2);
    scene.add(topLight);

    const blueLight = new THREE.PointLight(0x087bff, 55, 15);
    blueLight.position.set(-4, 1, 3);
    scene.add(blueLight);

    addParticles(scene, 0x1688ff, 250, 12);

    currentObjects.push({
        update: t => {
            showroom.rotation.y = Math.sin(t * 0.15) * 0.04;
            platform.rotation.y = t * 0.08;
        }
    });
}


// ========================================
// AUTO 05 — MOUNTAIN RUN
// ========================================
else if (id === "auto-05") {

    const mountainGroup = new THREE.Group();

    for (let i = 0; i < 18; i++) {
        const height = random(3, 7);

        const mountain = new THREE.Mesh(
            new THREE.ConeGeometry(random(1.5, 3.5), height, 4),
            new THREE.MeshStandardMaterial({
                color: 0x101e36,
                metalness: 0.25,
                roughness: 0.9,
                wireframe: i % 3 === 0
            })
        );

        mountain.position.set(
            random(-12, 12),
            -1 + height / 2,
            random(-9, -3)
        );

        mountain.rotation.y = Math.PI / 4;
        mountainGroup.add(mountain);
    }

    const road = new THREE.Mesh(
        new THREE.PlaneGeometry(5, 18),
        new THREE.MeshStandardMaterial({
            color: 0x090d16,
            roughness: 0.8
        })
    );

    road.rotation.x = -Math.PI / 2;
    road.position.set(0, -1.8, 0);
    mountainGroup.add(road);

    for (let i = 0; i < 14; i++) {
        const marker = new THREE.Mesh(
            new THREE.BoxGeometry(0.08, 0.02, 0.7),
            new THREE.MeshBasicMaterial({ color: 0x00dfff })
        );

        marker.position.set(0, -1.77, -8 + i * 1.2);
        mountainGroup.add(marker);
    }

    scene.add(mountainGroup);

    const horizon = new THREE.PointLight(0x1688ff, 75, 22);
    horizon.position.set(0, 3, -7);
    scene.add(horizon);

    addParticles(scene, 0x9bdcff, 300, 15);

    currentObjects.push({
        update: t => {
            mountainGroup.position.z = (t * 0.5) % 1;
        }
    });
}


// ========================================
// AUTO 06 — ENGINE CORE
// ========================================
else if (id === "auto-06") {

    const engineGroup = new THREE.Group();

    const core = new THREE.Mesh(
        new THREE.CylinderGeometry(0.85, 0.85, 2.1, 48),
        new THREE.MeshStandardMaterial({
            color: 0x202b3a,
            metalness: 1,
            roughness: 0.2
        })
    );

    engineGroup.add(core);

    for (let i = 0; i < 8; i++) {
        const piston = new THREE.Mesh(
            new THREE.CylinderGeometry(0.13, 0.13, 1.6, 20),
            new THREE.MeshStandardMaterial({
                color: 0x9caec4,
                metalness: 1,
                roughness: 0.16
            })
        );

        const angle = i * Math.PI / 4;

        piston.position.set(
            Math.cos(angle) * 1.25,
            0,
            Math.sin(angle) * 1.25
        );

        engineGroup.add(piston);
    }

    const rotor = new THREE.Mesh(
        new THREE.TorusGeometry(1.7, 0.07, 12, 100),
        new THREE.MeshBasicMaterial({ color: 0x1688ff })
    );

    rotor.rotation.x = Math.PI / 2;
    engineGroup.add(rotor);

    const innerRotor = new THREE.Mesh(
        new THREE.TorusGeometry(1.3, 0.035, 8, 100),
        new THREE.MeshBasicMaterial({ color: 0x00dfff })
    );

    innerRotor.rotation.y = Math.PI / 2;
    engineGroup.add(innerRotor);

    scene.add(engineGroup);

    const light = new THREE.PointLight(0x087bff, 85, 18);
    light.position.set(0, 2, 3);
    scene.add(light);

    addParticles(scene, 0x1688ff, 400, 12);

    currentObjects.push({
        update: t => {
            engineGroup.rotation.y = t * 0.35;
            rotor.rotation.z = t * 0.9;
            innerRotor.rotation.x = t * 0.65;
        }
    });
}


// ========================================
// AUTO 07 — FUTURE MACHINE
// ========================================
else if (id === "auto-07") {

    const machine = new THREE.Group();

    for (let i = 0; i < 4; i++) {
        const frame = new THREE.Mesh(
            new THREE.BoxGeometry(
                3.8 - i * 0.35,
                0.08,
                3.8 - i * 0.35
            ),
            new THREE.MeshStandardMaterial({
                color: 0x17283f,
                metalness: 0.95,
                roughness: 0.2,
                emissive: 0x062b77,
                emissiveIntensity: 0.4
            })
        );

        frame.position.y = -1.5 + i * 0.8;
        machine.add(frame);
    }

    for (let i = 0; i < 4; i++) {
        const pillar = new THREE.Mesh(
            new THREE.CylinderGeometry(0.08, 0.08, 4, 16),
            new THREE.MeshStandardMaterial({
                color: 0x8acaff,
                metalness: 0.9,
                roughness: 0.2,
                emissive: 0x087bff,
                emissiveIntensity: 0.6
            })
        );

        const angle = i * Math.PI / 2;

        pillar.position.set(
            Math.cos(angle) * 1.6,
            0,
            Math.sin(angle) * 1.6
        );

        machine.add(pillar);
    }

    const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.65, 2),
        new THREE.MeshPhysicalMaterial({
            color: 0x00dfff,
            metalness: 0.5,
            roughness: 0.1,
            emissive: 0x087bff,
            emissiveIntensity: 1.4
        })
    );

    machine.add(core);
    scene.add(machine);

    const light = new THREE.PointLight(0x00dfff, 90, 20);
    light.position.set(0, 0, 2);
    scene.add(light);

    addParticles(scene, 0x1688ff, 450, 12);

    currentObjects.push({
        update: t => {
            machine.rotation.y = t * 0.12;
            core.rotation.x = t * 0.6;
            core.rotation.y = t * 0.45;
            core.scale.setScalar(1 + Math.sin(t * 2) * 0.1);
        }
    });
}


// ========================================
// AUTO 08 — SUNSET DRIVE
// ========================================
else if (id === "auto-08") {

    const sun = new THREE.Mesh(
        new THREE.SphereGeometry(2.2, 64, 64),
        new THREE.MeshBasicMaterial({
            color: 0xff743f
        })
    );

    sun.position.set(0, 2.5, -8);
    scene.add(sun);

    const glow = new THREE.Mesh(
        new THREE.SphereGeometry(2.8, 48, 48),
        new THREE.MeshBasicMaterial({
            color: 0xff4b28,
            transparent: true,
            opacity: 0.13,
            side: THREE.BackSide
        })
    );

    glow.position.copy(sun.position);
    scene.add(glow);

    const road = new THREE.Mesh(
        new THREE.PlaneGeometry(18, 14),
        new THREE.MeshStandardMaterial({
            color: 0x10101b,
            metalness: 0.5,
            roughness: 0.5
        })
    );

    road.rotation.x = -Math.PI / 2;
    road.position.y = -2;
    scene.add(road);

    for (let i = 0; i < 16; i++) {
        const line = new THREE.Mesh(
            new THREE.BoxGeometry(0.08, 0.015, 0.6),
            new THREE.MeshBasicMaterial({ color: 0xff7b45 })
        );

        line.position.set(0, -1.98, -7 + i * 0.8);
        scene.add(line);
    }

    const sunLight = new THREE.PointLight(0xff643a, 85, 25);
    sunLight.position.set(0, 3, -5);
    scene.add(sunLight);

    addParticles(scene, 0xffa16b, 250, 14);

    currentObjects.push({
        update: t => {
            glow.scale.setScalar(1 + Math.sin(t) * 0.04);
            sun.rotation.y = t * 0.04;
        }
    });
}


// ========================================
// AUTO 09 — CARBON VISION
// ========================================
else if (id === "auto-09") {

    const carbonGroup = new THREE.Group();

    const carbonMaterial = new THREE.MeshStandardMaterial({
        color: 0x111722,
        metalness: 0.95,
        roughness: 0.28
    });

    for (let i = 0; i < 22; i++) {
        const panel = new THREE.Mesh(
            new THREE.BoxGeometry(
                random(0.8, 2.2),
                0.045,
                0.045
            ),
            carbonMaterial
        );

        panel.position.set(
            random(-5, 5),
            random(-3, 3),
            random(-2, 2)
        );

        panel.rotation.z = random(-0.5, 0.5);
        carbonGroup.add(panel);
    }

    const frame = new THREE.Mesh(
        new THREE.IcosahedronGeometry(2.3, 1),
        new THREE.MeshBasicMaterial({
            color: 0x1688ff,
            wireframe: true,
            transparent: true,
            opacity: 0.22
        })
    );

    carbonGroup.add(frame);

    const center = new THREE.Mesh(
        new THREE.TorusKnotGeometry(0.85, 0.17, 150, 20),
        new THREE.MeshPhysicalMaterial({
            color: 0x253b5a,
            metalness: 1,
            roughness: 0.12,
            clearcoat: 1,
            emissive: 0x062b77,
            emissiveIntensity: 0.8
        })
    );

    carbonGroup.add(center);
    scene.add(carbonGroup);

    const blueLight = new THREE.PointLight(0x087bff, 85, 20);
    blueLight.position.set(-3, 3, 4);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00dfff, 55, 20);
    cyanLight.position.set(3, -2, 3);
    scene.add(cyanLight);

    addParticles(scene, 0x1688ff, 500, 14);

    currentObjects.push({
        update: t => {
            carbonGroup.rotation.y = t * 0.1;
            frame.rotation.x = t * 0.12;
            center.rotation.x = t * 0.35;
            center.rotation.y = t * 0.25;
        }
    });
}


/* ========================================
   OPEN PREVIEW
======================================== */

function cleanupPreview() {
    if (currentAnimation !== null) {
        cancelAnimationFrame(currentAnimation);
        currentAnimation = null;
    }

    if (currentResize) {
        window.removeEventListener("resize", currentResize);
        currentResize = null;
    }

    if (currentRenderer) {
        currentRenderer.dispose();
        currentRenderer.domElement.remove();
        currentRenderer = null;
    }

    if (currentScene) {
        currentScene.traverse(object => {
            if (object.geometry) object.geometry.dispose();

            if (object.material) {
                const materials = Array.isArray(object.material)
                    ? object.material
                    : [object.material];

                materials.forEach(material => material.dispose());
            }
        });

        currentScene = null;
    }

    currentObjects = [];
}

function openBackgroundPreview(background, category) {
    const preview = document.getElementById("background-preview");
    const previewContent = document.getElementById("preview-content");
    const previewTitle = document.getElementById("preview-title");

    if (!preview || !previewContent || !previewTitle) return;

    cleanupPreview();

    previewContent.innerHTML = "";
    previewTitle.textContent = background.name;

    preview.classList.add("active");
    preview.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    if (typeof THREE === "undefined") {
        previewContent.textContent = "Three.js konnte nicht geladen werden.";
        return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#030711");
    currentScene = scene;

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: "high-performance"
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);

    previewContent.appendChild(renderer.domElement);
    currentRenderer = renderer;

    const light = new THREE.PointLight(background.color, 4, 35);
    light.position.set(0, 3, 5);
    scene.add(light);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    createUniqueScene(scene, background);

    const clock = new THREE.Clock();

    function animate() {
        currentAnimation = requestAnimationFrame(animate);

        const time = clock.getElapsedTime();

        currentObjects.forEach((object, index) => {
            if (object.update) {
                object.update(time);
                return;
            }

            if (object.userData.fallSpeed) {
                object.position.y -= object.userData.fallSpeed;

                if (object.position.y < -7) {
                    object.position.y = 7;
                    object.position.x = random(-8, 8);
                }

                return;
            }

            if (object.isPoints) {
                object.rotation.y += 0.0008;
                object.rotation.x += 0.0002;
            } else {
                object.rotation.y += 0.002 + index * 0.00005;
                object.rotation.x += 0.0007;
            }
        });

        light.intensity = 3.5 + Math.sin(time * 1.5) * 0.8;

        renderer.render(scene, camera);
    }

    animate();

    currentResize = () => {
        if (!currentRenderer) return;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", currentResize);
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

    cleanupPreview();
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
