/*
EL PUSH VA PRIMERO Y LUEGO EL NEW BOL, si lo haces al revez el primer elemento del array se buguea y queda con 2 propiedades del class sumadas? es algo raro ni idea
*/


//forma 2 (descargando fuente)
// let myFont;
// function preload() {
//   myFont = loadFont('fonts/RubikMoonrocks-Regular.ttf');
// }

let bols = [];
let texto = "Linked In 2023"
let cantidad = 50;
let cantidadMaxima = 400;

function setup() {
  createCanvas(windowWidth, windowWidth);
}

//creando bolas en donde esta maus
function mousePressed() {
  for (i = 0; i < cantidad; i++) {
    bols.push(new BOL(mouseX, mouseY));
  }
}

function draw() {

  if (mouseIsPressed === true) {
    if (mouseButton === RIGHT) {
      print('si')
      bols = []
    }
  }
  
  // limitar cant de bolas totales
if(bols.length > cantidadMaxima){
bols.splice(0,cantidad)
}
  
  background(0,119,181);

  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(15);

  // textFont(myFont); //forma 2
  textFont("Rubik Moonrocks"); //forma 1
  
  
  strokeWeight(1)
    textSize(48)
     text(texto,mouseX,mouseY);
  
  
  for (i = 0; i < bols.length; i++) {
    bols[i].show();
    bols[i].move();
    bols[i].bounce();
    
    
  }
}

class BOL {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.speedx = random(-3, 3);
    this.speedy = random(-3, 3);
    //this.cl = random(["cyan", "red", "pink", "blue", "yellow", "green", "purple", "orange", "coral", "indigo", "white"])
    //this.cl = "white"
    // this.cl = random(["white","black"])
    this.cl = "black"
    
  }

  show() {
    noFill();
    stroke(this.cl);
    strokeWeight(5);
    ellipse(this.x, this.y, this.r);
  }
  move() {
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
  }
  bounce() {
    if (this.x > width - this.r / 2 || this.x < 0 + this.r / 2) {
      this.speedx = -this.speedx;
    }

    if (this.y > height - this.r / 2 || this.y < 0 + this.r / 2) {
      this.speedy = -this.speedy;
    }
  }
}