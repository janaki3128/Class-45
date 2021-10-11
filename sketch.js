var path , pathImg;
var boy , boyImg;
var coin , coinImg , coinG;
var tree , treeImg , treeG;


function preload(){
    pathImg = loadImage("Road.jpg");
    boyImg = loadAnimation("jake1.png ","jake2.png","jake3.png","jake4.PNG","jake5.png");
}


function setup(){
    createCanvas(800,600);

    path = createSprite(400,200);
    path.addImage(pathImg);
    path.velocityY = 4;
    path.scale = 1.5;    


    boy = createSprite(180,340,30,30);
    boy.addAnimation("JakeRunning",boyImg);
    
}


function draw(){
    background(0);

    if (path.y > 400){
        path.y = height/2;
    }

    drawSprites();
}
