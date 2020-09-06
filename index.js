/*
    GitHub : https://github.com/niirmaaltwaatii/CanvaLoons
    N11rm44L 7w44711
*/

const cvs = document.querySelector("canvas");
const ctx = cvs.getContext("2d");
var w = window.innerWidth;
var h = window.innerHeight;
cvs.width = w;
cvs.height = h;

// colours
var clrs =  ["#234","lime","gold","red","blue","teal"];

// canvastyles
ctx.strokeStyle = "silver";
ctx.fillStyle = "#234";
ctx.lineWidth = "5";

// ballons array
carray = [];

// object properties 
function Circle(x,y,r,dx,dy){
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;

    // draw ballons
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = clrs[Math.floor(Math.random() * clrs.length)];
        ctx.arc(this.x,this.y,this.r,0,Math.PI *2,false);
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x,this.y+75)
        ctx.stroke();
        ctx.fill();
    }
    //update ballons
    this.update = function(){
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
        if(this.x-this.r < 0 || this.x+this.r >= w){
            this.dx = -this.dx;
        }
        if(this.y-this.r < 0 || this.y+this.r >= h){
            this.dy = -this.dy;
        }
    }
    
}

// create random ballons & push to an array
for(let i=0;i<40;i++){
    var r = 10 + Math.random() * 30;
    var rw = w-r;
    var rh = h-r;
    var x = (Math.random() * rw);
    var y = (Math.random() * rh);
    var dx = Math.random() * 5;
    var dy = Math.random() * 5;
    var circle = new Circle(x,y,r,dx,dy);
    carray.push(circle);
}

// draw & update all ballons from an array
function execute(){
    requestAnimationFrame(execute);
    ctx.clearRect(0,0,w,h);
    for(let i=0;i<carray.length;i++){
    carray[i].update();
    }
}
execute();