import React from 'react';
import * as BABYLON from 'babylonjs';

export class SceneManager {
  canvas: React.MutableRefObject<HTMLCanvasElement>;
  scene: BABYLON.Scene;

  constructor(canvas: React.MutableRefObject<HTMLCanvasElement>, scene: BABYLON.Scene){
    this.canvas = canvas;
    this.scene = scene;
  }
};