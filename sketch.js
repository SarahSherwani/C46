var canvas;
var gameState = 0;
var form , farmer 
function preload() {

  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 form = new Form ();
 form.display();
 farmer = new Farmer ();
field1 = createSprite (width/2 , height-100 , width-200 , 50);
field2 = createSprite (width/2 , height-200 , width-200 , 50);
field3 = createSprite (width/2 , height-300 , width-200 , 50);
scarecrow = createSprite (58, 326  , 50 , 100);

}

function draw() {
  background("white");
  if (keyDown("space")){
    gameState = 1
  }
  
  if (gameState === 1){
    
    background ("green");
    form.hide();
    farmer.noah.visible = true ;
    if(keyDown("up")){
      farmer.noah.position.y = farmer.noah.position.y-5
      
  }
  if(keyDown("down")){
      farmer.noah.position.y = farmer.noah.position.y+5
  }
  if(keyDown("left")){
      farmer.noah.position.x = farmer.noah.position.x-3
  }
  if(keyDown("right")){
      farmer.noah.position.x += 3
    }
    farmer.noah.overlap(scarecrow,function(collector,collected){
      // change image 
      text("crops are sown !!",730,250);
      text("deliver them safely !!",730,300);
    })
  }
  drawSprites ();
  text(mouseX + ',' + mouseY, mouseX, mouseY) ;
}
// function keyPressed (){
//   if (keyCode ===37){
//     farmer.noah.position.x = farmer.noah.position.x-10
//     console.log (farmer.noah.position.x)
//   }
//   if (keyCode ===38){
//     farmer.noah.position.y = farmer.noah.position.y-10
//     console.log (farmer.noah.position.x)
//   }
//   if (keyCode ===39){
//     farmer.noah.position.x = farmer.noah.position.x+10
//     console.log (farmer.noah.position.x)
//   }
//   if (keyCode ===40){
//     farmer.noah.position.y = farmer.noah.position.y+10
//     console.log (farmer.noah.position.x)
//   }
//}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
