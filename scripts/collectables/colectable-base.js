//@ts-check
import { ctx } from "../Cmn/canvas.js";
export class CollectableItem {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.radius = 20;
    this.color = "hsl(150 100% 50%)";

    this.isCollectable = true;
    this.isCollected = false;
    this.value = 0;
  }

  update(elapsedTime) {}
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 10;
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
