import * as BABYLON from "@babylonjs/core";

const canvas = document.getElementById("canvasArea");
const engine = new BABYLON.Engine(canvas);

const createScene = () => {
    //Create scene 
  const scene = new BABYLON.Scene(engine);

  // 
  const camera = new BABYLON.ArcRotateCamera(
    "Camera",
    -Math.PI / 2,
    Math.PI / 2,
    3,
    BABYLON.Vector3.Zero()
  );
  camera.attachControl(canvas, true);


  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(1, 1, 0)
  );

  const blackEar = new BABYLON.StandardMaterial();
  blackEar.diffuseColor = new BABYLON.Color3(0, 0, 0);

  const leftEar = new BABYLON.MeshBuilder.CreateSphere();
  leftEar.position = new BABYLON.Vector3(-0.75, 0.75, 0);
  leftEar.material = blackEar;

  const rightEar = new BABYLON.MeshBuilder.CreateSphere();
  rightEar.position = new BABYLON.Vector3(0.75, 0.75, 0);
  rightEar.material = blackEar;

  const skinColor = new BABYLON.StandardMaterial();
  skinColor.diffuseColor = new BABYLON.Color3(0.9, 0.74, 0.64);

  const face = new BABYLON.MeshBuilder.CreateTorus("torus", {
    tessellation: 64,
  });

  face.rotation.y = Math.PI / 2;
  face.rotation.z = Math.PI / 2;
  face.rotation.x = Math.PI / 2;
  face.material = skinColor;

  const snaptrudeLogo = new BABYLON.StandardMaterial();
  snaptrudeLogo.diffuseTexture = new BABYLON.Texture("snaptrudeLogo.jpg");
  const plane = new BABYLON.MeshBuilder.CreatePlane("plane", {
    height: 0.5,
    width: 0.5,
  });
  plane.material = snaptrudeLogo;
  return scene;
};

const scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});
