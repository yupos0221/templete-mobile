let x, y;
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    // canvas.position(50, 100);
    // let button = createButton("push");
    // button.mousePressed(clicked);
    x = width/2;
    y = height/2;
    fill("red");
    setMoveThreshold(0.05);
}

function draw() {
    background(255);
    ellipse(x, y, 80, 80);
}

function deviceMoved(){
    x += rotationX;
    y += rotationY;
    
    if(x < 0){x = 0;}
    if(x > windowWidth){x = windowWidth;}
    if(y < 0){y = 0;}
    if(y > windowHeight){y = windowHeight;}
}

function clicked(){
    text("Pushed!", 10, 50);
}