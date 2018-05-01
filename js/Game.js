function Game(){
    const pixi=new PIXI.Application({width:800, height:600, backgroundColor:0xFFFFFF});
    document.body.append(pixi.view);
    
    this.stage=()=>{return pixi.stage;};
    this.width=()=>{return pixi.screen.width;};
    this.height=()=>{return pixi.screen.height;};
    
    this.init=function(){
        
    };
    
    this.getMS=()=>{
        return pixi.ticker.elapsedMS;
    };
}

const game=new Game();
game.init();