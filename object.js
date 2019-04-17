//Images
function preload() {
  img = loadImage('jungle.jpg');
  img2 = loadImage('bank.jpg');
  img3 = loadImage('treasure.jpg'); 
}

//button object
var button = function(buttonX,buttonY,buttonW,buttonH,color,sceneAdd) {
  fill(color);
  if (mouseIsPressed && buttonY < mouseY && buttonY + buttonH > mouseY && buttonX < mouseX && buttonX + buttonW > mouseX) {
    scene += sceneAdd;
  }
  rect(buttonX, buttonY, buttonW, buttonH, 5); // the button  
}
