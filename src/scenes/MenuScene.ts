// @ts-nocheck
import { CST } from "../../src/CST"
import { Sprite } from "../Sprite";


//calling scene class to render a scene in game
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        });
        
    }

    create(){


        //BACKGROUND DISPLAY CONFIGURATIONS
        const canvasWidth = this.game.renderer.width;
        const canvasHeight = this.game.renderer.height;
        let backgroundImage = this.add.image(0, 0, "title_bg");
        backgroundImage.setOrigin(0.5, 0.5); // Set the origin to the center
        backgroundImage.setDepth(0);
        const scaleX = canvasWidth / backgroundImage.width;
        const scaleY = canvasHeight / backgroundImage.height;
        const minScale = Math.min(scaleX, scaleY);
        backgroundImage.setScale(minScale);
        backgroundImage.setPosition(canvasWidth / 2, canvasHeight / 2);




        //ADD ELEMENTS IN SCENE
        //images
        let titleLetters = this.add.image(930, 250, "title_letters").setScale(1.3).setDepth(0);
        let brandLogo = this.add.image(230, 50, "brand_logo").setScale(1.3).setDepth(0).setAlpha(0.5);
        let startButton = this.add.image(300,200, "startButton").setOrigin(-2.3, -2.6).setScale(1.6).setDepth(0);
        //sprites
        let hoverSprite = new Sprite(this, 100, 100, CST.SPRITE.BUTTERFLY).setVisible(false);



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
        



        //START BUTTON MOUSE FUNCTIONS
        startButton.setInteractive();
        startButton.on("pointerover", ()=>{
            hoverSprite.setVisible(true);
            hoverSprite.play("fly");
            hoverSprite.x = 750;
            hoverSprite.y = 870;
            this.input.setDefaultCursor("pointer");
        })
        startButton.on("pointerout", ()=>{
            hoverSprite.setVisible(false);
            this.input.setDefaultCursor("default");
        })
        startButton.on("pointerup", ()=>{
            this.scene.start(CST.SCENES.SCENE1);
            this.input.setDefaultCursor("default");
        })




        //CREATE BUTTERFLIES WITH IMAGE AND XY LOCATIONS
        const createButterfly = (sprite, x, y) => {
            let currentButterfly;

            currentButterfly = this.add.sprite(x, y, sprite).setVisible(true).setScale(1.5);
            currentButterfly.play(sprite);

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