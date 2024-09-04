//Set up global variables
player_tagger = document.getElementById("player_tagger");
player_runner = document.getElementById("player_runner");

minCoord = 0;
maxCoord = 50;

//Initiate starting variables
On_Load(){
  player_tagger.pos = [0,0];
  plater_runner.pos = [0,10];

  player_tagger.color = "red";
  player_runner.color = "blue";  
}

// Game loop
While(True){ 
  Draw_Screen();
}

Draw_Screen(){
  //Find player locations
}

Left(Player){
  Move(Player, [-1,0]);
}
Right(Player){
  Move(Player, [1,0]);
}
Up(Player){
  Move(Player, [0,1]);
}
Down(Player){
  Move(Player, [0,-1]);
}

Move(Player, deltaPosition){
  Player.pos = [Player.pos+deltaPosition[0], Player.pos+deltaPosition[1]];
  
  //Figure out whether it is trying to go off the grid
  if(Player.pos[0] < minCoord){
    Player.pos[0] = minCoord;
  }
  if(Player.pos[0] > maxCoord){
    Player.pos[0] = maxCoord;
  }

  if(Player.pos[1] < minCoord){
    Player.pos[1] = minCoord;
  }
  if(Player.pos[1] > maxCoord){
    Player.pos[1] = maxCoord;
  }
}
