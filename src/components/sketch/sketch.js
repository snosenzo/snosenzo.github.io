// Ensure ThreeJS is in global scope for the 'examples/'
import * as THREE from "three";
global.THREE = THREE;
import { generateLineMarkersGeometry } from "./hatch-mark-util";

export const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
  });

  // WebGL background color
  renderer.setClearColor("#000000", 1);

  // Setup a camera
  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  camera.position.set(0, 0, -4);
  camera.lookAt(new THREE.Vector3());

  // Setup camera controller
  // const controls = new OrbitControls(camera, context.canvas);

  // Setup your scene
  const scene = new THREE.Scene();

  const geometry = new THREE.IcosahedronGeometry(1, 2);
  // mesh
  const material = new THREE.MeshPhongMaterial({
    polygonOffset: true,
    polygonOffsetFactor: 1, // positive value pushes polygon further away
    polygonOffsetUnits: 1,
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const wireGeometry = new THREE.EdgesGeometry(mesh.geometry);
  const wireMaterial = new THREE.LineBasicMaterial({
    color: "#ff6959",
    linewidth: 1,
  });
  const wireframe = new THREE.Line(wireGeometry, wireMaterial);
  mesh.add(wireframe);

  const markerGeo = generateLineMarkersGeometry({
    innerRadius: 1.3,
    outerRadius: 1.7,
    majorIncrements: 7,
    subDivisions: 4,
  });
  const markerMat = new THREE.LineBasicMaterial({
    color: "#FFFfff",
    linewidth: 1,
  });
  const markers = new THREE.LineSegments(markerGeo, markerMat);
  scene.add(markers);

  return {
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },

    render({ time }) {
      mesh.rotation.y = Math.PI * 0.05 * time;
      mesh.rotation.z = Math.PI * 0.1 * time;
      markers.rotation.z = 0.2 * Math.sin(time * 0.3);
      markers.rotation.y = 0.2 * Math.cos(time * 0.6);
      renderer.render(scene, camera);
    },

    unload() {
      renderer.dispose();
    },
  };
};
