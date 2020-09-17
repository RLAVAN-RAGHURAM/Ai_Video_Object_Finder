video="";

function preload(){
video=createVideo('video.mp4');
video.hide();
}
function setup(){
canvas=createCanvas(480,380);
canvas.center();
}
function draw(){
image(video,0,0,480,380);
}
function start(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Object";
}
function modelLoaded(){
console.log("modeloaded");
status=true;
video.volume(0);
video.speed(1);
video.loop();
}