function setup() {
  createCanvas(1000, 800);
  //  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    background("rgb(28,42,228)");
  } else {
    background("lightblue");
  }

  // Sets the screen to be 720 pixels wide and 400 pixels high

  // noStroke();

  // fill(204);
  // triangle(18, 18, 18, 360, 81, 360);

  // fill(102);
  // rect(81, 81, 63, 63);

  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);

  // fill(255);
  // ellipse(252, 144, 72, 72);

  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);

  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);

  fill("yellow");
  ellipse(0, 0, 200, 200);

  fill(255, 50);
  ellipse(400, 90, 400, 300);

  // house
  fill("red");
  triangle(400, 200, 600, 200, 500, 100);

  fill(100, 80, 80);
  rect(430, 200, 140, 180);

  fill("brown");
  //quad(189, 80, 216, 80, 216, 360, 144, 360);

  fill("green");
  //ellipse(200, 120, 200);

  fill(100, 200, 80);
  rect(0, 360, 720, 40);

  fill("light blue");

  // character will be here!
  if (mouseIsPressed) {
    fill("brown");
    ellipse(83, 207, 100, 100);
    rect(57, 246, 50, 100);
    rect(28, 270, 110, 20);
    rect(49, 328, 20, 60);
    rect(95, 328, 20, 60);
    fill("white");
    ellipse(62, 196, 20, 30);
    ellipse(102, 196, 20, 30);
  } else {
    fill("brown");
    ellipse(83, 207, 100, 100);
    fill("white");
    rect(54, 190, 20, 1);
    rect(90, 190, 20, 1);
    fill("rgb(104,3,3)");
    rect(57, 246, 50, 100);
    rect(28, 270, 110, 20);
    rect(49, 328, 20, 60);
    rect(95, 328, 20, 60);
  }

  text(
    "The name of the character is OwlatNight.\n His power is being able to adjust and get things done no matter it being day or especially at night time",
    10,
    10,
    400,
    400
  );

  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);
}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}

//9/1/2022: 1 hour to figure out my idea
//9/5/2022: 1 hour of figuring where I would start
//9/10/2022: 2 hours working on my coding
//9/14/2022: 5 hours to actually restart my code and add other things


