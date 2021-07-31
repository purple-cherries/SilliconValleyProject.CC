
var gameState = "Intro"
var lives = 3
var SCORE = 0
var score = 0


function preload(){
 bg = loadImage("SVCProject/BG1.gif")
 bg2 = loadImage("SVCProject/back1.gif")
 bg4 = loadImage("PCs/office.jpg")
//player1 = loadImage("playerLvl1.png")
player2 = loadImage("SVCProject/bottle.png")
dropIMG = loadImage("SVCProject/superDoc.gif")
Play = loadImage("PlayButton.png")
germIMG = loadImage("Germ.png")
 check = loadImage("green-tick.png")
Next=loadImage("SVCProject/next.gif")
restart = loadImage("restart.png")
bg3 = loadImage("SVCProject/Road.gif")
car1 = loadImage("PCs/blue-car.png")
car2 = loadImage("PCs/green-car.png")
car3 = loadImage("PCs/red-car.png")
car4 = loadImage("PCs/yellow-car.png")
car5 = loadImage("PCs/car.1.png")
car6 = loadImage("PCs/car2.png")
van1 = loadImage("SVCProject/van1.gif")
d = loadImage("drop.gif")
mayor = loadImage("PCs/mayor.png")
speech = loadImage("speech.png")
d1=loadAnimation("SVCProject/doc1.png","SVCProject/doc2.png","SVCProject/doc3.png")


medals = loadImage("medals.png")
bg5 = loadImage("SVCProject/bg1.jpg")
bg6 = loadImage("SVCProject/bg2.jpg")

a = loadImage("about.png")
crash = loadSound("crash.mp3")
punch = loadSound("PUNCH.mp3")
smash = loadSound("Smashing.mp3")
splat = loadSound("Splat.mp3")
pew = loadSound("pew.mp3")
drop = loadSound("Drop2.mp3")

win = loadImage("winlvl2.gif")
over = loadImage("images.png")


}

