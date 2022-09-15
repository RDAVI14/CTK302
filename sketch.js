let downtown ;

function preload(){
  downtown = loadSound("assets/downtown.mp3");
}


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  downtown.play();
}



function draw() {
background("black");
fill("white")
text("the name of the song is downtown and I liked it because the beat was cool", 10,10,400,400)
}

function mouseReleased() {
  if (downtown.isPlaying()) {
    downtown.pause();
  } else {
    downtown.play();
  }
}







function touchStarted() {
  getAudioContext().resume();
}
