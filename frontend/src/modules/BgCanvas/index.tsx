'use client';
import { useCallback } from 'react';
import { OffCanvas } from '@/components/Canvas';
import { drawIce } from '@/utils/canvas';

export const BgCanvas: React.FC = () => {
  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    drawIce(ctx, 1024, 700);
  }, []);

  return <OffCanvas draw={draw} className="fixed w-full h-full -z-10" />;
};

export default BgCanvas;