function setup(){
 
canvas = createCanvas(displayWidth, displayHeight-150)

  b = createSprite(displayWidth/2 - 60,displayHeight/2 -100 )
  b.addImage(bg5)
  b.scale = 2

  o = createSprite(displayWidth/2 ,displayHeight/2 -150)
  o.addImage(over)
  o.scale = 5.5

  
  fb = createSprite(800,displayHeight/2-20,100,100 )
  fb.addImage(bg4)
  fb.scale = 4

  b2 = createSprite(displayWidth/2 - 50,displayHeight/2 -100 )
  b2.addImage(bg6)
  b2.scale = 3

   Background = createSprite(displayWidth,displayHeight/2,100,100 )
   Background.addImage(bg2)
   Background.scale = 3

   Background1 = createSprite(displayWidth/2,displayHeight/2,100,100)
   Background1.addImage(bg3)
   Background1.scale = 4.5

   Background2 = createSprite(700,displayHeight/2,100,100 )
   Background2.addImage(bg)
   Background2.scale = 1

   ground2 = createSprite(displayWidth,displayHeight-20,displayWidth*150)
   
   /* doc = createSprite(100, displayHeight-300, 10,10)
    doc.addImage(player1)
    doc.scale = 0.5 */
   //q = question mark
    q = createSprite(1300, 100, 10,10)
    q.addImage(a)
    q.scale= 0.3
 
    PCLvl21 = createSprite(100, 80, 10,10)
    PCLvl21.addImage(player2)
    PCLvl21.scale = 0.5
   
    PCLvl22 = createSprite(150, 80, 10,10)
    PCLvl22.addImage(player2)
    PCLvl22.scale = 0.5
   
    PCLvl23 = createSprite(200, 80, 10,10)
    PCLvl23.addImage(player2)
    PCLvl23.scale = 0.5

    PCLvl3 = createSprite(150, displayHeight-350, 10,10)
    PCLvl3.addImage(van1)
    PCLvl3.scale = 0.3

    check1 = createSprite(displayWidth/2,350,10,10)
    check1.addImage(check)
    check1.scale = 0.3

    check2 = createSprite(displayWidth/2,350,10,10)
    check2.addImage(check)
    check2.scale = 0.3

    check3 = createSprite(displayWidth/2,350,10,10)
    check3.addImage(check)
    check3.scale = 0.3
   
    container = createSprite(displayWidth/2,0,500,200)

   
    PlayButton = createSprite(200,200,10,10)
    PlayButton.addImage(Play)
    PlayButton.scale = 1
   
    NextButton = createSprite(680,600,10,10)
    NextButton.addImage(Next)
    NextButton.scale = 0.6
   
    NextButton2 = createSprite(680,600,10,10)
    NextButton2.addImage(Next)
    NextButton2.scale = 0.6
   
    NextButton3 = createSprite(680,600,10,10)
    NextButton3.addImage(Next)
    NextButton3.scale = 0.6

    NextButton4 = createSprite(680,650,10,10)
    NextButton4.addImage(Next)
    NextButton4.scale = 0.6

    NextButton5 = createSprite(280,150,10,10)
    NextButton5.addImage(Next)
    NextButton5.scale = 0.6

    startButton = createSprite(displayWidth/2 + 300,650,10,10)
    startButton.addImage(Next)
    startButton.scale = 0.6

    Restart = createSprite(920,300,10,10)
    Restart.addImage(restart)
    Restart.scale = 2

    NextLevel1 = createSprite(800,400,10,10)
    NextLevel1.addImage(Next)
    NextLevel1.scale = 0.6

    Mayor = createSprite(620, 350, 10,10)
    Mayor.addImage(mayor)

    back = createSprite(1080, 150,550,950)
    back.shapeColor = "white"

    Speech = createSprite(1050, 200,10,10)
    Speech.addImage(speech)
    Speech.scale = 0.3

    Medals = createSprite(1070, 500,10,10)
    Medals.addImage(medals)
    Medals.scale = 0.6

    doc = createSprite(200,200,20,20)
    doc.addAnimation("doca",d1)
    doc.scale = 0.5

    f = createSprite(200,displayHeight-350)
    f.addImage(win)
    f.scle = 0.8



   
    dropsGroup = new Group()
    germsGroup = new Group()
    vaccineGroup = new Group()
    carGroup = new Group()
   
    level2State = "b1"
    scoreLvl2 = 0
     
    
   }

