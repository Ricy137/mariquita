import { useRef, useEffect, ComponentProps } from 'react';

interface CanvasProps extends ComponentProps<'canvas'> {
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export const OffCanvas: React.FC<CanvasProps> = ({ draw, ...rest }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      if (typeof OffscreenCanvas !== 'undefined') {
        if (workerRef.current) return;
        const worker = new Worker(
          new URL('../../utils/canvas/worker.ts', import.meta.url),
          { type: 'module' }
        );
        workerRef.current = worker;
        const offscreenCanvas = canvas.transferControlToOffscreen();
        worker.postMessage({ canvas: offscreenCanvas }, [offscreenCanvas]);
      } else {
        //fallback to normal canvas
        const ctx = canvas.getContext('2d');
        if (ctx) {
          draw(ctx);
        }
      }
    }
  }, []);

  return <canvas ref={canvasRef} {...rest} />;
};

export default OffCanvas;
