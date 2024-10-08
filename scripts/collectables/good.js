//@ts-check

import { CollectableItem } from "./colectable-base.js";

export class SimpleGood extends CollectableItem {
  constructor(x = 0, y = 0) {
    super(x, y);
    this.radius = 10;
    this.despwnTime = 10 * 1000;
    this.spawnInTime = 5 * 1000;
    this.blink = {
      interval: 500,
      lastBlink: 0,
      isVisible: true,
    };

    this.DespwnWrningTime = 1000 * 3;
    this.lastAlpha = 0;
    this.alpha = 0;

    this.lifeTime = 0;
    this.color = "hsla(150, 100%, 50%, 0%";
  }
  update(elapsedTime) {
    this.lifeTime += elapsedTime;

    if (this.lifeTime < this.spawnInTime) {
      //not entirely spawned in
      this.alpha = Math.floor((this.lifeTime / this.spawnInTime) * 100);
    }
    if (this.lifeTime > this.despwnTime - this.DespwnWrningTime) {
      //this starts to blink
      //console.log("should blink rn");
      this.blink.lastblink += elapsedTime;
      if (this.blink.lastblink > this.blink.interval) {
        if (this.blink.isVisible) {
          //console.log("blink off");
          this.alpha = 0;
        } else {
          //console.log("blink on");
          this.alpha = 100;
        }
        this.blink.isVisible = !this.blink.isVisible;
        this.blink.lastBlink = 0;
      }
    }
    if(this.lifeTime > this.despwnTime) {
			this.alpha = 0;
			this.isCollectable = false;
		}
    this.color = `hsla(150,100%,50%,${this.alpha}%)`;
  }
}
