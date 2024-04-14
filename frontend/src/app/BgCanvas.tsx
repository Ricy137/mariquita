'use client';
import { useCallback } from 'react';
import Canvas from '@/components/Canvas';
import { drawIce } from '@/utils/canvas';

export const BgCanvas: React.FC = () => {
  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    drawIce(ctx, 1024, 700);
  }, []);

  return <Canvas draw={draw} className="fixed w-full h-full -z-10" />;
};

export default BgCanvas;
