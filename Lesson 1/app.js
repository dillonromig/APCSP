//function setup(){
    //createCanvas(windowHeight, windowWidth)
   // background("lightgray")

    //createP("this was created in javascript")
//}

//function setup() { 
 //   createCanvas(400, 400);
  //  background(220)
   // createElement('h1', 'my lucky numbers below');
   // createElement('p', 'my lucky number is 7');
 // } 
  
  //function setup() {
  //  createCanvas(windowWidth, windowHeight);
  //  let titleText = createElement('h1', 'My lucky number is...');
  //  let numText = createElement('p', '14');
  //  console.log(numText) 
 // }


  //function mousePressed(){
     // createP("My lucky number is 10")

  //}
  
 // function draw(){
   //   background(220)
  //}

  let button
let greeting
function setup() {
  createCanvas(windowWidth, windowHeight)
  button = createButton('Try Me');
  button.position(width / 2, height / 2)
  button.mousePressed(greet)
  greeting = createElement('h2', 'Say Hello!')
  greeting.position(width / 2, height / 3)
  textAlign(CENTER)
  textSize(50)
}
function greet() {
  greeting.html('HELLO!')
  
  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height))
    rotate(random(2 * PI));
    text('HELLO', 0, 0);
    pop();
  }
}