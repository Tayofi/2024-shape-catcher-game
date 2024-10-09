//@ts-check
import { canvas, ctx } from "./Cmn/canvas.js";
import { GameManager } from "./game-manager.js";

let game = new GameManager();
game.initialize();

let lastTimeStamp = 0;

function gameLoopyLoop(timestamp) {
  let elapsedTime = timestamp - lastTimeStamp;
  lastTimeStamp = timestamp;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.update(elapsedTime);
  game.draw();

  window.requestAnimationFrame(gameLoopyLoop);
}

window.requestAnimationFrame(gameLoopyLoop);
