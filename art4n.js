import { roundRect, allInside, outsideOfCircle } from "./utils";
import chroma from "chroma-js";

const colorVariants = [
  { value: ["#454d66", "#309975", "#58b368", "#dad873"] },
  { value: ["#8a00d4", "#d527b7", "#f782c2", "#f9c46b"] },
  { value: ["#072448", "#54d2d2", "#ffcb00", "#f8aa4b"] },
  { value: ["#f7a400", "#f7a400", "#3e4491", "#292a73"] },
  { value: ["#492b7c", "#301551", "#ed8a0a", "#f6d912"] },
  { value: ["#ffa822", "#134e6f", "#ff6150", "#1ac0c6"] },
  { value: ["#343090", "#5f59f7", "#6592fd", "#44c2fd"] },
  { value: ["#f9b4ab", "#fdebd3", "#264e70", "#679186"] },
  { value: ["#AAB3AB", "#C4CBB7", "#EBEFC9", "#EEE0B7"] },
  { value: ["#DAD6CA", "#1BB0CE", "#4F8699", "#6A5E72"] },
  { value: ["#CC0C39", "#E6781E", "#C8CF02", "#F8FCC1"] },
  { value: ["#5E3929", "#CD8C52", "#B7D1A3", "#DEE8BE"] },
  { value: ["#B9D3B0", "#81BDA4", "#B28774", "#F88F79"] },
  { value: ["#555555", "#888888", "#aaaaaa", "#cccccc"] },
  { value: ["#F8F1F1", "#A3D2CA", "#5EAAA8", "#EB5E0B"] },
  { value: ["#EFEFEF", "#FFC947", "#185ADB", "#0A1931"] },
  { value: ["#EEEEEE", "#D3E0EA", "#1687A7", "#276678"] },
  { value: ["#053742", "#39A2DB", "#A2DBFA", "#E8F0F2"] },
  { value: ["#343A40", "#7952B3", "#FFC107", "#E1E8EB"] },
  { value: ["#FFFCAB", "#9AEBED", "#A275E3", "#FA86BE"] },
  { value: ["#085F63", "#49BEB7", "#FACF5A", "#FF5959"] },
  { value: ["#72D6C9", "#FFC785", "#DF7599", "#7189BF"] },
  { value: ["#3DB2FF", "#FFB830", "#FFEDDA", "#FF2442"] },
  { value: ["#EEEEEE", "#7971EA", "#A19882", "#666666"] },
  { value: ["#851D41", "#DB3056", "#FF6464", "#FFB99A"] },
  { value: ["#B7EFCD", "#4CD3C2", "#D6E0F0", "#FFaCaC"] },
  { value: ["#6886C5", "#FFACB7", "#FFE0AC", "#F9F9F9"] },
  { value: ["#393B44", "#8D93AB", "#D6E0F0", "#F1F3F8"] },
  { value: ["#F6A9A9", "#FFBF86", "#FFF47D", "#C2F784"] },
  { value: ["#FFA900", "#FF7600", "#CD113B", "#52006A"] },
  { value: ["#F4EA8E", "#FFD31D", "#4A3F35", "#000000"] },
  { value: ["#BB2205", "#F6830F", "#0E918C", "#D2D3C9"] },
  { value: ["#FF2442", "#FFB830", "#FFEDDA", "#3DB2FF"] },
  { value: ["#00A19D", "#FFF8E5", "#FFB344", "#E05D5D"] },
  { value: ["#ded93e", "#8bcd50", "#1d741b", "#8fa01f"] },
  { value: ["#cfe9ef", "#fac12f", "#9de89c", "#65d4ee"] },
  { value: ["#21BF73", "#B0EACD", "#F9FCFB", "#FD5E53"] },
  { value: ["#A2AEBB", "#D00000", "#FFBA08", "#3F88C5"] },
  { value: ["#485696", "#E7E7E7", "#F9C784", "#FC7A1E"] },
  { value: ["#44FCFF", "#D783FF", "#041892", "#FEFFFF"] },
  { value: ["#FA7CCF", "#FCD076", "#8C26F7", "#43FBFD"] },
  { value: ["#7E5686", "#A5AAD9", "#E8F9A2", "#F8A13F"] },
  { value: ["#2EB3D3", "#DED93D", "#D6D8D8", "#CD2B15"] },
  { value: ["#9A60C1", "#AC92FA", "#96EBF0", "#48C3BE"] },
  { value: ["#FFCB91", "#FFEFA1", "#94EBCD", "#48C3BE"] },
  { value: ["#FFB319", "#FFE194", "#E8F6EF", "#B8DFD8"] },
  { value: ["#FF4848", "#FFD371", "#C2FFD9", "#9DDAC6"] },
  { value: ["#7C83FD", "#96BAFF", "#7DEDFF", "#88FFF7"] },
  { value: ["#FFDFD3", "#FEC8D8", "#D291BC", "#957DAD"] },
  { value: ["#1C0113", "#6B0103", "#A30006", "#C21A01"] },
  { value: ["#8DCCAD", "#988864", "#FEA6A2", "#F9D6AC"] },
  { value: ["#B6D8C0", "#C8D9BF", "#DADABD", "#ECDBBC"] },
  { value: ["#FFEDBF", "#F7803C", "#F54828", "#2E0D23"] },
  { value: ["#FFDFD3", "#FEC8D8", "#D291BC", "#957DAD"] },
  { value: ["#E4E4C5", "#B9D48B", "#8D2036", "#CE0A31"] },
  { value: ["#FF003C", "#FF8A00", "#FABE28", "#88C100"] },
  { value: ["#222222", "#444444", "#666666", "#888888", "#242624"] },
  { value: ["#FFF3DB", "#E7E4D5", "#D3C8B4", "#C84648"] },
  { value: ["#111625", "#341931", "#571B3C", "#7A1E48"] },
  { value: ["#F2F4C0", "#E4E978", "#CAD315", "#F9FCFB"] },
  { value: ["#F6D76B", "#FF9036", "#D6254D", "#FF5475"] },
  { value: ["#11644D", "#A0B046", "#F2C94E", "#F78145"] },
  { value: ["#FCECDD", "#FFC288", "#FEA82F", "#FF6701"] },
  { value: ["#FEF7DC", "#E6DDC6", "#C2B8A3", "#A19882"] },
];