function draw(){
  background("lavender")
  drawSprites()



  if(gameState==="Intro"){

    f.visible = false
    o.visible = false
    fb.visible = false
    q.visible = true
    b.visible = true
    b2.visible = false
    doc.visible = false
    ground2.visible = false
    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
   // doc.visible=false;
    NextButton.visible = false
    PlayButton.visible = true
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl23.visible=false;
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false
    NextButton5.visible = false

    if(mousePressedOver(q)&&gameState === "Intro"){
      gameState = "desc"
    }

    if(mousePressedOver(PlayButton)&&gameState==="Intro"){
      gameState = "Level2"

    }

  }

  if(gameState === "desc"){
    f.visible = false
    fb.visible = false
    q.visible = false
    b.visible = false
        b2.visible = true
        o.visible = false


    doc.visible = false
    ground2.visible = false
    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
   // doc.visible=false;
    NextButton.visible = false
    PlayButton.visible = false
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    startButton.visible = true
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl23.visible=false;
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false
    NextButton5.visible = false

    textSize(25)
    fill("white")
    textAlign(CENTER)
    text("You're a journalist, reporting a new-found vaccination againt Covid_19, ",displayWidth/2,200)
    text(" when a accidental yet mass leak of contaminated virus wrecks havoc! ",displayWidth/2,260)
    text("You are the only one safe because you managed to reach a safe covid-free bay at the time. ",displayWidth/2,320)
    text("You need to collect precious vaccine in test tubes ,  ",displayWidth/2,380)
    text(" and get it to the mayor’s office ASAP.",displayWidth/2,440)
    text("From there you need to disinfect the local area, ",displayWidth/2,500)
    text("The health of the nation is in your hands. Good Luck...    .",displayWidth/2,560)

    if(mousePressedOver(startButton)&&gameState==="desc"){
      gameState = "Level1"

    }
  }





  if(gameState==="Intro-Level1"){
    f.visible = false
    fb.visible = false
    q.visible = false
    b.visible = false
    b2.visible = true
    o.visible = false

    doc.visible = false
    ground2.visible = false
    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
  //  doc.visible=false;
    NextButton.visible = true
    PlayButton.visible = false
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl23.visible=false;
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false



    
    textSize(50)
    fill("white")
    textAlign(CENTER)
    text("Level 1",displayWidth/2,200)
    textSize(30)
    text("Collect all of the droplets!",displayWidth/2,250)
    text("Press enter and use arrow keys to move the player",displayWidth/2,350)
    text("and catch the vaccine",displayWidth/2,400)
    text("Click on next button to continue.",displayWidth/2,450)




    if(mousePressedOver(NextButton)&&gameState==="Intro-Level1"){
      gameState = "Level1"

    }
  }






  if(gameState==="Level1"){
    f.visible = false
    fb.visible = false
    q.visible = true
    b.visible = false
    b2.visible = false
    doc.visible = false
    ground2.visible = false
    Background.visible = true ;
    Background1.visible = false;
    Background2.visible = false
   // doc.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    o.visible = false

    PCLvl21.visible=true;
    PCLvl22.visible=true;
    PCLvl23.visible=true;
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false
    Mayor.visible = false

    Background.addImage(bg2)
    Background.x = 500
    Background.y = 400

    textSize(50)
    fill("black")
    textAlign(CENTER)
    text("VACCINE",displayWidth/2,50)
    text("SCORE:"+scoreLvl2,displayWidth-200,50)

    
    Leak();
   

    if(level2State === "b1"){
      
      if(keyDown(ENTER)){
        PCLvl21.x = displayWidth/2
        PCLvl21.y = displayHeight-450
        PCLvl21.scale = 1.7
        PCLvl21.setCollider("rectangle", 50,-90,40,100)
      }
      if(keyDown(LEFT_ARROW)){
        PCLvl21.x -= 5
      }
      if(keyDown(RIGHT_ARROW)){
        PCLvl21.x += 5
      }
      if(vaccineGroup.isTouching(PCLvl21)){
        drop.play()
        vaccineGroup[0].destroy();
        scoreLvl2+=10
      }
      if(scoreLvl2 === 100){
        level2State = "b2"
        PCLvl21.destroy();
        
      }
    }

    if(scoreLvl2 === 100){
      check1.visible = true
    }

    if(level2State === "b2"){
      if(keyDown(ENTER)){
        PCLvl22.x = displayWidth/2
        PCLvl22.y = displayHeight-450
        PCLvl22.scale = 1.7
        PCLvl22.setCollider("rectangle", 50,-90,40,100)

      }
      if(keyDown(LEFT_ARROW)){
        PCLvl22.x -= 5
      }
      if(keyDown(RIGHT_ARROW)){
        PCLvl22.x += 5
      }
      if(vaccineGroup.isTouching(PCLvl22)){
        drop.play()
        vaccineGroup[0].destroy();
        scoreLvl2+=10
      }
      if(scoreLvl2 === 200){
        level2State = "b3"
        PCLvl22.destroy();
        
      }
    }
    if(scoreLvl2 === 200){
      check2.visible = true
    }


    if(level2State === "b3"){
      if(keyDown(ENTER)){
        PCLvl23.x = displayWidth/2
        PCLvl23.y = displayHeight-450
        PCLvl23.scale = 1.7
        PCLvl23.setCollider("rectangle", 50,-90,40,100)

      }
      if(keyDown(LEFT_ARROW)){
        PCLvl23.x -= 5
      }
      if(keyDown(RIGHT_ARROW)){
        PCLvl23.x += 5
      }
      if(vaccineGroup.isTouching(PCLvl23)){
        drop.play()
        vaccineGroup[0].destroy();
        scoreLvl2+=10
      }
      if(scoreLvl2 === 300){
        gameState = "Level2"
        PCLvl23.destroy();
        vaccineGroup.destroyEach();
      }
    }

    if(scoreLvl2 === 300){
        check3.visible = true
    }

    if(mousePressedOver(q)&&gameState === "Level1"){
      gameState = "Intro-Level1"
    }
  }





  
  if(gameState==="Intro-Level2"){
    f.visible = false
    fb.visible = false
    o.visible = false

    q.visible = false
    b.visible = false
        b2.visible = true
    doc.visible = false
    ground2.visible = false
    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
   // doc.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = true
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl23.visible=false;
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false 
    back.visible = false
    Medals.visible = false
    Speech.visible = false


     
    if(mousePressedOver(NextButton2)&&gameState==="Intro-Level2"){
      gameState = "Level2"

    }

  

    textSize(50)
    fill("white")
    textAlign(CENTER)
    text("Level 2",displayWidth/2,200)
    textSize(30)


    text("Great Job! Now carefully transport the precious vaccine to the town center ASAP!.",displayWidth/2,250)
    text("Use Arrow keys to direct the vehicle",displayWidth/2,350)
    text("Click on next button to continue.",displayWidth/2,450)


  }

  if(gameState === "Level2"){
    f.visible = false


    //neww
    fb.visible = false
    q.visible = true
    b.visible = false
        b2.visible = false
    doc.visible = false
    ground2.visible = false
    Background.visible = false;
    Background1.visible = true;
    Background2.visible = false
   // doc.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    o.visible = false

    PCLvl21.visible=false;
    PCLvl23.visible=false
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = true
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false


  
  ground2.velocityX=-2

  textSize(50)
  fill("darkblue")
  textAlign(CENTER)
  text("LIVES : "+ lives,1200,displayHeight-90)

  back = createSprite(1200,displayHeight-90, 500,150)


  PCLvl3.setCollider("rectangle", 100,-10, 100,150)

  camera.position.y = displayHeight/2

if(keyDown(UP_ARROW)){
  PCLvl3.y -=5
  PCLvl3.scale -= 0.005
}

if(keyDown(DOWN_ARROW)){
  PCLvl3.y +=5
  PCLvl3.scale += 0.005
}

if(PCLvl3.y < 600){
  PCLvl3.y = 605
}

if(PCLvl3.y > 800){
  PCLvl3.y = 799
}

console.log(PCLvl3.y)

if(carGroup.isTouching(PCLvl3)){
  crash.play()
  carGroup[0].destroy()
  lives = lives-1

}
if(lives === 0){
  carGroup.destroyEach();
  gameState = "over"
}

    cars();

if(ground2.x<-1500){
  gameState="Level3"
  carGroup.destroyEach()
}

if(mousePressedOver(q)&&gameState === "Level2"){
  gameState = "Intro-Level2"
}


  }


  // intro-level3
  if(gameState === "Intro-Level3"){
    f.visible = false
    fb.visible = false
    q.visible = false
    b.visible = false
        b2.visible = true
    doc.visible = false
    ground2.visible = false
    Background.visible = false;
    Background1.visible = false;
    o.visible = false

    Background2.visible = false
   //doc.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = true
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl21.visible=false;
    PCLvl23.visible=false
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false


    textSize(50)
    fill("white")
    textAlign(CENTER)
    text("Level 3",displayWidth/2,200)
    textSize(30)
    text("Stunning job! But it is not time to celebrate yet.",displayWidth/2,250)
    text("Use Arrow keys to move the doctor and kill the germs",displayWidth/2,350)
    text("Click on next button to continue.",displayWidth/2,450)


    if(mousePressedOver(NextButton3)&&gameState ==="Intro-Level3" ){
      gameState ="Level3"
    }

    
  }


  if(gameState === "Level3"){

     if(frameCount%80 === 0){
       y = random(100,400)
      germ = createSprite(displayWidth-200,y,10,10)
      germ.addImage(germIMG)
      germ.scale = 0.2 
      germ.velocityX = -4
     // germ.debug = true
      germsGroup.add(germ)

     }    

     if(doc.isTouching(germsGroup)){
      var rand = Math.round(random(1,4))
      switch(rand){
        case 1: smash.play()
        break;
        case 2: splat.play()
        break;
        case 3: punch.play()
        break;
        case 4: pew.play()
        default : break
      }
      germsGroup[0].destroy()
      score = score+1
    }

    f.visible = false
// newww
fb.visible = false
q.visible = true
doc.visible = true
ground2.visible = false
b.visible = false
Background.visible = false;
Background1.visible = false;
Background2.visible = true;    
o.visible = false
// doc.visible=true;
NextButton.visible = false
PlayButton.visible = false;
NextLevel1.visible = false
NextButton2.visible = false
NextButton3.visible = false
NextButton4.visible = false
NextButton5.visible = false
startButton.visible = false
Restart.visible = false
PCLvl21.visible=false;
PCLvl22.visible=false;
PCLvl23.visible=false;
container.visible = false;
check1.visible = false
check2.visible = false
check3.visible = false
PCLvl3.visible = false
Mayor.visible = false
back.visible = false
Medals.visible = false
Speech.visible = false



textSize(35)
fill("darkblue")
textAlign(CENTER)
text("SCORE : "+ score,1200,displayHeight-90)


camera.position.y = displayHeight/2

     if(doc.x= displayWidth){
      doc.x=160
    }

 if(keyDown(RIGHT_ARROW) )[
  doc.x = doc.x+10
]
if(keyDown(LEFT_ARROW) )[
  doc.x = doc.x-10
]
if(keyDown(UP_ARROW) )[
  doc.y = doc.y-10
]
if(keyDown(DOWN_ARROW) )[
  doc.y = doc.y+10
]

if(keyDown("space")){
  if(frameCount%5===0){
    Drops();
  }
}
/*if(frameCount%10===0){
Germs();

}*/
// Background.velocityX=-5



//doc.debug = true
doc.setCollider('rectangle',200,-10, 100,150)

//germsGroup.destroyEach();
dropsGroup.destroyEach();

if(score === 15){
  gameState = "End"
}

if(mousePressedOver(q)&&gameState === "Level3"){
  gameState = "Intro-Level3"
}

  } 

  if(gameState === "End"){
    q.visible = false
    f.visible = false
    fb.visible = false
    b.visible = false
        b2.visible = false
    doc.visible = false
    ground2.visible = false
    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
   // doc.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = true
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    o.visible = false

    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl21.visible=false;
    PCLvl23.visible=false
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false


    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("CONGRATULATIONS!!",displayWidth/2,300)
    textSize(40)
    text("You have done an excellent job!",displayWidth/2,400)

    if(mousePressedOver(NextButton4) && gameState === "End"){
      gameState = "End2"
    }

  }

    if(gameState === "End2"){
      q.visible = false
      f.visible = false
      fb.visible = true
      b.visible = false
          b2.visible = false
      doc.visible = false
      ground2.visible = false
      Background.visible = false;
      Background1.visible = false;
      Background2.visible = false
      //doc.visible=false;
      NextButton.visible = false
      PlayButton.visible = false;
      NextLevel1.visible = false
      NextButton2.visible = false
      NextButton3.visible = false
      NextButton4.visible = false
      NextButton5.visible = true
      startButton.visible = false
      o.visible = false

      Restart.visible = false
      PCLvl21.visible=false;
      PCLvl22.visible=false;
      PCLvl21.visible=false;
      PCLvl23.visible=false
      container.visible = false;
      check1.visible = false
      check2.visible = false
      check3.visible = false
      PCLvl3.visible = false
      Mayor.visible = true
      back.visible = true
      Medals.visible = true
      Speech.visible = true

      if(mousePressedOver(NextButton5) && gameState === "End2"){
        gameState = "Mssg"
      }


    }

    if(gameState === "Mssg"){
      q.visible = false
      f.visible = true
      fb.visible = false
      b.visible = false
          b2.visible = false
      doc.visible = false
      ground2.visible = false
      Background.visible = false;
      Background1.visible = false;
      Background2.visible = false
     // doc.visible=false;
      NextButton.visible = 
      o.visible = false

      PlayButton.visible = false;
      NextLevel1.visible = false
      NextButton2.visible = false
      NextButton3.visible = false
      NextButton4.visible = false
      NextButton5.visible = false
      startButton.visible = false
      Restart.visible = true
      PCLvl21.visible=false;
      PCLvl22.visible=false;
      PCLvl21.visible=false;
      PCLvl23.visible=false
      container.visible = false;
      check1.visible = false
      check2.visible = false
      check3.visible = false
      PCLvl3.visible = false
      Mayor.visible = false
      back.visible = false
      Medals.visible = false
      Speech.visible = false
    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("A final message from the creator:",displayWidth/2,displayHeight/2 - 300)
    textSize(30)
    text("'You don't have to save a city to be brave...",displayWidth/2,displayHeight/2 - 200)
    text("To be brave, be cautious, stay healthy, and help protect each other, ",displayWidth/2,displayHeight/2 - 100)
    textSize(40)
    text("#HandsSpaceSafe'",displayWidth/2,displayHeight/2)

    Restart.x = displayWidth/2
    Restart.y = displayHeight/2+200

    if(mousePressedOver(Restart) && gameState === "Mssg"){
      gameState = "Intro"
      score = 0
      lives = 0
      scoreLvl2 = 0
      Background.x = 2400
    }




    }


  

  if(gameState === "over"){
    q.visible = false
    b.visible = false
        b2.visible = false
    ground2.visible = false
    Background.visible = false;
    Background1.visible = false;
    o.visible = true
back.visible= false
    Background2.visible = false
   // doc.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = true
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl21.visible=false;
    PCLvl23.visible=false;
    container.visible = false;
    check1.visible = false;
    check2.visible = false;
    check3.visible = false;
    PCLvl3.visible = false;


  if(mousePressedOver(Restart) && gameState === "over"){
    gameState = "Intro"
    score = 0
    lives = 3
    scoreLvl2 = 0
    Background.x = 2400
  }


  }
}

