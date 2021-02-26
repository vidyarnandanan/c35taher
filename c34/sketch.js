var database,player;
var playercount=0;
var Gamestate=0;
var form,game;

function setup(){
    database=firebase.database()
  game=new Game()
  game.getstate()
  game.start()
  }

function draw(){
    background("white");
    drawSprites();
}