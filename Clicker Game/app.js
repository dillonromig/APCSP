let bananaImg
let heading

function setup(){
    createCanvas(windowWidth, windowHeight)
    bananaImg = createImg('banana.png', 'banana image')
    bananaImg.size(200,100)
    heading = createElement('h2','Click The Banana')
    heading.position(width / 3,hight / 4)
}

function draw(){
bananaImg.Img.position(random(width), random(height))
bananaImg.Img.mousePressed('You Won')
}

function youWon(){
heading.Html('You Won')
bananaImg.Img.remove()
}