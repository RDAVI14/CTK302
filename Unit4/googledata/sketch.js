var bubbles = [];
let url = "";

function setup() {
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  let key = "1O1nOKzOA_UyhEhUnfg_3b_0qJ8-ybDg6WdGrof8cUCM"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["what is your favorite tv show?"],
        data[i]["which one would you rather watch?"],
        data[i]["what's the best holiday?"]
      )
    ); // THESE NEED TO MATCH SPREADSHEET
  }
}

function draw() {
  background("green");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(show, watch, holiday) {
    // only the order of these parameters matters!
    this.show = show;
    this.watch = watch;
    this.holiday = holiday;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("yellow");
    noFill();
    ellipse(this.pos.x, this.pos.y + 10, 120, 120);
    fill("white");
    text(
      this.show + "\n" + this.watch + "\n" + this.holiday,
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x= 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y= 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
