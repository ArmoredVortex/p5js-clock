function setup(){
createCanvas(600,600);
}
function draw(){
background(0);
let sc = second();
let mn = minute();
let hr = hour();
let sc_deg = map(sc,60,0,0,360);
let mn_deg = map(mn,60,0,0,360);
let hr_deg = map(hr,24,0,0,360);
strokeWeight(8);
noFill();
stroke(55,255,20);
arc(300,300,400,400,0,sc_deg);
stroke(255,0,57);
arc(300,300,380,380,0,mn_deg);
stroke(27,3,255);
arc(300,300,360,360,0,hr_deg);
}