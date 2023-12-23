import * as THREE from "three";
import gsap from "gsap";
function main() {
  const canvas = document.getElementById("c");
  if (!canvas) {
    alert("canvas not found");
    return;
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);
  camera.position.z = 4;

  const scene = new THREE.Scene();

  const material = new THREE.MeshPhongMaterial({ color: "red" });

  const geometry = new THREE.BoxGeometry();

  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  // const clock = new THREE.Clock();

  gsap.to(cube.position, { x: 2, duration: 2, delay: 1 });

  const tick = () => {
    // let elapsedTime = clock.getElapsedTime();

    // time *= 0.001;
    // cube.rotation.x = elapsedTime;
    // camera.position.y = Math.sin(elapsedTime);
    // camera.position.x = Math.cos(elapsedTime);

    // camera.lookAt(cube.position);

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  };

  tick();
}

main();
