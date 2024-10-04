//@ts-check

import { CollectableItem } from "./colectable-base.js";

export class SimpleGood extends CollectableItem {
  constructor(x = 0, y = 0) {
    super(x, y);
    this.radius = 10;
    this.despwnTime = 10 * 1000;
    this.spawnInTime = 5 * 1000;

    this.lastAlpha = 0;
    this.alpha = 0;

    this.lifeTime = 0;
    this.color = "hsla(150, 100%, 50%, 0%";
  }
  update(elapsedTime) {
    this.lifeTime += elapsedTime;

    if (this.lifeTime < this.spawnInTime){
        //not entirely spawned in
        this.alpha = Math.floor((this.lifeTime/this.spawnInTime) *100)
    this.color = `hsla(150,100%,50%,${this.alpha}%)`
    }
    
  }
}
