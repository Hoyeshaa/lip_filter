nosex = 0;
nosey = 0;

function preload(){
loadimage = loadImage("https://i.postimg.cc/hG1GdvVV/Capture-removebg-preview.png")
}

function setup(){
  canvas =  createCanvas(300 , 300)
   canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelloaded);
    poseNet.on('pose' , gotposes);
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x : "+ results[0].pose.nose.x);
        console.log("nose y :"+ results[0].pose.nose.y);
        nosex = results[0].pose.nose.x-25;
        nosey = results[0].pose.nose.y+15;
    }
}

function modelloaded(){
    console.log("poseNet is loaded");

}

function draw(){
image(video , 0 , 0 , 300 , 300);
image(loadimage , nosex , nosey , 50 , 50);
}

function take_snap(){
    save("filter.png");
}