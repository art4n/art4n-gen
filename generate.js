import fs from "fs";
import { createCanvas, loadImage, CanvasRenderingContext2D } from "canvas";
import MersenneTwist from "mersenne-twister";

import { renderArt } from "./art4n";
import ns from "./n";

const run = async () => {
  const CANVAS_WIDTH = 2048;
  const CANVAS_HEIGHT = 2048;
  const CENTER = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2 };
  const CANVAS_MARGIN = 300;
  const CIRCLE_RADIUS = 650;

  for (let picIndex = 0; picIndex < 2; picIndex++) {
    const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    const ctx = canvas.getContext("2d");
    const n = ns[picIndex];

    const nSequence = n.sequence.replace(/,/g, "");
    const randomGen = new MersenneTwist(nSequence);

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    renderArt({
      ctx,
      n,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      randomGen,
    });

    console.log("writing ", picIndex);

    const out = fs.createWriteStream(__dirname + `/rects/${picIndex + 1}.png`);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on("finish", () => console.log("The PNG file was created."));

    await new Promise((resolve) => setTimeout(resolve, 500));
  }
};

run();
