object=[];
status1="";
alert1="";
function preload(){
    alert1=loadSound("alert.wav");
}
function setup(){
    canvas=createCanvas(350,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,400);
    video.hide();
    g=ml5.objectDetector('cocossd',v);
    document.getElementById("v").innerHTML="Status :  Object Detecting";
}
function draw(){
    image(video,0,0,350,400);
    if(status1 != ""){
        red=random(255);
        green=random(255);
        blue=random(255);
        for(i=0;i<object.length;i++){
            if(object == person){
                document.getElementById("j").innerHTML="Baby found";
                document.getElementById("v").innerHTML="Status : Object Detected";
                alert1.stop();
            }
            else{
                document.getElementById("j").innerHTML="Baby not found";
                alert1.play();
            }
            z=floor(object[i].confidence*100);
            text(object[i].label+" "+z+"%",object[i].x,object[i].y);
            fill(red,green,blue);
            noFill();
            stroke(red,green,blue);
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}
function v(){
    console.log("YES! I am fully loaded");
    status1="true";
    g.detect(video,ans);
}
function ans(error,result){
    if(error){
        console.log(error);
    }
    else{
    console.log(result);
    object=result;
    }
}