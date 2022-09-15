function setup() {
  createCanvas(720, 400);
}




function draw() {
  background("lightblue");
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
  quad(189, 80, 216, 80, 216, 360, 144, 360);

  fill("green");
  ellipse(200, 120, 200);

  fill(100, 200, 80);
  rect(0, 360, 720, 40);

  fill("light blue");
  text("a summer scene", 390, 84);

  
   fill("black")
  text(mouseX +", "+ mouseY, 20, 20) ;  
  
}

function mouseReleased() {
  print(mouseX +"," + mouseY) ;
}


