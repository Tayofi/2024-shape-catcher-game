//@ts-check
import { canvas, ctx } from "./Cmn/canvas.js";
import { Player } from "./player.js";
let player = new Player();


let lastTimeStamp =0;

function gameLoopyLoop (timestamp) {
let elapsedTime = timestamp-lastTimeStamp;
lastTimeStamp=timestamp;
ctx.clearRect(0,0, canvas.width, canvas.height);
player.update();
player.draw();
window.requestAnimationFrame(gameLoopyLoop);

}

window.requestAnimationFrame(gameLoopyLoop);
