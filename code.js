console.log("I can load the .js file");

class Player{
	constructor(isTagger, icon){
		this.index = [0,0];
		this.points = 0;
		this.isTagger = isTagger;
		this.icon = icon
	}
}

console.log(" I can declare a variable");

var minCoord = 0;
var maxCoord = 50;

var tagger;
var runner;
var enabledInput = false;


//Initiate starting variables
function On_Load(){
  console.log("Started load");

  tagger = new Player(true, document.getElementById("player-tagger"));
  runner = new Player(false, document.getElementById("player-runner"));


  tagger.index = [0,0];
  runner.index = [0,10];

  console.log("Successfully loaded");

  enabledInput = true;
  
  Draw_Screen();
}

document.addEventListener('keydown', keyPress);

function keyPress(){
	const key = event.key;
	console.log("Pressed a button");
	switch (event.key) {		
    		case "ArrowLeft":
        		Left(tagger);
        		break;
    		case "ArrowRight":
        		Right(tagger);
        		break;
    		case "ArrowUp":
        		Up(tagger);
       		 	break;
    		case "ArrowDown":
        		Down(tagger);
        	break;
		}
}

//Check for point conditions
function CheckPoints(){
  Check_is_bopped();
  Check_time_points();
}
// Helper functions for point conditions
function Check_is_bopped(){
  tagger.points++;
}
function Check_time_points(){
  runner.points++;
}

function Draw_Screen(){
  tagger.icon.style.left = `$[tagger.icon.index[0]]px`;
  runner.icon.style.left = `$[runner.icon.index[0]]px`;

  tagger.icon.style.up = `$[tagger.icon.index[1]]px`;
  runner.icon.style.up = `$[runner.icon.index[1]]px`;
}

function Left(ap){
  Move(ap, [-1,0]);
}
function Right(ap){
  Move(ap, [1,0]);
}
function Up(ap){
  Move(ap, [0,1]);
}
function Down(ap){
  Move(ap, [0,-1]);
}

function Move(activePlayer, deltaPosition){
  activePlayer.index = [activePlayer.index[0]+deltaPosition[0], activePlayer.index[1]+deltaPosition[1]];
  
  //Figure out whether it is trying to go off the grid
  if(activePlayer.index[0] < minCoord){
    activePlayer.index[0] = minCoord;
  }
  if(activePlayer.index[0] > maxCoord){
    activePlayer.index[0] = maxCoord;
  }

  if(activePlayer.index[1] < minCoord){
    activePlayer.index[1] = minCoord;
  }
  if(activePlayer.index[1] > maxCoord){
    activePlayer.index[1] = maxCoord;
  }
  Draw_Screen();
}
