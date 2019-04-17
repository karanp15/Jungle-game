function setup() {
  createCanvas(600, 600);
}
var i = 0;
var scene = 1;
var buttonX;
var buttonY;
var buttonW;
var buttonH;
let img;

draw = function() {
  
//Logo
  if (scene === 1) {
    
    logo();
    
  } else if (scene === 2) {
    
    MainMenu();
    
  } else if (scene === 3) {
    
    Instruction();
    
  } else if (scene === 4) {
    
    Options();
    
  } else if (scene === 5) {
    
    StoryScene1();
    
  } else if (scene === 6) {
    
    //Win Scene
    background(200);
    image(img3, 0, 0, 600, 600);
    textSize(60);
    fill(255);
    text("YOU WIN!",175,100);
    
  }
};
