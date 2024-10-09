//@ts-check
import { canvas, ctx } from "./Cmn/canvas.js";
import { Player } from "./player.js";

export class GameManager {
  constructor() {
    this.players = [];
    this.collectibles = [];
    this.enemies = [];

    this.isGameOver = false;

    this.goodSpawn = {
      lastTime: 0,
      nextTime: Math.min(rand(15), 5),
      getNewNext: function () {
        this.nextTime = Math.min(rand(15), 5);
      },
    };
  }

  initialize() {
    this.players = [];
    let p1 = new Player(canvas.width / 2, canvas.height / 2);
    p1.x -= p1.radius / 2;
    p1.y -= p1.radius / 2;
    this.players.push(p1);
  }

  update(elapsedTime) {
    this.players.forEach((p) => {
      p.update(elapsedTime);
    });
    this.collectibles.forEach((c) => {
      c.update(elapsedTime);
    });
  }
  draw() {
    this.players.forEach((p) => {
      p.draw();
    });
    this.collectibles.forEach((c) => {
      c.draw();
    });
  }
}

function rand(max = 100) {
  let r = Math.floor(Math.random() * max);
  return r;
}
