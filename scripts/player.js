//@ts-check
import { canvas, ctx } from "./Cmn/canvas.js";
export class Player{
    constructor(x=0, y=0){
        this.x=x;
        this.y=y;
        
        this.speed=1
        
        
        
        this.keybinding ={
            up : "KeyW",
            down : "KeyS",
            left : "KeyA",
            right: "KeyD",
        };


        this.moving ={up:false,
            down:false,
            right:false,
            left:false

        }
        this.wireUpKeyboard();

this.radius = 50
    }

wireUpKeyboard(){
    window.addEventListener("keydown", (e) => {
//console.log(e);

switch(e.code){
    case this.keybinding.up:
        this.moving.up=true;
        break;
        case this.keybinding.down:
        this.moving.down=true;
        break;
        case this.keybinding.right:
        this.moving.right=true;
        break;
        case this.keybinding.left:
        this.moving.left=true;
        break;
}
    


    });
    window.addEventListener("keyup", (e) => {
        //console.log(e);
        switch(e.code){ 
        case this.keybinding.up:
            this.moving.up=false;
            break;
            case this.keybinding.down:
            this.moving.down=false;
            break;
            case this.keybinding.right:
            this.moving.right=false;
            break;
            case this.keybinding.left:
            this.moving.left=false;
            break;
        }
            });
}

    update(){
let dirY=0;
let dirX=0;

if (this.moving.down) {
    dirY=1;
}
if (this.moving.up) {
    dirY=-1;
}
if (this.moving.up&&this.moving.down) {
    dirY=0;
}
if (this.moving.left) {
    dirX=-1;
}
if (this.moving.right) {
    dirX=1;
}
if (this.moving.left&&this.moving.right) {
    dirX=0;
    }
this.x += this.speed * dirX;
this.y += this.speed * dirY;
}

    draw(){
        ctx.beginPath();
ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
ctx.lineWidth = 10;
ctx.strokeStyle = `hsl(284 100% 80%)`;
ctx.stroke();
    };

}
