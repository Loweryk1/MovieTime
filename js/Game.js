function Game(){
    const pixi=new PIXI.Application({width:800, height:600, backgroundColor:0xFFFFFF});
    document.body.append(pixi.view);
    
    this.stage=()=>{return pixi.stage;};
    this.width=()=>{return pixi.screen.width;};
    this.height=()=>{return pixi.screen.height;};
    
    
    this.getMS=()=>{
        return pixi.ticker.elapsedMS;
    };
    
    this.init=function(){
        this.player=new Player();
    };
    
}

const game=new Game();
game.init();