const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

 var particles = [];
var plinkos = [];
var cols = 5;
var rows = 5;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);


  newParticle();
  var spacing = width / cols;
  for (var j = 0; j < rows; j++){
    for(var i = 0; i< cols; i ++){
      var x = i * spacing;
      var y = spacing + j * spacing;
      var p =new plinko(x, y, 4);
      plinkos.push(p);
    }
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  for(var i = 0; i<particles.length;i++){
  particles[i].display();
  }
  for(var i = 0; i<plinkos.length;i++){
   plinkos[i].display();
  }
  
  if (frameCount % 60 == 0){
    newParticle();
  }
  

  drawSprites();
}
function newParticle(){
  var p = new particle(300, 50, 10);
  particles.push(p);
}