
let c;
let y;
let ypos = 0;
var mic;
let mouthMove;
function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();  
  colorMode(HSB);
  c = 0;

}

function draw() {  
 //console.log("mic level: " + mic.getLevel());
 //console.log("mouse X is: " + mouseX);

  
  //moves mouth using mic
  mouthMove = map(mic.getLevel(),0,1,108,214);
  
  //moves eyes using mouse position
  //Eyes size changes
  eyesMove = mouseX;
  
  
  background(100,50,100);
  drawBody();
 drawLegs();
  drawMouth(mouthMove); // uses mic values
  drawEyes(eyesMove);  // uses mouseX values
  
}

function drawBody()
{
  //body 
  noStroke()
  c+=9;
  c = c%360;
  fill(c,50,80);
  ellipse(width * 0.50,width * 0.48,height * 0.45,sin(ypos) * 100);
  ypos += 0.005;
  

}

function drawLegs()
{
   let r = color('#4E9CAF');
  fill(r);
  rect(width * 0.30, width * 0.58, width * 0.40,height *0.10,height *0.50);

}

function drawMouth(){

  //mouth
  ellipse(width * 0.50,width * 0.48 , height * 0.15, height *0.40  * mic.getLevel());
  
}

function drawEyes(){  
  //eyes
 
  fill(50);  
  circle(width * 0.40,width * 0.38,height * 0.10 + eyesMove/10);
  fill(50);  
  circle(width * 0.60,width * 0.38,height * 0.10 + eyesMove/10); 
   
}

