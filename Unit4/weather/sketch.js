// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidty = 0;
let img;
let bg;

function setup() {
  createCanvas(720, 400);

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Chicago,IL,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US

  // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=7a782ed17ba5a1f356e3ea56735a65c5";

  let myTotalString = myCityString + myIDString;

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidty = weather.main.humidty;
}


function preload() {
  img = loadImage("assets/chicago.jpeg");
  
}

function draw() {
  switch (state) {
    case 0:
      if (weather) {
        state = 1;
      }
      break;

      
      
      
      
      
      
    case 1:
      background(img)
      fill("white");
      textFont("helvetica");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is" + temperature, 20, 60);
      text("humidty is" + humidty, 20, 80);

      // cloud
      fill("lightblue");
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
