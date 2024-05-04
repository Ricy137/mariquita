import { sampleSize } from 'lodash-es';
import { inbound } from '@/utils/canvas';
import { hexToRgb, colorInterpration } from '@/utils/canvas/colors';
import { Vector, randomVectors } from '@/utils/canvas/vector';
import { randomWithRange } from '@/utils/random';

let tick = 0;
let iceNodes: number[][] = [];
let iceField: Ice[] = [];

const maxTicks = 200;
const iterations = 5;
const pattele = [
  '#ffffff',
  '#FFFEE9',
  '#FFFDD3',
  '#FFFCBD',
  '#FFFCB2',
  '#FEFBA1',
  '#FEF7D4',
].map(hexToRgb);

class Ice {
  constructor(public activePoints: Vector[], public iteractions = 3) {}
  next() {
    if (!this.iteractions) return;
    this.iteractions -= 1;

    const newPoints: Vector[] = [];

    this.activePoints.forEach((point) => {
      const [x, y] = point;

      iceNodes[x][y] += randomWithRange(0.1, 0);

      const points: Vector[] = [
        [x, y],
        [x, y + 1],
        [x + 1, y],
        [x, y - 1],
        [x - 1, y],
        [x + 1, y + 1],
        [x + 1, y - 1],
        [x - 1, y + 1],
        [x - 1, y - 1],
      ];

      newPoints.push(
        ...points
          .filter((v) => !newPoints.some((n) => n[0] === v[0] && n[1] === v[1]))
          .filter((v) => inbound(v))
          .filter(([x, y]) => {
            if (iceNodes[x][y] === 0) return true;
            if (iceNodes[x][y] >= 1) return false;
            if (iceNodes[x][y] > 0.8) return randomWithRange() > 0.5;
            else return randomWithRange() > 0.2;
          })
      );
    });

    this.activePoints = sampleSize(newPoints, 200);
  }
}

//TODO: break this function into smaller functions
export const drawIce = (
  ctx: CanvasRenderingContext2D,
  width = 1024,
  height = 700
) => {
  const data = ctx.createImageData(width, height);
  iceNodes = new Array(width)
    .fill(0)
    .map((_, i) => i)
    .map((i) => new Array(height).fill(0));
  function updateCanvas() {
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const iceNode = iceNodes[x][y];
        const [r, g, b] = colorInterpration(pattele, iceNode);

        const pixelindex = (y * width + x) * 4;
        data.data[pixelindex] = r;
        data.data[pixelindex + 1] = g;
        data.data[pixelindex + 2] = b;
        data.data[pixelindex + 3] = 255;
      }
    }

    ctx.putImageData(data, 0, 0);
  }

  const frame = () => {
    tick++;
    for (let i = 0; i < iterations; i++) {
      iceField.forEach((i) => {
        i.next();
        i.next();
        i.next();
        i.next();
      });
    }
    updateCanvas();

    if (tick >= maxTicks) throw new Error('done');
  };

  const start = () => {
    iceField = [
      new Ice(
        [
          [0, Math.trunc(randomWithRange(width))],
          [Math.trunc(randomWithRange(width)), 0],
          [width - 1, Math.trunc(randomWithRange(height))],
          [Math.trunc(randomWithRange(width)), height - 1],
        ],
        maxTicks * iterations
      ),
      new Ice(randomVectors(40), (maxTicks * iterations) / 2),
      new Ice(randomVectors(3), (maxTicks * iterations) / 1.5),
    ];
    let frameCount = 0;
    const startFrame = () => {
      try {
        frameCount++;
        requestAnimationFrame(() => {
          if (!(frameCount % 3)) {
            frame();
          }
          // frame();
          startFrame();
        });
      } catch (e) {}
    };
    startFrame();
  };

  start();
};
