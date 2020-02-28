function setup(){
    frameRate(2)
    createCanvas(windowWidth, windowHeight)
    createImg: bananaImg = createImg('banana.png', 'banana image')
    bananaImg.size(200, 100)
    heading = createElement('h2', 'Click The Banana Game!')
    heading.position(width / 3, height / 4)
}

function draw(){
background(220)
}

