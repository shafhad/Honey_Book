const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var bees;
var bi1, bi2, bi3;
var timg, tree;
var honey1;
var stone;
var string;
var score = 0;
var intro;
var gameState = 0;

function preload() {
    backgroundImg = loadImage("images/bg.jpg");
    bi1 = loadImage("images/bee1.png");
    bi2 = loadImage("images/bee2.png");
    bi3 = loadImage("images/bee3.png");

    mowgliImg = loadImage("images/balloo_and_mowgli.png");
    timg = loadImage("images/tree.png");
    intro = loadSound("images/Recording (5).m4a");
}

function setup() {
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

    mowgli = createSprite(240, 400, 100, 200);
    mowgli.addImage(mowgliImg);
    mowgli.scale = 0.5;

    ground = new Ground(displayWidth/2, displayHeight - 120, displayWidth, 10);

    tree = createSprite(displayWidth - 100, displayHeight/2 - 90, 100, 500);
    tree.addImage(timg);
    tree.scale = 1;

    honey1 = new Honey(1010, 200, 60);
    honey2 = new Honey(1020, 100, 30);
    honey3 = new Honey(1070, 280, 40);
    honey4 = new Honey(1220, 250, 70);
    honey5 = new Honey(1520, 230, 50);
    honey6 = new Honey(1820, 200, 80);
    honey7 = new Honey(1200, 105, 70);
    honey8 = new Honey(1120, 180, 40);
    honey9 = new Honey(1250, 140, 20);
    honey10 = new Honey(1090, 68, 30);
    honey11 = new Honey(970, 355, 70);

    stone = new Stone(122, 200, 10);

    constraint = new Constrained(stone.body, {x:147, y:240});
    intro.play();
}

function draw(){

    if(gameState === 0) {
        text("press SPACE KEY to begin", displayWidth/2, displayHeight/2);
 
        if(keyCode === 32) {
            gameState = 1;
        }
    }

    if(gameState === 1) {

    var collision1 = Matter.SAT.collides(stone.body, honey1.body);
    var collision2 = Matter.SAT.collides(stone.body, honey2.body);
    var collision3 = Matter.SAT.collides(stone.body, honey3.body);
    var collision4 = Matter.SAT.collides(stone.body, honey4.body);
    var collision5 = Matter.SAT.collides(stone.body, honey5.body);
    var collision6 = Matter.SAT.collides(stone.body, honey6.body);
    var collision7 = Matter.SAT.collides(stone.body, honey7.body);
    var collision8 = Matter.SAT.collides(stone.body, honey8.body);
    var collision9 = Matter.SAT.collides(stone.body, honey9.body);
    var collision10 = Matter.SAT.collides(stone.body, honey10.body);
    var collision11 = Matter.SAT.collides(stone.body, honey11.body);

    background(backgroundImg);
    fill("red");
    //text(mouseX + "," + mouseY, width/2, height/2);
    Engine.update(engine);

    fill("white");
    textSize(20);
    text("SCORE: " + score, 100, 100);
    text("YOUR TARGET SCORE: 85", 250, 100);
    
    if(collision1.collided) {
        score = score + 10;
        honey1.pop();
        console.log("collided")
    } 

    if(collision2.collided) {
        score = score + 10;
        honey2.pop();
    } 

    if(collision3.collided) {
        score = score + 10;
        honey3.pop();
    } 

    if(collision4.collided) {
        score = score + 10;
        honey4.pop();
    }

    if(collision5.collided) {
        score = score + 10;
        honey5.pop();
    } 

    if(collision6.collided) {
        score = score + 10;
        honey6.pop();
    } 

    if(collision7.collided) {
        score = score + 10;
        honey7.pop();
    } 

    if(collision8.collided) {
        score = score + 10;
        honey8.pop();
    } 

    if(collision9.collided) {
        score = score + 10;
        honey9.pop();
    } 

    if(collision10.collided) {
        score = score + 10;
        honey10.pop();
    } 

    if(collision11.collided) {
        score = score + 10;
        console.log("collided")
        //honey11.pop();

    } 

    /*if(bees.isTouching(mowgli)) {
        score = score - 2;
    }

    if (bees.isTouching(stone)) {
        bees.destroy();
    }*/

    if(score < 0) {
        gameState = 2;
    } 

    if(score >= 85) {
        gameState = 3;
    }

    spawnBees(); 
    drawSprites();
    honey1.display();
    honey2.display();
    honey3.display();
    honey4.display();
    honey5.display();
    honey6.display();
    honey7.display();
    honey8.display();
    honey9.display();
    honey10.display();
    honey11.display();
    ground.display();
    stone.display();
    constraint.display();
   }

   if(gameState === 2) {
       text("GAME OVER", displayWidth/2, displayHeight/2);
       text("Your Score: " + score, displayWidth/2, displayHeight/2 + 50);
       text("press SPACE BAR to restart", displayWidth/2, displayHeight/2 + 100);

       if(keyCode === 32) {
           gameState = 0;
       }
   }

   if(gameState === 3) {
    text("YOU WIN", displayWidth/2, displayHeight/2);
    text("Your Score: " + score, displayWidth/2, displayHeight/2 + 50);
    text("press SPACE BAR to restart", displayWidth/2, displayHeight/2 + 100);
   }
}

function spawnBees() {
    if(frameCount%80 === 0) {
        bees = createSprite(920, 365, 10, 10);
        bees.addImage(bi1);
        bees.y = Math.round(random(306, 395))
        bees.scale = 0.08;
        bees.velocityX = -7;
        bees.lifetime = 700;
    }
    
    if(frameCount%65 === 0) {
        bee1 = createSprite(960, 206, 10, 10);
        bee1.addImage(bi2);
        bee1.y = Math.round(random(160, 250))
        bee1.scale = 0.08;
        bee1.velocityX = -5;
    }

    if(frameCount%70 === 0) {
        bee1 = createSprite(1179, 258, 10, 10);
        bee1.addImage(bi3);
        bee1.y = Math.round(random(191, 303))
        bee1.scale = 0.08;
        bee1.velocityX = -6;
    }
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}



function mouseReleased() {
    constraint.fly();   
}