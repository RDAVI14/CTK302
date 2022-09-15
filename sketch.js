let f1,f2 ;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Sketch3D.otf");
  f2 = loadFont("assets/VIRTUALITYDEMO.otf");
  textAlign(CENTER);
}

function draw() {
background("black");
fill("white");
textFont(f1, 48) ;
text("hello there!", width / 2, 100);
textFont(f2, 24) ;
text("I am big Regg", width / 2, 200);
}
