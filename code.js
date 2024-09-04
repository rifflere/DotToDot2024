//Set up global variables
player_tagger = true;
player_runner = true;

//Initiate starting variables
On_Load(){ //What is the actual name of this function?
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