/*function Germs(){
  if(frameCount%80===0){
    var y = random(200,displayHeight-200)
    germ = createSprite(800,y,10,10)
    germ.addImage(germIMG)
    germ.scale = 0.2
    germ.velocityX=-2
    germsGroup.add(germ)
  }
}*/

function Drops(){
 
  drops = createSprite(20,40,30,30)
  drops.addImage(dropIMG)
  drops.scale = 0.1
  drops.velocityX = 5
  dropsGroup.add(drops)
  
}

function Leak(){


  if(frameCount%40===0){
    vaccine = createSprite(random(displayWidth/2-300,displayWidth/2+300),100,10,10)
    vaccine.velocityY = 3;
    vaccine.addImage(d)
    vaccine.scale = 0.25
    vaccine.lifetime = 1000
    vaccineGroup.add(vaccine)
  }
 

}

function cars(){

  car = createSprite(displayWidth,10,10,10)
  car.visible= false 

  if(frameCount%160===0){
    var y = random(600,displayHeight-200)
    car.visible = true
    car.y = y
    var rand = Math.round(random(1,4))
    switch(rand){
      case 1: car.addImage(car1)
      break;
      case 2: car.addImage(car2)
      break;
      case 3: car.addImage(car3)
      break;
      case 4: car.addImage(car4)


      default : break
    }
    car.scale = 0.2
    car.velocityX=-2
    carGroup.add(car)
    
  }

    if(car.x === 600 ){
  console.log(cheryl)
    }
  

}