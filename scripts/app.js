//@ts-check
import { canvas, ctx } from "./Cmn/canvas.js";
import { Player } from "./player.js";
import { SimpleGood } from "./collectables/good.js";
let player = new Player();

let item1= new SimpleGood(canvas.width/2,canvas.height/2)

let lastTimeStamp = 0;

function gameLoopyLoop(timestamp) {
  let elapsedTime = timestamp - lastTimeStamp;
  lastTimeStamp = timestamp;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.draw();
  
  item1.update(elapsedTime);
  item1.draw();
  
  window.requestAnimationFrame(gameLoopyLoop);
}

window.requestAnimationFrame(gameLoopyLoop);
