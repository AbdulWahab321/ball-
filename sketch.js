var canvas;
var music;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
   createCanvas(800,800);
   edges=createEdgeSprites()
   
   box=createSprite(400,400,20,20)
   box.shapeColor="white";
   box.x=random(20,750)
   box.velocityY=5;
   box.velocityX=Math.round(random(-5,5));
   surface1=createSprite(70,790,200,20)
   surface1.shapeColor="yellow"; 
   surface2=createSprite(280,790,200,20)
   surface2.shapeColor="orange";  
   surface3=createSprite(500,790,200,20)
   surface3.shapeColor="purple"; 
   surface4=createSprite(720,790,200,20)
   surface4.shapeColor="violet"; 
  

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    if(box.isTouching(surface1)){
        music.play();
        box.shapeColor="yellow"
    }
    if(box.isTouching(surface2)){
        
        box.shapeColor="orange"
    }
    if(box.isTouching(surface3)){
        
        box.shapeColor="purple"
    }
    if(box.isTouching(surface4)){
        box.velocityX=0;
        music.stop();
        box.shapeColor="violet"
    }
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.collide(surface4);
    
    box.bounceOff(edges);
    //create edgeSprite

 drawSprites();
    //add condition to check if box touching surface and make it box
}
