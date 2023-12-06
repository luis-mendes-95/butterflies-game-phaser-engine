// @ts-nocheck
import { CST } from "../CST"
import { Sprite } from "../Sprite";




//calling scene class to render a scene in game
export class Scene4 extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.SCENE4
        });




        this.isTextImageVisible = false;
        this.titleQuestion = 'Cliquyyy na resposta correta de acordo com as informações do texto.'
        this.question =  'O que as borboletas estavam fazendo juntas?'
        this.selectedQuestion = 'none'
        this.wrongQuestionText = 'Resposta Incorreta!'
        this.restartText =  'Tente Novamente.'
        this.congratulationText = 'Parabéns!'
        this.questionRightText =  'Resposta correta.'
        



    }




    create(){
        



        /**TEXTS STYLES */
        const titleStyle = {
            fontFamily: 'coop', 
            fontSize: '48px',
            color: '#6D715E',
            align: 'center'
        };
        const wrongQuestionStyle = {
            fontFamily: 'coop', 
            fontSize: '100px',
            color: '#990000',
            align: 'center'
        };
        const congratulationTextStyle = {
            fontFamily: 'coop', 
            fontSize: '100px',
            color: '#FF6600',
            align: 'center'
        };
        const restartTextStyle = {
            fontFamily: 'coop', 
            fontSize: '100px',
            color: '#336600',
            align: 'center'
        };
        const questionRightTextStyle = {
            fontFamily: 'coop', 
            fontSize: '100px',
            color: '#336600',
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
        



        /**TEXTS ELEMENTS ON SCREEN */
        const title = this.add.text(180, 30, this.titleQuestion, titleStyle).setDepth(2);
        const wrongQuestion = this.add.text(500, 130, this.wrongQuestionText, wrongQuestionStyle).setVisible(false).setDepth(2); 
        const congratulationText = this.add.text(740, 130, this.congratulationText, congratulationTextStyle).setVisible(false).setDepth(2); 
        const restartText = this.add.text(520, 280, this.restartText, restartTextStyle).setVisible(false).setDepth(2); 
        const questionRightText = this.add.text(540, 240, this.questionRightText, questionRightTextStyle).setVisible(false).setDepth(2); 
        const question = this.add.text(420, 230, this.question, questionStyle).setDepth(2); 
        const checkCircle = this.add.text(280, 400, ".", checkCircleStyle).setDepth(2).setVisible(false); 
        



        //BACKGROUND DISPLAY CONFIGURATIONS
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

        


        //ADD SPRITES IN SCREEN
        let backgroundButton = this.add.image(1550,960, "continueButton").setScale(1.6).setDepth(0);
        let confirmButton = this.add.image(1550,925, "confirmButton").setScale(1.6).setDepth(1);
        let backgroundButton2 = this.add.image(380,960, "startButton").setScale(1.6).setDepth(0);
        let textButton = this.add.image(380,925, "textButton").setScale(1.6).setDepth(1);
        let blackButterfly = new Sprite(this, 100, 100, CST.SPRITE.BUTTERFLY).setVisible(false);
        let textImage = this.add.image(740,500, "textScene2").setScale(1.4).setDepth(2).setVisible(this.isTextImageVisible);
        let returnButton = this.add.image(970,976, "returnButton").setScale(1.4).setDepth(2).setVisible(false);
        let continueButton = this.add.image(970,976, "continueButton").setScale(1.4).setDepth(2).setVisible(false);



 
        //CREATE GROUP OF ITEMS TO HIDE WHEN QUESTION IS WRONG
        const showOnConfirmWrongGroup = this.add.group();
        showOnConfirmWrongGroup.add(title);
        showOnConfirmWrongGroup.add(question);
        showOnConfirmWrongGroup.add(textButton);
        showOnConfirmWrongGroup.add(backgroundButton2);
        showOnConfirmWrongGroup.add(checkCircle);
        showOnConfirmWrongGroup.add(backgroundButton);
        showOnConfirmWrongGroup.add(confirmButton);




        //CREATE GROUP OF ITEMS TO SHOW WHEN QUESTION IS RIGHT
        const showOnConfirmRightGroup = this.add.group();





        //DEBUG FOR MOUSE LOCATION - CONSOLE LOGS IT
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
        })//BLACK BUTTERFLY HOVER IN SCENE
        this.anims.create({
            key: "butterfly",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterfly", {
                frames: [0, 1, 2]
            })
        })//BLACK BUTTERFLY
        this.anims.create({
            key: "butterflyYellow",
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyYellow", {
                frames: [0, 1, 2]
            })
        })//YELLOW BUTTERFLY
        this.anims.create({
            key: "butterflyRed",
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyRed", {
                frames: [0, 1, 2]
            })
        })//RED BUTTERFLY
        this.anims.create({
            key: "butterflyorange",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyorange", {
                frames: [0, 1, 2]
            })
        })//ORANGE BUTTERFLY
        this.anims.create({
            key: "butterflyBrown",
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyBrown", {
                frames: [0, 1, 2]
            })
        })//BROWN BUTTERFLY
        this.anims.create({
            key: "butterflyBlue",
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyBlue", {
                frames: [0, 1, 2]
            })
        })//BLUE BUTTERFLY   
        this.anims.create({
            key: "butterflyWhite",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyWhite", {
                frames: [0, 1, 2]
            })
        })//WHITE BUTTERFLY 
        this.anims.create({
            key: "butterflyGreen",
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyGreen", {
                frames: [0, 1, 2]
            })
        })//GREEN BUTTERFLY 
        this.anims.create({
            key: "butterflyPink",
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyPink", {
                frames: [0, 1, 2]
            })
        })//PINK BUTTERFLY




        //HIDE AND SHOWELEMENTS FROM THE GROUPS CREATED
        const hideAllElements = () => {
            showOnConfirmWrongGroup.setVisible(false);
        };
        const showAllElements = () => {
            showOnConfirmWrongGroup.setVisible(true);
        };
        const showAllButterflies = () => {
            showOnConfirmRightGroup.setVisible(true);
        };
        const hideAllButterflies = () => {
            showOnConfirmRightGroup.setVisible(false);
        };




        //CONFIRM BUTTON MOUSE FUNCTIONS
        confirmButton.setInteractive();
        confirmButton.on("pointerover", ()=>{
            blackButterfly.setVisible(true);
            blackButterfly.play("fly");
            blackButterfly.x = 1740;
            blackButterfly.y = 850;
            this.input.setDefaultCursor("pointer");
        })
        confirmButton.on("pointerout", ()=>{
            blackButterfly.setVisible(false);
            this.input.setDefaultCursor("default");
        })
        confirmButton.on("pointerup", ()=>{
            if(this.selectedQuestion === "flowerPink") {
                console.log("incorreto, não passe")
                backgroundImage.setTexture("title_bg");
                blackButterfly.setVisible(false);
                continueButton.setVisible(true);
                congratulationText.setVisible(true);
                questionRightText.setVisible(true);
                hideAllElements();
                showAllButterflies();
            } else {
                console.log("incorreto, não passe")
                backgroundImage.setTexture("title_bg");
                blackButterfly.setVisible(false);
                returnButton.setVisible(true);
                wrongQuestion.setVisible(true);
                restartText.setVisible(true);
                hideAllElements();
            }

        })




        //TEXT BUTTON MOUSE FUNCTIONS
        textButton.setInteractive();
        textButton.on("pointerover", ()=>{
            blackButterfly.setVisible(true);
            blackButterfly.play("fly");
            blackButterfly.x = 540;
            blackButterfly.y = 850;
            this.input.setDefaultCursor("pointer");
        })
        textButton.on("pointerout", ()=>{
            blackButterfly.setVisible(false);
            this.input.setDefaultCursor("default");
            textImage.setVisible(false);
            this.isTextImageVisible = false;
        })
        textButton.on("pointerup", ()=>{
            if(this.isTextImageVisible === true) {
                textImage.setVisible(false);
                this.isTextImageVisible = false;
            } else if(this.isTextImageVisible === false) {
                textImage.setVisible(true);
                this.isTextImageVisible = true;
            }

        })




        //RETURN BUTTON MOUSE FUNCTIONS
        returnButton.setInteractive();
        returnButton.on("pointerover", ()=>{
            blackButterfly.setVisible(true);
            blackButterfly.play("fly");
            blackButterfly.x = 770;
            blackButterfly.y = 890;
            this.input.setDefaultCursor("pointer");
        })
        returnButton.on("pointerout", ()=>{
            blackButterfly.setVisible(false);
            this.input.setDefaultCursor("default");
            textImage.setVisible(false);
            this.isTextImageVisible = false;
        })
        returnButton.on("pointerup", ()=>{
            backgroundImage.setTexture("scene2_bg");
            blackButterfly.setVisible(false);
            returnButton.setVisible(false);
            wrongQuestion.setVisible(false);
            restartText.setVisible(false);
            showAllElements();
            checkCircle.setVisible(false);

        })



        //RETURN BUTTON MOUSE FUNCTIONS
        continueButton.setInteractive();
        continueButton.on("pointerover", ()=>{
            blackButterfly.setVisible(true);
            blackButterfly.play("fly");
            blackButterfly.x = 740;
            blackButterfly.y = 890;
            this.input.setDefaultCursor("pointer");
        })
        continueButton.on("pointerout", ()=>{
            blackButterfly.setVisible(false);
            this.input.setDefaultCursor("default");
            textImage.setVisible(false);
            this.isTextImageVisible = false;
        })
        continueButton.on("pointerup", ()=>{
            hideAllButterflies();
            this.scene.start(CST.SCENES.SCENE4);
            this.input.setDefaultCursor("default");

        })



        
        //CREATE FLOWERS USING IMAGE AND XY LOCATION 
        const createFlower = (sprite, x, y) => {
            let currentFlower = this.add.sprite(x - 100, y, sprite).setVisible(true).setScale(1.5);

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
            })
            showOnConfirmWrongGroup.add(currentFlower);

        };
        createFlower("flowerOrange", 300, 428);
        createFlower("flowerPink", 900, 428);
        createFlower("flowerWhite", 1550, 428);
        createFlower("flowerPurple", 580, 603);
        createFlower("flowerYellow", 1264, 603);




        //CREATE ANSWERS USING TEXT AND XY LOCATION 
        const createAnswer = (sprite, x, y) => {
            let text = sprite
            const textAnswer = this.add.text(x + 80, y - 100, sprite, questionAnswerStyle);
            question.setDepth(2); 
            showOnConfirmWrongGroup.add(textAnswer);

        };
        createAnswer("Dançando", 220, 508);
        createAnswer("Voando", 500, 680);
        createAnswer("Brincando", 820, 505);
        createAnswer("Trabalhando", 1195, 680);
        createAnswer("Conversando", 1490, 505);




        //CREATE BUTTERFLIES WITH IMAGE AND XY LOCATIONS
        const createButterfly = (sprite, x, y) => {
            let currentButterfly;

            currentButterfly = this.add.sprite(x, y, sprite).setVisible(true).setScale(1.5);
            currentButterfly.play(sprite);
            currentButterfly.setVisible(false);
            showOnConfirmRightGroup.add(currentButterfly);

        };
        createButterfly("butterflyYellow", 150, 650);
        createButterfly("butterflyRed", 370, 600);
        createButterfly("butterflyorange", 650, 600);
        createButterfly("butterflyBrown", 790, 720);
        createButterfly("butterflyBlue", 1120, 580);
        createButterfly("butterflyWhite", 1120, 720);
        createButterfly("butterflyGreen", 1490, 720);
        createButterfly("butterflyPink", 1590, 560);
        createButterfly("butterfly", 1340, 540);



    }




}