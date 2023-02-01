var backgroundImg, rocketImg, background, rocket, obstacle, obstacleImg
var obstacleGroup, invisibleBlock
var gamestate = "play"

function preload(){
 backgroundImg = loadImage("background.jpg");
rocketImg = loadImage("rocket-removebg-preview.png");
obstacleImg = loadImage("image-removebg-preview.png");
}

function setup() {
createCanvas(600, 600)
background = createSprite(600, 600)
background.addImage("background", backgroundImg)
background.scale = 4
background.velocityY = 1;
rocket = createSprite(200, 200)
rocket.addImage("rocket", rocketImg)
rocket.scale = 0.8
rocket.velocityY = 5
invisibleBlockGroup = new Group()
rocket.velocityY = rocket.velocityY + 0.5
invisibleBlock = createSprite(300, 600, 600, 50)
invisibleBlock.height = 2
invisibleBlock.lifetime = 800
obstacleGroup = new Group()
}

function draw() {
if(gamestate=="play") {
    if(background.y > 400) {
        background.y = 300
        }
        
        if(keyDown("left_arrow")) {
         rocket.x = rocket.x-5
        }
        if(keyDown("right_arrow")) {
            rocket.x = rocket.x+5
            }
            if(keyDown("space")) {
                rocket.y = rocket.y-10
                }
             
        if(invisibleBlock.isTouching(rocket) || rocket.y>600) {
        rocket.destroy()
        stroke("red")
        fill("red")
        textSize(30)
        text("GAME OVER", 300, 300)
        background.velocityY = 0
        obstacleGroup.destroy()
        obstacle.destroy()
        }   
        if(obstacleGroup.isTouching(rocket)) {
            rocket.destroy()
            stroke("red")
        fill("red")
        textSize(30)
        text("GAME OVER", 300, 300)

            background.velocityY = 0
            obstacleGroup.destroy()
            obstacle.destroy()
        }
        spawnObstacles()
}


drawSprites()
}

function spawnObstacles() {
if(frameCount%240==0) {
obstacle = createSprite(200, -50)
obstacle.x = Math.round(random(120, 400))
obstacle.velocityY = 1
obstacle.addImage("obstacle", obstacleImg)
obstacle.scale = 0.4
obstacle.lifetime = 800
obstacleGroup.add(obstacle)
obstacle.depth = background.depth
obstacle.depth = obstacle.depth + 1
}
}



