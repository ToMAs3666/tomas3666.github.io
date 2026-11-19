
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


   
    // 14 — GLASS DIMENSION
    else if (id === "14") {

        // Cristales flotantes
        const crystalGeometries = [
            new THREE.OctahedronGeometry(1.25, 0),
            new THREE.IcosahedronGeometry(1, 0),
            new THREE.DodecahedronGeometry(1.1, 0),
            new THREE.OctahedronGeometry(0.8, 0),
            new THREE.IcosahedronGeometry(0.7, 1),
            new THREE.TetrahedronGeometry(1, 0)
        ];

        const positions = [
            [-4, 1.5, -1],
            [-1.5, -1.2, 0],
            [1.5, 1.7, -2],
            [4, -0.8, -1],
            [0, 0.2, -4],
            [3, 2.5, -4]
        ];

        crystalGeometries.forEach((geometry, i) => {

            const group = new THREE.Group();

            const glassMaterial = new THREE.MeshPhysicalMaterial({
                color: i % 2 === 0 ? 0x49aaff : 0x9bdfff,
                metalness: 0.15,
                roughness: 0.08,
                transmission: 0.75,
                thickness: 1.2,
                ior: 1.45,
                transparent: true,
                opacity: 0.75,
                side: THREE.DoubleSide
            });

            const crystal = new THREE.Mesh(
                geometry,
                glassMaterial
            );

            group.add(crystal);

            // Bordes luminosos
            const edges = new THREE.EdgesGeometry(geometry);

            const outline = new THREE.LineSegments(
                edges,
                new THREE.LineBasicMaterial({
                    color: 0x8bdcff,
                    transparent: true,
                    opacity: 0.9
                })
            );

            group.add(outline);

            group.position.set(...positions[i]);
            group.rotation.set(
                random(0, 2),
                random(0, 2),
                random(0, 2)
            );

            group.scale.setScalar(random(0.8, 1.3));

            scene.add(group);

            currentObjects.push({
                update: t => {
                    group.rotation.y += 0.002;
                    group.rotation.x += 0.001;
                    group.position.y =
                        positions[i][1] + Math.sin(t + i) * 0.12;
                }
            });
        });

        // Paneles de cristal
        for (let i = 0; i < 5; i++) {

            const panel = new THREE.Mesh(
                new THREE.BoxGeometry(2.2, 3.5, 0.035),
                new THREE.MeshPhysicalMaterial({
                    color: 0x287dff,
                    transparent: true,
                    opacity: 0.12,
                    metalness: 0.5,
                    roughness: 0.08
                })
            );

            panel.position.set(
                random(-6, 6),
                random(-2, 2),
                -3 - i
            );

            panel.rotation.y = random(-0.5, 0.5);

            scene.add(panel);
            currentObjects.push(panel);
        }

        // Partículas luminosas
        addParticles(scene, 0x8bdcff, 700, 12);

        // Iluminación
        const glassLight = new THREE.PointLight(0x49aaff, 45, 20);
        glassLight.position.set(0, 3, 4);
        scene.add(glassLight);

        const cyanLight = new THREE.PointLight(0x00eaff, 25, 15);
        cyanLight.position.set(-5, -2, 2);
        scene.add(cyanLight);
    }


   
    // 11 — LIGHT RAYS
    else if (id === "11") {

        // Haces de luz principales
        for (let i = 0; i < 18; i++) {

            const ray = new THREE.Mesh(
                new THREE.CylinderGeometry(
                    0.015,
                    random(0.12, 0.3),
                    random(7, 12),
                    12,
                    1,
                    true
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

        // Luz central ambiental
        const centralLight = new THREE.PointLight(
            0x1688ff, 45, 20
        );

        centralLight.position.set(0, 2, 1);
        scene.add(centralLight);

        // Destellos
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
                glow.scale.setScalar(
                    1 + Math.sin(t * 1.5) * 0.15
                );
            }
        });

        // Partículas suspendidas
        addParticles(scene, 0x9bdcff, 900, 13);
    }


   
    // 12 — DIGITAL TERRAIN
    else if (id === "12") {

        const terrainGroup = new THREE.Group();

        const geometry = new THREE.PlaneGeometry(
            18, 12, 100, 80
        );

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

        // Segunda capa de profundidad
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

        // Puntos luminosos sobre el horizonte
        addParticles(scene, 0x1688ff, 500, 15);

        const horizonLight = new THREE.PointLight(
            0x087bff, 35, 18
        );

        horizonLight.position.set(0, 3, -4);
        scene.add(horizonLight);
    }


   
    // 09 — LIQUID MOTION
    else if (id === "09") {

        const liquidGroup = new THREE.Group();

        const colors = [
            0x087bff,
            0x00dfff,
            0x6040ff,
            0x1688ff
        ];

        // Formas de metal líquido
        for (let i = 0; i < 4; i++) {

            const geometry = new THREE.TorusKnotGeometry(
                random(0.9, 1.5),
                random(0.12, 0.22),
                180,
                24,
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

            const liquid = new THREE.Mesh(
                geometry,
                material
            );

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

        // Núcleo luminoso
        const core = new THREE.Mesh(
            new THREE.SphereGeometry(0.75, 48, 48),
            new THREE.MeshBasicMaterial({
                color: 0x087bff,
                transparent: true,
                opacity: 0.12
            })
        );

        scene.add(core);

        // Iluminación
        const blueLight = new THREE.PointLight(
            0x087bff, 55, 18
        );

        blueLight.position.set(-3, 3, 3);
        scene.add(blueLight);

        const cyanLight = new THREE.PointLight(
            0x00dfff, 40, 18
        );

        cyanLight.position.set(3, -2, 2);
        scene.add(cyanLight);

        // Animación fluida
        currentObjects.push({
            update: t => {

                liquidGroup.rotation.y = t * 0.12;
                liquidGroup.rotation.x =
                    Math.sin(t * 0.25) * 0.12;

                liquidGroup.children.forEach(liquid => {

                    const speed = liquid.userData.speed;
                    const offset = liquid.userData.offset;

                    liquid.rotation.x =
                        t * speed + offset;

                    liquid.rotation.z =
                        Math.sin(t * 0.35 + offset) * 0.4;
                });

                core.scale.setScalar(
                    1 + Math.sin(t * 1.3) * 0.12
                );
            }
        });

        addParticles(scene, 0x55cfff, 450, 12);
    }


    
    // 10 — ORBIT
    else if (id === "10") {

        const orbitGroup = new THREE.Group();

        // Planeta central
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

        // Líneas luminosas del planeta
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

        // Anillos orbitales
        const ringColors = [
            0x1688ff,
            0x00dfff,
            0x7545ff
        ];

        const rings = [];

        for (let i = 0; i < 3; i++) {

            const ring = new THREE.Mesh(
                new THREE.TorusGeometry(
                    2.1 + i * 0.35,
                    0.018,
                    8,
                    180
                ),
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

        // Satélites
        const satellites = [];

        for (let i = 0; i < 5; i++) {

            const satellite = new THREE.Mesh(
                new THREE.SphereGeometry(
                    random(0.08, 0.17),
                    24,
                    24
                ),
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

        // Iluminación espacial
        const blueLight = new THREE.PointLight(
            0x087bff, 65, 18
        );

        blueLight.position.set(3, 3, 4);
        scene.add(blueLight);

        const cyanLight = new THREE.PointLight(
            0x00dfff, 35, 15
        );

        cyanLight.position.set(-4, -2, 2);
        scene.add(cyanLight);

        addParticles(scene, 0x9bdcff, 850, 16);

        // Movimiento orbital
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


    // 07 — GEOMETRY
    else if (id === "07") {
        const geometries = [
            new THREE.TorusKnotGeometry(0.8, 0.2, 120, 16),
            new THREE.OctahedronGeometry(1.2),
            new THREE.TetrahedronGeometry(1.2),
            new THREE.DodecahedronGeometry(1)
        ];

        geometries.forEach((geo, i) => {
            const mesh = addMesh(scene, geo, i % 2 ? cyan : color, {
                wireframe: true,
                glow: 1
            });

            mesh.position.set((i - 1.5) * 2.5, random(-1, 1), 0);
        });
    }

    // 05 — HOLO GRID
    else if (id === "05") {
        const grid = new THREE.GridHelper(18, 45, color, blue);
        grid.position.y = -1.5;
        scene.add(grid);
        currentObjects.push(grid);

        for (let i = 0; i < 8; i++) {
            const beam = addMesh(scene,
                new THREE.BoxGeometry(0.025, random(1, 4), 0.025),
                cyan,
                { glow: 1 }
            );

            beam.position.set(random(-7, 7), random(-0.5, 2), random(-3, 2));
        }
    }

    // 01 — BLUE AURA
    else if (id === "01") {
        for (let i = 0; i < 5; i++) {
            const aura = addMesh(scene,
                new THREE.SphereGeometry(1.2 + i * 0.45, 32, 32),
                color,
                { transparent: true, opacity: 0.08, glow: 1 }
            );

            aura.scale.set(1.5, 0.8, 0.6);
        }

        addParticles(scene, white, 1000);
    }

    // 02 — CYBER CIRCUITS
    else if (id === "02") {
        for (let i = 0; i < 24; i++) {
            const x = random(-6, 6);
            const y = random(-3, 3);
            const length = random(0.5, 3);

            addLine(scene, [
                [x, y, 0],
                [x + length, y, 0],
                [x + length, y + random(-2, 2), 0]
            ], i % 2 ? cyan : color, 0.025);

            addMesh(scene,
                new THREE.SphereGeometry(0.09, 12, 12),
                white,
                { glow: 2, position: [x + length, y, 0] }
            );
        }
    }

    // 03 — DEEP WAVES
    else if (id === "03") {
        for (let i = 0; i < 8; i++) {
            const wave = addRing(scene, color, 1 + i * 0.55, 0.035);
            wave.rotation.x = 1.1;
            wave.position.y = -1 + i * 0.3;
        }
        addParticles(scene, blue, 800);
    }

    // 04 — PARTICLE SPACE
    else if (id === "04") {
        addParticles(scene, purple, 3500, 13);

        for (let i = 0; i < 8; i++) {
            const star = addMesh(scene,
                new THREE.IcosahedronGeometry(0.12, 1),
                white,
                { glow: 2 }
            );
            star.position.set(random(-6, 6), random(-4, 4), random(-4, 2));
        }
    }

    // 06 — ENERGY FLOW
    else if (id === "06") {
        for (let i = 0; i < 7; i++) {
            const points = [];

            for (let j = 0; j <= 30; j++) {
                const x = -7 + j * 0.46;
                const y = Math.sin(j * 0.4 + i) * 0.7 + i * 0.35;
                points.push([x, y, i * 0.2]);
            }

            addLine(scene, points, i % 2 ? cyan : color, 0.045);
        }
    }

    // 08 — DIGITAL RAIN
    else if (id === "08") {
        for (let i = 0; i < 160; i++) {
            const drop = addMesh(scene,
                new THREE.BoxGeometry(0.025, random(0.2, 1), 0.025),
                i % 3 ? color : cyan,
                { glow: 1 }
            );

            drop.position.set(random(-8, 8), random(-6, 6), random(-2, 2));
            drop.userData.fallSpeed = random(0.02, 0.08);
        }
    }

    // 13 — NEURAL NETWORK
    else if (id === "13") {
        const nodes = [];

        for (let i = 0; i < 45; i++) {
            const point = new THREE.Vector3(
                random(-5, 5),
                random(-3, 3),
                random(-3, 3)
            );

            nodes.push(point);

            const node = addMesh(scene,
                new THREE.SphereGeometry(0.07, 12, 12),
                cyan,
                { glow: 2 }
            );

            node.position.copy(point);
        }

        nodes.forEach((point, i) => {
            nodes.slice(i + 1).forEach(other => {
                if (point.distanceTo(other) < 2.5) {
                    addLine(scene, [
                        point.toArray(),
                        other.toArray()
                    ], color, 0.008);
                }
            });
        });
    }

    /* AUTOMOTIVE */

  
    // AUTO 01 — NEON GARAGE
    else if (id === "auto-01") {

        const garage = new THREE.Group();

        // Materiales
        const bodyMat = new THREE.MeshPhysicalMaterial({
            color: 0x087cff,
            metalness: 0.9,
            roughness: 0.2,
            clearcoat: 1,
            clearcoatRoughness: 0.1
        });

        const glassMat = new THREE.MeshPhysicalMaterial({
            color: 0x071b32,
            metalness: 0.7,
            roughness: 0.08,
            transparent: true,
            opacity: 0.9
        });

        const tireMat = new THREE.MeshStandardMaterial({
            color: 0x080a0e,
            roughness: 0.85
        });

        const neonMat = new THREE.MeshBasicMaterial({
            color: 0x00dfff
        });

        // Carrocería
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(3.8, 0.55, 1.7),
            bodyMat
        );
        body.position.y = -0.35;
        garage.add(body);

        // Capó
        const hood = new THREE.Mesh(
            new THREE.BoxGeometry(1.25, 0.22, 1.65),
            bodyMat
        );
        hood.position.set(1.15, -0.12, 0);
        garage.add(hood);

        // Cabina
        const cabin = new THREE.Mesh(
            new THREE.BoxGeometry(1.8, 0.7, 1.35),
            glassMat
        );
        cabin.position.set(-0.25, 0.27, 0);
        garage.add(cabin);

        // Techo
        const roof = new THREE.Mesh(
            new THREE.BoxGeometry(1.2, 0.12, 1.25),
            bodyMat
        );
        roof.position.set(-0.25, 0.67, 0);
        garage.add(roof);

        // Ruedas
        for (const x of [-1.2, 1.2]) {
            for (const z of [-0.88, 0.88]) {

                const wheel = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.43, 0.43, 0.22, 40),
                    tireMat
                );

                wheel.rotation.x = Math.PI / 2;
                wheel.position.set(x, -0.55, z);
                garage.add(wheel);

                const rim = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.23, 0.23, 0.235, 32),
                    new THREE.MeshStandardMaterial({
                        color: 0x91b8d8,
                        metalness: 1,
                        roughness: 0.2
                    })
                );

                rim.rotation.x = Math.PI / 2;
                rim.position.set(x, -0.55, z);
                garage.add(rim);
            }
        }

        // Faros delanteros
        for (const z of [-0.55, 0.55]) {
            const headlight = new THREE.Mesh(
                new THREE.BoxGeometry(0.08, 0.13, 0.38),
                neonMat
            );

            headlight.position.set(1.94, -0.25, z);
            garage.add(headlight);
        }

        // Alerón trasero
        const spoiler = new THREE.Mesh(
            new THREE.BoxGeometry(0.18, 0.08, 1.9),
            bodyMat
        );
        spoiler.position.set(-1.85, 0.25, 0);
        garage.add(spoiler);

        garage.rotation.y = -0.35;
        garage.position.y = -0.1;

        scene.add(garage);
        currentObjects.push(garage);

        // Plataforma del garaje
        const floor = new THREE.Mesh(
            new THREE.BoxGeometry(18, 0.12, 12),
            new THREE.MeshStandardMaterial({
                color: 0x07111f,
                metalness: 0.8,
                roughness: 0.35
            })
        );
        floor.position.set(0, -1.25, -1);
        scene.add(floor);

        // Marcos de neón
        for (let i = 0; i < 5; i++) {
            const frame = new THREE.Mesh(
                new THREE.BoxGeometry(0.045, 5, 0.045),
                neonMat
            );

            frame.position.set(-6 + i * 3, 1, -3);
            scene.add(frame);
        }

        // Iluminación del garaje
        const blueLight = new THREE.PointLight(0x087cff, 35, 18);
        blueLight.position.set(0, 3, 3);
        scene.add(blueLight);

        const cyanLight = new THREE.PointLight(0x00eaff, 20, 14);
        cyanLight.position.set(-4, 1, -2);
        scene.add(cyanLight);
    }

    // AUTO 02 — NIGHT DRIVE
    else if (id === "auto-02") {
        createCar(scene, color);

        for (let i = 0; i < 18; i++) {
            const building = addMesh(scene,
                new THREE.BoxGeometry(1, random(2, 7), 1),
                0x102443,
                { glow: 0.3 }
            );

            building.position.set(
                random(-9, 9),
                -1 + building.geometry.parameters.height / 2,
                random(-6, -3)
            );
        }

        addParticles(scene, white, 300);
    }

    // AUTO 03 — HYPER TUNNEL
    else if (id === "auto-03") {
        createCar(scene, cyan, true);

        for (let i = 0; i < 16; i++) {
            const ring = addMesh(scene,
                new THREE.TorusGeometry(3 + i * 0.12, 0.035, 8, 80),
                i % 2 ? cyan : color,
                { glow: 2 }
            );

            ring.position.z = -i * 1.5;
        }
    }

    // AUTO 04 — DARK SHOWROOM
    else if (id === "auto-04") {
        createCar(scene, 0x7c9dff);

        const floor = addMesh(scene,
            new THREE.CircleGeometry(4, 64),
            0x15243b,
            { metalness: 0.9 }
        );

        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -1.3;

        addRing(scene, color, 3.5, 0.035, [0, -1.25, 0]);

        const spotlight = new THREE.SpotLight(0xffffff, 100);
        spotlight.position.set(0, 7, 2);
        scene.add(spotlight);
    }

    // AUTO 05 — MOUNTAIN RUN
    else if (id === "auto-05") {
        createCar(scene, 0xd88c4b);

        for (let side of [-1, 1]) {
            for (let i = 0; i < 7; i++) {
                const mountain = addMesh(scene,
                    new THREE.ConeGeometry(random(1, 2.5), random(3, 7), 5),
                    0x344b57
                );

                mountain.position.set(
                    side * random(5, 9),
                    random(0, 2),
                    -i * 2
                );
            }
        }

        addLine(scene, [
            [-3, -1.3, 2],
            [-1, -1.3, -3],
            [2, -1.3, -7],
            [-1, -1.3, -12]
        ], 0xffffff, 0.04);
    }

    // AUTO 06 — ENGINE CORE
    else if (id === "auto-06") {
        const engine = addMesh(scene,
            new THREE.CylinderGeometry(1.1, 1.1, 1.2, 12),
            0x555e68,
            { metalness: 1 }
        );

        engine.rotation.x = Math.PI / 2;

        for (let i = 0; i < 8; i++) {
            const piston = addMesh(scene,
                new THREE.CylinderGeometry(0.15, 0.15, 1.5, 16),
                color,
                { glow: 0.5 }
            );

            const angle = i * Math.PI / 4;

            piston.position.set(
                Math.cos(angle) * 1.7,
                Math.sin(angle) * 1.7,
                0
            );
        }

        addRing(scene, 0xff663c, 2.2, 0.08);
        addParticles(scene, 0xff9966, 400);
    }

    // AUTO 07 — FUTURE MACHINE
    else if (id === "auto-07") {
        createCar(scene, cyan, true);

        for (let i = 0; i < 6; i++) {
            const wing = addMesh(scene,
                new THREE.BoxGeometry(2 + i * 0.3, 0.035, 0.035),
                cyan,
                { glow: 1 }
            );

            wing.position.set(0, 1.2 + i * 0.2, -1);
            wing.rotation.z = 0.2;
        }
    }

    // AUTO 08 — SUNSET DRIVE
    else if (id === "auto-08") {
        createCar(scene, 0xe58b45);

        const sun = addMesh(scene,
            new THREE.SphereGeometry(2, 48, 48),
            0xffa34f,
            { glow: 2 }
        );

        sun.position.set(0, 3, -8);

        addLine(scene, [
            [-8, -1.4, 4],
            [-3, -1.4, 0],
            [2, -1.4, -4],
            [8, -1.4, -9]
        ], 0xffb66a, 0.08);
    }

    // AUTO 09 — CARBON VISION
    else if (id === "auto-09") {
        createCar(scene, 0x303b50, true);

        const carbon = addMesh(scene,
            new THREE.PlaneGeometry(15, 12, 30, 30),
            0x202630,
            { wireframe: true, glow: 0.2 }
        );

        carbon.position.z = -2;

        for (let i = 0; i < 8; i++) {
            const strip = addMesh(scene,
                new THREE.BoxGeometry(0.035, 6, 0.035),
                color,
                { glow: 2 }
            );

            strip.position.set(-5 + i * 1.4, 0, 1);
            strip.rotation.z = 0.2;
        }
    }
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
