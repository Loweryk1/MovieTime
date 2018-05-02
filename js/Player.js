function Player(){
    const kid = new PIXI.Sprite.fromImage("../imgs/kid.png");
    const teen = new PIXI.Sprite.fromImage("../imgs/teen.png");
    const adult = new PIXI.Sprite.fromImage("../imgs/adult.png");
    const elderly = new PIXI.Sprite.fromImage("../imgs/elderly.png");
    currentSprite = teen;
    game.stage().addChild(currentSprite);

    this.changeSprite=function(sprite){
        game.stage().removeChild(currentSprite);
        currentSprite = sprite;
        game.stage().addChild(currentSprite);
    };
}