class Farmer {
    constructor (){
       this.noah = createSprite(50,displayHeight/2 +150,100,100);
       this.noah.visible=false;
    }
    movement(){
        if(keyDown("up")){
            this.noah.y = this.noah.y-5
        }
        if(keyDown("down")){
            this.noah.y = this.noah.y+5
        }
        if(keyDown("left")){
            this.noah.x = this.noah.x-3
        }
        if(keyDown("up")){
            this.noah.x += 3
        }
    }
}