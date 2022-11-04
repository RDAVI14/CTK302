let cars = [];
let beePos;
let state = 0;
let timer = 0;
let start = 30;
let stop = 330;
let level = 1;
let img;
let ghost;
let dreams;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  angleMode(DEGREES);
  dreams.play();

  // Spawn objects

  for (let i = 0; i < 10; i++) {
    cars.push(new Car());
  }

  // initialize the "frog position" vector
  beePos = createVector(width / 2, height - 80);
}

function draw() {
  switch (state) {
    case 0: // menu screen
      text("click to start", width / 2, height / 2);
      break;

    case 1: // game screen
      game();
      timer++;
      if (timer > 15 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: // win screen
      background(100);
      fill("white");
      text("you won!", width / 2, height / 2);

      break;

    case 3: // lose screen
      background(100);
      text("you lost!:(", width / 2, height / 2);
      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1; // go to game
      break;

    case 2: // win state
      resetTheGame();
      state = 0;
      break;

    case 3: // lose state
      resetTheGame();
      state = 0;
      break;

  }
}



function preload() {
  img = loadImage("assets/skyline-chicago.jpeg");
  ghost = loadImage("assets/ghost.jpeg");
  dreams = loadSound("assets/dreams.mp3")

}

function game() {
  background("grey");
  image(img, width / 2, height / 2, width, height);
  //operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    // collision detection
    if (cars[i].pos.dist(beePos) < 30) {
      cars.splice(i, 1);
    }
  }

  if (cars.length <= 0) {
    timer = 0;
    state = 2;
    level = level + 1;
  }

  // add a "bee"
  fill("yellow");
  arc(beePos.x, beePos.y, 50, 50, start, stop, PIE);

  checkForKeys();
  fill("red");
  text("level = " + level, 40, 40);

  // game music
  function mouseReleased() {
    if (dreams.isPlaying()) {
      dreams.pause();
    } else {
      dreams.play();
    }
  }
}

function resetTheGame() {
  cars = [];
  timer = 0;
  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    beePos.x -= 5;
    start = -135;
    stop = 135;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    beePos.x += 5;
    start = 30;
    stop = 330;
  }
  if (keyIsDown(UP_ARROW)) {
    beePos.y -= 5;
    start = -30;
    stop = 220;
  }
  if (keyIsDown(DOWN_ARROW)) {
    beePos.y += 5;
    start = -225;
    stop = 45;
  }
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100); // initialize your attributes here
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(20, 50);
  }
  // methods

  display() {
    // this can be text, images, or shapes
    switch (level) {
      case 1:
        fill(this.r, this.g, this.b, this.o);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
        break;
      case 2:
        image(ghost, this.pos.x, this.pos.y, this.size, this.size);
        break;
      default:
        fill(this.r, this.g, this.b, this.o);
        rect(this.pos.x, this.pos.y, this.size, this.size);
        break;
    }
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
