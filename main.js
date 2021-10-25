nose_X = 0;
nose_Y = 0;


function preload(){

}


function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPose(results){
    if(results.lenght > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw()
{
    image(video, 0, 0, 500, 500);

}

function take_snapshot(){
    save('myFilterImage.png');
}