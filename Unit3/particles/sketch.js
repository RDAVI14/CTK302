let cars = [];
let img;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
 
}

function draw() {
  background("white");
  image(img, 0, 0, 0, 0);
  fill("black");
  text(cars.length, 40, 40);

  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].opacity < 0) {
      cars.splice(i, 1);
    }
  }
}

function preload() {
  img = loadImage("assets/particles.jpg");
  
}

class Car {
  constructor() {
    //initialize your attributes here
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(-.2, .2), random(-10, -2));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.opacity = random(255);
  }

  // methods

  display() {
    textSize(40);
    text("cool", this.pos.x, this.pos.y);
    fill(this.r, this.g, this.b, this.opacity);
  }

  move() {
    this.pos.add(this.vel);
    this.opacity = this.opacity -= 1;
  }
}
