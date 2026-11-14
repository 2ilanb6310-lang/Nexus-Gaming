import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const stage = document.querySelector("#samurai-stage");
const loading = document.querySelector("#model-loading");
const error = document.querySelector("#model-error");
const menuButton = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav");

menuButton?.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

if (stage) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 1.1, 5.8);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  stage.appendChild(renderer.domElement);

  scene.add(new THREE.HemisphereLight(0xdccaff, 0x160b26, 2.1));
  const key = new THREE.DirectionalLight(0xffffff, 3.2);
  key.position.set(3, 5, 4);
  scene.add(key);
  const purple = new THREE.PointLight(0xa34dff, 28, 12);
  purple.position.set(-3, 1, -2);
  scene.add(purple);
  const rim = new THREE.PointLight(0xff75e8, 18, 10);
  rim.position.set(2, 2, -3);
  scene.add(rim);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.enablePan = false;
  controls.minDistance = 3;
  controls.maxDistance = 8;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.65;
  controls.target.set(0, 0.8, 0);

  let model;
  const loader = new GLTFLoader();
  loader.load("./assets/samourai-cyberpunk.glb", (gltf) => {
    model = gltf.scene;
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    model.position.sub(center);
    const maxDimension = Math.max(size.x, size.y, size.z);
    if (maxDimension > 0) model.scale.setScalar(3.15 / maxDimension);
    model.position.y -= (bounds.min.y + bounds.max.y) * 0.5 * (3.15 / maxDimension);
    scene.add(model);
    controls.target.set(0, 0, 0);
    loading?.remove();
  }, undefined, (err) => {
    console.error("Impossible de charger le modèle 3D :", err);
    if (loading) loading.hidden = true;
    if (error) error.hidden = false;
  });

  const resize = () => {
    const width = stage.clientWidth;
    const height = stage.clientHeight;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };
  const observer = new ResizeObserver(resize);
  observer.observe(stage);
  resize();

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
}
