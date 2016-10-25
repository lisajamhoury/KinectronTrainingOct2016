// Run with simplehttpserver for image to load properly. http://www.andyjamesdavies.com/blog/javascript/simple-http-server-on-mac-os-x-in-seconds

var myCanvas = null;
var beach;
var img;
var myDiv;

var processing = false;

// Declare Kinectron
var kinectron = null;

function preload() {
  beach = loadImage("images/beach.png");
}

function setup() {
  myCanvas = createCanvas(640, 426);
  background(255);

  // Define and create an instance of kinectron
  kinectron = new Kinectron("kinectron", { // username matches application display, default is kinectron 
    "host": " ", // host matches application display
    "port": "9001", // port matches application display
    "path": "/" // path defaults to /
  });

  // CONNECT TO MIRCROSTUDIO
  // kinectron = new Kinectron("kinectron", { 
  //   "host": "kinectron.itp.tsoa.nyu.edu", 
  //   "port": "9001", 
  //   "path": "/"
  // });

  // Create connection between remote and application
  kinectron.makeConnection();

  // Start the greenscreen camera
  kinectron.startKey(goToBeach);
}

function draw() {

}

function goToBeach(img) {
  loadImage(img.src, function(loadedImage) {
    image(beach, 0, 0);
    image(loadedImage, 0, 0);
  });
}