const nrOfRectangleVariants = [
  { value: 125, min: 1, max: 5 },
  { value: 250, min: 6, max: 10 },
  { value: 500, min: 11, max: 14 },
];

const shapeVariants = [
  { value: "ring", min: 1, max: 2 },
  { value: "square", min: 3, max: 5 },
  { value: "circle", min: 6, max: 7 },
  { value: "ethereum", min: 8, max: 8 },
  { value: "vertical-line", min: 9, max: 9 },
  { value: "horizontal-line", min: 10, max: 10 },
  { value: "vertical-triangles", min: 11, max: 11 },
  { value: "horizontal-triangles", min: 12, max: 12 },
  { value: "triangle", min: 13, max: 13 },
  { value: "all-over", min: 14, max: 14 },
];

const gradientVariants = [0, 0.5, 0.5, 1, 1, 1];
const sizeVariants = [0.1, 0.3, 0.5];

const getColor = (randNumber) => {
  const percentage = (randNumber - 14) / 196.0;
  const index = Math.max(
    0,
    Math.min(
      Math.floor(percentage * colorVariants.length),
      colorVariants.length - 1
    )
  );

  return colorVariants[index].value;
};

export const renderArt = ({ ctx, width, height, n, randomGen }) => {
  const random = (min, max) => {
    return randomGen.random() * (max - min) + min;
  };

  const randomInt = (min, max) => {
    return Math.floor(randomGen.random() * (max - min + 1) + min);
  };

  const getVariant = (variants, randNumber) => {
    for (let i = 0; i < variants.length; i++) {
      if (randNumber >= variants[i].min && randNumber <= variants[i].max) {
        return variants[i].value;
      }
    }

    return variants[variants.length - 1].value;
  };

  const randomFromArray = (items, randNum) => {
    const index = Math.min(
      Math.floor(
        (randNum !== undefined ? randNum : randomGen.random()) * items.length
      ),
      items.length - 1
    );

    return items[index];
  };

  const CANVAS_WIDTH = width;
  const CANVAS_HEIGHT = height;
  const CENTER = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2 };
  const sizeFactor = CANVAS_WIDTH / 1200;

  const gradient = randomFromArray(
    gradientVariants,
    Math.min(n.number_1 / 14, 1)
  );

  const size = randomFromArray(sizeVariants);

  const colorRand = Math.min((n.number_1 * 14 + n.number_2) / 196, 1);
  const nrOfRectanglesRand = Math.min(n.number_3 / 14, 1);
  const shapeRand = Math.min(n.number_4 / 14, 1);
  const rotateRand = n.number_5 < 3 ? 0.4 : 0;

  const onlySquares = n.number_8 > 11;
  const colors = getColor(n.number_1 * 14 + n.number_2);
  const nrOfRectangles = getVariant(nrOfRectangleVariants, n.number_3);
  const shape = getVariant(shapeVariants, n.number_4);
  let radius = random(0.6, 1) * CANVAS_WIDTH * 0.45;
  const lineWidth = random(0.4, 1) * CANVAS_WIDTH * 0.45;

  if (
    shape === "vertical-line" ||
    shape === "horizontal-line" ||
    shape === "horizontal-triangles" ||
    shape === "vertical-triangles" ||
    shape === "all-over"
  ) {
    radius = CANVAS_WIDTH * 0.6;
  }

  let strokeWidth = 0.65 * sizeFactor * 6;

  if (n.number_7 < 5) {
    strokeWidth = 0;
  }

  const maxSize = Math.round((0.2 + size * 0.8) * sizeFactor * 500);

  const randomColor = () =>
    colors[Math.floor(randomGen.random() * colors.length)];

  const bgColor = chroma(`${randomColor()}25`).rgb();
  const opacity = chroma(`${randomColor()}25`).alpha();

  const flatBgColor = chroma([
    opacity * bgColor[0] + (1 - opacity) * 255,
    opacity * bgColor[1] + (1 - opacity) * 255,
    opacity * bgColor[2] + (1 - opacity) * 255,
  ]).hex();

  ctx.fillStyle = colors.length === 5 ? colors[4] : flatBgColor;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  if (n.number_3 > 10) {
    ctx.globalAlpha = 0.85;
  } else {
    ctx.globalAlpha = 1;
  }

  for (let i = 0; i < nrOfRectangles; i++) {
    const lastX = random(CENTER.x - radius, CENTER.x + radius);
    const lastY = random(CENTER.y - radius, CENTER.y + radius);

    const dx = random(15 * sizeFactor, Math.max(maxSize, 15 * sizeFactor));
    const dy = onlySquares
      ? dx
      : random(15 * sizeFactor, Math.max(maxSize, 15 * sizeFactor));

    const rect = [
      { x: lastX, y: lastY },
      { x: lastX + dx, y: lastY },
      { x: lastX + dx, y: lastY + dy },
      { x: lastX, y: lastY + dy },
    ];

    if (shape === "square") {
      if (
        !allInside(rect, [
          { x: CENTER.x - radius, y: CENTER.y - radius },
          { x: CENTER.x - radius, y: CENTER.y + radius },
          { x: CENTER.x + radius, y: CENTER.y + radius },
          { x: CENTER.x + radius, y: CENTER.y - radius },
        ])
      ) {
        i--;
        continue;
      }
    }

    if (shape === "circle") {
      if (outsideOfCircle(rect, CENTER, radius)) {
        i--;
        continue;
      }
    }

    if (shape === "ethereum") {
      if (
        !allInside(rect, [
          { x: CENTER.x, y: CENTER.y + radius },
          { x: CENTER.x + radius / 1.75, y: CENTER.y },
          { x: CENTER.x, y: CENTER.y - radius },
          { x: CENTER.x - radius / 1.75, y: CENTER.y },
        ])
      ) {
        i--;
        continue;
      }
    }

    if (shape === "vertical-triangles") {
      if (
        !allInside(rect, [
          { x: CENTER.x - lineWidth / 2, y: CENTER.y + radius },
          { x: CENTER.x + lineWidth / 2, y: CENTER.y + radius },
          { x: CENTER.x - lineWidth / 2, y: CENTER.y - radius },
          { x: CENTER.x + lineWidth / 2, y: CENTER.y - radius },
        ])
      ) {
        i--;
        continue;
      }
    }
    if (shape === "vertical-line") {
      if (
        !allInside(rect, [
          { x: CENTER.x - lineWidth / 2, y: CENTER.y + radius },
          { x: CENTER.x - lineWidth / 2, y: CENTER.y - radius },
          { x: CENTER.x + lineWidth / 2, y: CENTER.y - radius },
          { x: CENTER.x + lineWidth / 2, y: CENTER.y + radius },
        ])
      ) {
        i--;
        continue;
      }
    }

    if (shape === "triangle") {
      if (
        !allInside(rect, [
          { x: CENTER.x, y: CENTER.y - radius },
          { x: CENTER.x - radius, y: CENTER.y + radius },
          { x: CENTER.x + radius, y: CENTER.y + radius },
        ])
      ) {
        i--;
        continue;
      }
    }

    if (shape === "horizontal-triangles") {
      if (
        !allInside(rect, [
          { x: CENTER.x + radius, y: CENTER.y - lineWidth / 2 },
          { x: CENTER.x + radius, y: CENTER.y + lineWidth / 2 },
          { x: CENTER.x - radius, y: CENTER.y - lineWidth / 2 },
          { x: CENTER.x - radius, y: CENTER.y + lineWidth / 2 },
        ])
      ) {
        i--;
        continue;
      }
    }

    if (shape === "horizontal-line") {
      if (
        !allInside(rect, [
          { x: CENTER.x + radius, y: CENTER.y - lineWidth / 2 },
          { x: CENTER.x - radius, y: CENTER.y - lineWidth / 2 },
          { x: CENTER.x - radius, y: CENTER.y + lineWidth / 2 },
          { x: CENTER.x + radius, y: CENTER.y + lineWidth / 2 },
        ])
      ) {
        i--;
        continue;
      }
    }

    if (shape === "ring") {
      if (
        !(
          outsideOfCircle(rect, CENTER, radius * 0.9) &&
          !outsideOfCircle(rect, CENTER, radius)
        )
      ) {
        i--;
        continue;
      }
    }

    const randomGrad = randomGen.random();
    let color = ctx.createLinearGradient(lastX, lastY, lastX + dx, lastY + dy);

    if (randomGrad < 0.25) {
      color = ctx.createLinearGradient(lastX, lastY + dy, lastX + dx, lastY);
    } else if (randomGrad < 0.5) {
      color = ctx.createLinearGradient(lastX + dx, lastY, lastX, lastY + dy);
    } else if (randomGrad < 0.5) {
      color = ctx.createLinearGradient(lastX + dx, lastY + dy, lastX, lastY);
    }

    const mainColor = randomColor();
    color.addColorStop(0, mainColor);
    color.addColorStop(gradient, randomColor());

    // Add rotation
    ctx.rotate((random(-rotateRand, rotateRand) * 180 * Math.PI) / 180);
    ctx.translate(
      (random(-rotateRand, rotateRand) * CANVAS_WIDTH) / 2,
      (random(-rotateRand, rotateRand) * CANVAS_WIDTH) / 2
    );

    roundRect(
      ctx,
      lastX,
      lastY,
      dx,
      dy,
      n.number_6 >= 12
        ? 0
        : random(
            Math.min(5 * sizeFactor, Math.abs(dx / 2), Math.abs(dy / 2)),
            Math.min(20 * sizeFactor, Math.abs(dx / 2), Math.abs(dy / 2))
          ),
      color,
      strokeWidth,
      mainColor
    );

    // Reset transformation matrix to the identity matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
};
