import React, { useRef, useEffect } from 'react';
import { CanvasContainer } from './CanvasContainer';
import { RenderCanvas } from './RenderCanvas';
import { initCanvas } from '../../Helpers/initHelpers';

export const Canvas: React.FC = () => {
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;
  useEffect(()=> {
    if(canvasRef.current) {
      initCanvas(canvasRef);
    }
  },[canvasRef]);

  return (
    <CanvasContainer>
      <RenderCanvas ref={ canvasRef } />
    </CanvasContainer>
  )
}