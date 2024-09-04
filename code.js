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

  player_tagger.num_points = 0;
  player_runner.num_points = 0;
  
  Draw_Screen();
}

//Check for point conditions
CheckPoints(){
  Check_is_bopped();
  Check_time_points();
}
// Helper functions for point conditions
Check_is_bopped(){
  player_tagger.num_points++;
}
Check_time_points(){
  player_runner.num_points++;
}

Draw_Screen(){
  player_tagger.style.left = `$[player_tagger.pos[0]]px`;
  player_runner.style.left = `$[player_runner.pos[0]]px`;

  player_tagger.style.up = `$[player_tagger.pos[1]]px`;
  player_runner.style.up = `$[player_runner.pos[1]]px`;
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
  Draw_Screen();
}
