let x = 0 ; 

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100) ;
  text("woohoo", x, 100) ;
  x += 5 ;
  if (x > width) {
    x = 0 ; 
  }

}
