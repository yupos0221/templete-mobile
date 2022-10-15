function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(0);
    strokeWeight(20);
    background(200);
}


function draw() {

}

// function touchStarted(){
//     text("hello", mouseX, mouseY);
//     return false;
// }

function touchMoved(){
    line(pmouseX, pmouseY, mouseX, mouseY);
    return false;
}