var myCanvas = null;

// Declare kinectron 
var kinectron = null;

function setup() {
  myCanvas = createCanvas(500, 500);
  background(0);

  // Define and create an instance of kinectron
  kinectron = new Kinectron("kinectron", { // username matches application display, default is kinectron 
    "host": " ", // host matches application display
    "port": "9001", // port matches application display
    "path": "/" // path defaults to /
  });

  // CONNECT TO MIRCROSTUDIO
  // kinectron = new Kinectron("kinectron", { 
  //   "host": "128.122.151.151", 
  //   "port": "9001", 
  //   "path": "/"
  // });

  // Connect with application over peer
  kinectron.makeConnection();

  // Set callbacks
  kinectron.setRGBCallback(drawFeed);
  kinectron.setDepthCallback(drawFeed);
  kinectron.setInfraredCallback(drawFeed);
}

function draw() {

}

// Choose camera to start based on key pressed
function keyPressed() {
  if (keyCode === ENTER) {
    kinectron.startRGB();
  } else if (keyCode === UP_ARROW) {
    kinectron.startDepth();
  } else if (keyCode === DOWN_ARROW) {
    kinectron.startInfrared();
  } else if (keyCode === RIGHT_ARROW) {
    kinectron.stopAll();
  }
}

function drawFeed(img) {
  // Draws feed using p5 load and display image functions  
  loadImage(img.src, function(loadedImage) {
    image(loadedImage, 0, 0);
  });
}