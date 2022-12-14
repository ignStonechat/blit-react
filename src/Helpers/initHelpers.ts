import React from 'react';
import * as BABYLON from 'babylonjs';
import * as MATERIALS from 'babylonjs-materials';

import { SceneManager } from '../Managers/SceneManager';

export let Manager: SceneManager;

const setDefaultGridProperties = (gridMat: MATERIALS.GridMaterial) => {
  gridMat.majorUnitFrequency = 1;
  gridMat.minorUnitVisibility = 0.5;
  gridMat.gridRatio = 1;
  gridMat.backFaceCulling = false;
  gridMat.mainColor = new BABYLON.Color3(0.25, 0.27, 0.33);
  gridMat.lineColor = new BABYLON.Color3(0.33, 0.35, 0.42);
  gridMat.opacity = 0.95;
};

const initSceneObjects = () => {
  const sphereOptions = { diameter: 2, segments: 32 };
  const boxOptions = { width: 4, height: 2, depth: 4 };
  const groundOptions = { width: 10, height: 10 };
  const arcCameraLocation = {alpha: 0, beta: 0, radius: 10};
  const arcCameraTarget = new BABYLON.Vector3(0, 0, 0);
  const lightDirection = new BABYLON.Vector3(-1, -2, -1);  
  
  const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', sphereOptions, Manager.scene);
  const box = BABYLON.MeshBuilder.CreateBox('box', boxOptions, Manager.scene);
  const gridGround = BABYLON.MeshBuilder.CreateGround('gridGround', groundOptions, Manager.scene)
  const gridMat = new MATERIALS.GridMaterial('gridMat', Manager.scene);
  const arcCamera = new BABYLON.ArcRotateCamera('defaultCamera', arcCameraLocation.alpha, arcCameraLocation.beta, arcCameraLocation.radius, arcCameraTarget, Manager.scene);
  const light = new BABYLON.DirectionalLight('dirLight', lightDirection, Manager.scene);

  arcCamera.attachControl(Manager.canvas.current)
  setDefaultGridProperties(gridMat);
  gridGround.material = gridMat;
  gridGround.isPickable = false;

}

export const initCanvas = (canvas: React.MutableRefObject<HTMLCanvasElement>) => {
  const engine = new BABYLON.Engine(canvas.current);
  const scene = new BABYLON.Scene(engine);
  Manager = new SceneManager(canvas, scene);
  initSceneObjects();
  engine.runRenderLoop(() => Manager.scene?.render());
}