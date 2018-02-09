var posX = 100
var posY = 100

function setup() { /* this is only called once */
createCanvas(600, 400)
    velX - random(-5, 5)
     velY - random(-5, 5)
}

function draw() { /* this is called repeatedly */
  // put drawing code here
    background(0,0,0)
    fill(random(0, 255), random (0,255), random(0,255)) /* you are about to draw something, what color should the inside be */
    posX += velX
    posY += velY
    
    if (posX >width || posX <0){
        velX *= -1
    }
    
    if (posX >height || posY <0){
        velY *= -1
    }
    
    rect(100, 100, 10, 10)
    rect(posX, posY, 50, 50)
}