var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var wall1, wall2, wall3, wall4;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(120,570,150,20);
    surface1.shapeColor = "orange";
    surface2 = createSprite(300,570,150,20);
    surface2.shapeColor = "brown";
    surface3 = createSprite(500,570,150,20);
    surface3.shapeColor = "blue";
    surface4 = createSprite(700,570,150,20);
    surface4.shapeColor = "red";
    wall1 = createSprite(10,580,20,1200);
    wall1.shapeColor = "grey";
    wall2 = createSprite(20,10,1600,20);
    wall2.shapeColor = "grey";
    wall3 = createSprite(790,580,20,1200);
    wall3.shapeColor = "grey";
    wall4 = createSprite(10,600,1600,20);
    wall4.shapeColor = "grey";

    


    //create box sprite and give velocity

    box = createSprite(400,300,35,35);
    box.shapeColor = "white";
    box.velocityX = +6;
    box.velocityY = +6;

   
   
}

function draw() {
    background("grey");
    //createEdgeSprite();
    
    createEdgeSprites();
    //box.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "orange";
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "brown";
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "blue";
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "red";
    }
    if(wall1.isTouching(box) && box.bounceOff(wall1)){

    }
    if(wall2.isTouching(box) && box.bounceOff(wall2)){

    }
    if(wall3.isTouching(box) && box.bounceOff(wall3)){

    }
    if(wall4.isTouching(box) && box.bounceOff(wall4)){

    }

    
    drawSprites()
}
