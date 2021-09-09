export function roundRect(
  ctx,
  x,
  y,
  width,
  height,
  radius,
  fill,
  stroke,
  strokeFill
) {
  if (typeof stroke == "undefined") {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.lineWidth = stroke;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
  }
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
}

export const outsideOfCircle = (rect, center, radius) => {
  return (
    Math.hypot(rect[0].x - center.x, rect[0].y - center.y) > radius ||
    Math.hypot(rect[1].x - center.x, rect[1].y - center.y) > radius ||
    Math.hypot(rect[2].x - center.x, rect[2].y - center.y) > radius ||
    Math.hypot(rect[3].x - center.x, rect[3].y - center.y) > radius
  );
};

export function allInside(points, vs) {
  for (let i = 0; i < points.length; i++) {
    if (!inside(points[i], vs)) {
      return false;
    }
  }

  return true;
}

export function inside(point, vs) {
  // ray-casting algorithm based on
  // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html

  var x = point.x,
    y = point.y;

  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    var xi = vs[i].x,
      yi = vs[i].y;
    var xj = vs[j].x,
      yj = vs[j].y;

    var intersect =
      yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
}
