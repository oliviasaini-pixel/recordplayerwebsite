

let previousMinute = -1;

let labelColors = [
  "#C77963",
  "#879B9A",
  "#D6AD69",
  "#A18AA9",
  "#73869D",
  "#B77D85"
];

let backgroundColors = [
  "#F7D6A3", // warm peach
  "#F4B8B8", // soft pink
  "#D5E8B5", // pastel green
  "#F6D98B", // butter yellow
  "#C9C1ED", // lavender
  "#A9D8E8"  // sky blue
];

function setup() {
  createCanvas(800, 650);
  angleMode(RADIANS);
}

function draw() {
  let h = hour();
  let m = minute();
  let s = second();

  // Log minute only when it changes
  if (m !== previousMinute) {
    console.log("Current minute:", m);
    previousMinute = m;
  }

  // Background changes every hour
  background(backgroundColors[h % 6]);

  // Heading
  fill("#39342F");
  noStroke();
  textAlign(CENTER);
  textSize(13);
  textStyle(BOLD);
  text("Record Player Clock", 400, 45);

  

  // Turntable shadow
  noStroke();
  fill(80, 65, 50, 35);
  rect(92, 103, 620, 460, 20);

  // Wooden turntable body
  fill("#76513D");
  stroke("#513B30");
  strokeWeight(2);
  rect(85, 95, 620, 460, 18);

  // Wood inset
  fill("#9B7256");
  noStroke();
  rect(96, 106, 598, 438, 13);

  // Inner deck
  fill("#D6C9B7");
  rect(108, 118, 574, 414, 9);

  // Subtle deck border
  noFill();
  stroke("#B3A18D");
  strokeWeight(1);
  rect(118, 128, 554, 394, 5);

  // Draw spinning vinyl record
  drawRecord(m, s);

  // Draw tonearm
  drawTonearm();

  // Turntable controls
  drawControls();

  // Time display
  drawTime(h, m, s);

  // Bottom label
  fill("#76685A");
  noStroke();
  textSize(10);
  textAlign(CENTER);
  text("SIDE A  •  DAYTIME", 400, 615);
}


// VINYL RECORD
function drawRecord(m, s) {

  push();

  translate(350, 300);

  // Smooth rotation based on seconds
  let smoothSeconds = s + (millis() % 1000) / 1000;
  let rotation = map(smoothSeconds, 0, 60, 0, TWO_PI);

  rotate(rotation);

  // Record shadow
  noStroke();
  fill(50, 45, 40, 35);
  circle(3, 5, 365);

  // Main vinyl
  fill("#19191B");
  circle(0, 0, 360);

  // Outer edge
  noFill();
  stroke("#414144");
  strokeWeight(2);
  circle(0, 0, 355);

  // Vinyl grooves
  for (let r = 340; r > 115; r -= 5) {
    stroke(65, 65, 68, 100);
    strokeWeight(0.7);
    circle(0, 0, r);
  }

  // Inner groove
  stroke("#777476");
  strokeWeight(1);
  circle(0, 0, 112);

  // Subtle vinyl reflection
  noFill();
  stroke(110, 110, 115, 100);
  strokeWeight(2);
  arc(0, 0, 345, 345, -0.4, 0.4);

  // Small rotating silver detail
  stroke("#B8B3AC");
  strokeWeight(4);
  line(0, -150, 0, -168);

  noStroke();
  fill("#B8B3AC");
  circle(0, -150, 5);

  // Center album label
  fill(labelColors[m % labelColors.length]);
  circle(0, 0, 105);

  // Label inner border
  noFill();
  stroke("#F0DFCA");
  strokeWeight(1);
  circle(0, 0, 91);

  // Album label decoration
  noStroke();
  fill("#F0DFCA");
  circle(0, 0, 42);

  fill("#35302D");
  circle(0, 0, 29);

  // Album label title
  fill("#F0DFCA");
  textAlign(CENTER);
  textSize(7);
  text("Side A", 0, 35);

  // Spindle hole
  fill("#D6C9B7");
  circle(0, 0, 8);

  pop();
}


// TONEARM
function drawTonearm() {

  // Tonearm base
  noStroke();
  fill("#77736F");
  circle(620, 175, 48);

  fill("#B8B3AC");
  circle(620, 175, 34);

  fill("#57534F");
  circle(620, 175, 13);

  // Arm
  stroke("#AAA49B");
  strokeWeight(12);
  strokeCap(ROUND);
  line(620, 175, 500, 255);

  // Arm highlight
  stroke("#E2DDD4");
  strokeWeight(3);
  line(620, 175, 500, 255);

  // Cartridge
  push();
  translate(500, 255);
  rotate(-0.59);

  noStroke();
  fill("#77736D");
  rect(-11, -5, 40, 17, 3);

  fill("#BEB8AF");
  rect(-5, -3, 25, 5, 2);

  // Needle
  stroke("#44413E");
  strokeWeight(2);
  line(29, 3, 34, 13);

  pop();
}


// CONTROLS
function drawControls() {

  // Power button
  fill("#45413D");
  noStroke();
  circle(160, 480, 34);

  fill("#D6C9B7");
  circle(160, 480, 25);

  fill("#45413D");
  circle(160, 480, 9);

  // Start button
  fill("#45413D");
  circle(215, 480, 25);

  fill("#D6C9B7");
  circle(215, 480, 12);

  // Speed dial
  fill("#AAA198");
  stroke("#746B62");
  strokeWeight(2);
  circle(610, 480, 42);

  fill("#E5DDD2");
  noStroke();
  circle(610, 480, 27);

  stroke("#55504A");
  strokeWeight(2);
  line(610, 480, 610, 470);

  // Control labels
  fill("#71665A");
  noStroke();
  textAlign(CENTER);
  textSize(9);
  text("POWER", 160, 512);
  text("START", 215, 512);
  text("SPEED", 610, 512);
}



// DIGITAL CLOCK
function drawTime(h, m, s) {

  // Clock display background
  noStroke();
  fill("#302D2A");
  rect(280, 483, 240, 45, 7);

  // Subtle border
  noFill();
  stroke("#75695D");
  strokeWeight(1);
  rect(280, 483, 240, 45, 7);

  // Small indicator light
  noStroke();
  fill("#C77963");
  circle(297, 505, 6);

  // Small clock label
  fill("#BDB0A0");
  textAlign(CENTER);
  textSize(7);
  textStyle(BOLD);
  text("LOCAL TIME", 400, 496);

  // Format time
  let displayHour = h % 12 || 12;

  let timeString =
    nf(displayHour, 2) + ":" +
    nf(m, 2) + ":" +
    nf(s, 2);

  // Main digital time
  fill("#F0E4D3");
  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace");
  textSize(19);
  text(timeString, 400, 520);

  // Reset font
  textFont("sans-serif");
}
