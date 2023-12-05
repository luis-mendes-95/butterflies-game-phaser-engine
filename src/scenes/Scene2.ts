// @ts-nocheck
import { CST } from "../CST"
import { Sprite } from "../Sprite";


//calling scene class to render a scene in game
export class Scene2 extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.SCENE2
        });

        this.isTextImageVisible = false;
        this.titleQuestion = 'Clique na resposta correta de acordo com as informações do texto.'
        this.question =  'O texto que você acabou de ler é:'
        this.selectedQuestion = 'none'
        
    }

    create(){
        
        const titleStyle = {
            fontFamily: 'coop', 
            fontSize: '48px',
            color: '#6D715E',
            align: 'center'
        };
        const questionStyle = {
            fontFamily: 'coop', 
            fontSize: '48px',
            color: '#036698',
            align: 'center'
        };
        const questionAnswerStyle = {
            fontFamily: 'coop', 
            fontSize: '48px',
            color: '#046604',
            align: 'center'
        };
        const checkCircleStyle = {
            fontFamily: 'coop', 
            fontSize: '200px',
            color: '#F70000',
            align: 'center'
        };
        



        const title = this.add.text(180, 30, this.titleQuestion, titleStyle);
        title.setDepth(2); 



        const question = this.add.text(570, 230, this.question, questionStyle);
        question.setDepth(2); 


        const checkCircle = this.add.text(280, 400, ".", checkCircleStyle);
        checkCircle.setDepth(2).setVisible(false); 
        



        //background display configurations
        const canvasWidth = this.game.renderer.width;
        const canvasHeight = this.game.renderer.height;
        let backgroundImage = this.add.image(0, 0, "scene2_bg");
        backgroundImage.setOrigin(0.5, 0.5); // Set the origin to the center
        backgroundImage.setDepth(0);
        const scaleX = canvasWidth / backgroundImage.width;
        const scaleY = canvasHeight / backgroundImage.height;
        const minScale = Math.min(scaleX, scaleY);
        backgroundImage.setScale(minScale);
        backgroundImage.setPosition(canvasWidth / 2, canvasHeight / 2);




        //add sprites in screen
        let backgroundButton = this.add.image(1550,960, "continueButton").setScale(1.6).setDepth(0);
        let confirmButton = this.add.image(1550,925, "confirmButton").setScale(1.6).setDepth(1);
        let backgroundButton2 = this.add.image(380,960, "startButton").setScale(1.6).setDepth(0);
        let textButton = this.add.image(380,925, "textButton").setScale(1.6).setDepth(1);
        let blackButterfly = new Sprite(this, 100, 100, CST.SPRITE.BUTTERFLY).setVisible(false);
        let textImage = this.add.image(740,500, "textScene2").setScale(1.4).setDepth(2).setVisible(this.isTextImageVisible);



        //create audio
        //this.sound.pauseOnBlur = false;
        //this.sound.play("title_music", {
        //    loop: true
        //})




        this.input.on('pointermove', function (pointer) {
            var mouseX = pointer.x;
            var mouseY = pointer.y;
            console.log('Mouse X:', mouseX, 'Mouse Y:', mouseY);
        });





        //create animation for black butterfly
        this.anims.create({
            key: "fly",
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterfly", {
                frames: [0, 1, 2]
            })
        })




        //set a invisible sprite to visible when hovering this element
        confirmButton.setInteractive();
        //event pointerover (mouse in)
        confirmButton.on("pointerover", ()=>{
            blackButterfly.setVisible(true);
            blackButterfly.play("fly");
            blackButterfly.x = 1740;
            blackButterfly.y = 850;
            this.input.setDefaultCursor("pointer");
        })
        //event pointerout (mouse out)
        confirmButton.on("pointerout", ()=>{
            blackButterfly.setVisible(false);
            this.input.setDefaultCursor("default");
        })
        //event pointerup (clicked)
        confirmButton.on("pointerup", ()=>{
            if(this.selectedQuestion === "flowerPink") {
                console.log("correto, passe")
            } else {
                console.log("incorreto, não passe")
                this.scene2_bg.setVisible(false);
            }

        })




        //set a invisible sprite to visible when hovering this element
        textButton.setInteractive();
        //event pointerover (mouse in)
        textButton.on("pointerover", ()=>{
            blackButterfly.setVisible(true);
            blackButterfly.play("fly");
            blackButterfly.x = 540;
            blackButterfly.y = 850;
            this.input.setDefaultCursor("pointer");
        })
        //event pointerout (mouse out)
        textButton.on("pointerout", ()=>{
            blackButterfly.setVisible(false);
            this.input.setDefaultCursor("default");
            textImage.setVisible(false);
            this.isTextImageVisible = false;
        })
        //event pointerup (clicked)
        textButton.on("pointerup", ()=>{
            if(this.isTextImageVisible === true) {
                textImage.setVisible(false);
                this.isTextImageVisible = false;
            } else if(this.isTextImageVisible === false) {
                textImage.setVisible(true);
                this.isTextImageVisible = true;
            }

        })


        
        //archetypal creation for flower option for question 
        const createFlower = (sprite, x, y) => {
            let currentFlower = this.add.sprite(x, y, sprite).setVisible(true).setScale(1.5);

            currentFlower.play(sprite);

            currentFlower.setInteractive();
            currentFlower.on("pointerover", ()=>{
                this.input.setDefaultCursor("pointer");
            })
            currentFlower.on("pointerout", ()=>{
                this.input.setDefaultCursor("default");
            })
            currentFlower.on("pointerup", ()=>{
                    checkCircle.x = currentFlower.x - 30;
                    checkCircle.y = currentFlower.y - 160;
                    checkCircle.setVisible(true);
                    this.selectedQuestion = sprite;
                    console.log(sprite)
            })

        };

        //flower options
        createFlower("flowerOrange", 300, 428);
        createFlower("flowerPink", 900, 428);
        createFlower("flowerWhite", 1550, 428);
        createFlower("flowerPurple", 580, 603);
        createFlower("flowerYellow", 1264, 603);




        //archetypal creation for flower option for question 
        const createAnswer = (sprite, x, y) => {
            let text = sprite
            const textAnswer = this.add.text(x, y, sprite, questionAnswerStyle);
            question.setDepth(2); 

        };

        //flower options
        createAnswer("Bilhete", 220, 508);
        createAnswer("Fábula", 500, 680);
        createAnswer("Poema", 820, 505);
        createAnswer("Carta", 1195, 680);
        createAnswer("Carta", 1490, 505);






    }

}