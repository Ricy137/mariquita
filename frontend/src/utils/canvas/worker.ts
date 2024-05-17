import { drawIce } from '.';

self.onmessage = function (event) {
  const { canvas } = event.data;
  const ctx = canvas.getContext('2d');

  drawIce(ctx, 1024, 700);
};
