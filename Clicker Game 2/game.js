// Initialize UI Elements
let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title

// Initialize Game Variables
let lives = 3
let score = 0
let winningNum = 10

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)
  background("lightgrey")


  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)


  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')

}

function draw() {
  // Adjust frameRate according to slider


  // Randomly Position Banana
  bananaImg.position(random(width), random(height))


}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {
if (mousePressed)
}

function decreaseLives() {
if (mousePressed)
}

function checkWin() {
if (score === 'winningNum')

}

function checkLose() {
if (score === 'let score')

}
