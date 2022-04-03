import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// => position
// position of cube
// mesh.position.z = -3;
// mesh.position.z = 1;

// we can change all 3 values of x,y,and z at once
mesh.position.set(1, 1, 1);

//  length of the vector which is distance b/w the centre of the scene
// and our object position
console.log(mesh.position.length());

// normaliztion- it take the vector length and it reduce until the vector length is 1
// mesh.position.normalize();
// console.log(mesh.position.length());

// => Scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);

// => Rotation
// GIMBER LOCK
// Math.PI - it give half rotation
mesh.rotation.reorder("YXZ");
// reorder define before rotation
mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.x = Math.PI * 0.25;

// Axes helper - positioning object in space
// 2 - paramerter and length of axises
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// position of camera
camera.position.z = 3;
camera.position.y = 2;
camera.position.x = 1;
scene.add(camera);

// look at
camera.lookAt(mesh.position);

// know distance b/w camera and object(mesh)
// can not access camera befor intialization
console.log(mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
