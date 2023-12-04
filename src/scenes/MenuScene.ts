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


        //background display configurations
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


        //add title and logo to the screen
        let titleLetters = this.add.image(930, 250, "title_letters").setScale(1.3).setDepth(0);
        let brandLogo = this.add.image(230, 50, "brand_logo").setScale(1.3).setDepth(0).setAlpha(0.5);

        //add sprites in screen
        let startButton = this.add.image(300,200, "startButton").setOrigin(-2.3, -2.6).setScale(1.6).setDepth(0);
        let hoverSprite = new Sprite(this, 100, 100, CST.SPRITE.BUTTERFLY).setVisible(false);

        //create audio
        //this.sound.pauseOnBlur = false;
        //this.sound.play("title_music", {
        //    loop: true
        //})





        //create animation for black butterfly
        this.anims.create({
            key: "fly",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterfly", {
                frames: [0, 1, 2]
            })
        })
        //create animation for yellow butterfly
        this.anims.create({
            key: "butterflyYellow",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyYellow", {
                frames: [0, 1, 2]
            })
        })
        //create animation for red butterfly
        this.anims.create({
            key: "butterflyRed",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyRed", {
                frames: [0, 1, 2]
            })
        })
            
        //create animation for orange butterfly
        this.anims.create({
            key: "butterflyOrange",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyOrange", {
                frames: [0, 1, 2]
            })
        })

        //create animation for brown butterfly
        this.anims.create({
            key: "butterflyBrown",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyBrown", {
                frames: [0, 1, 2]
            })
        })

        //create animation for blue butterfly
        this.anims.create({
            key: "butterflyBlue",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyBlue", {
                frames: [0, 1, 2]
            })
        })       
        
        //create animation for white butterfly
        this.anims.create({
            key: "butterflyWhite",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyWhite", {
                frames: [0, 1, 2]
            })
        })

        //create animation for black butterfly
        this.anims.create({
            key: "butterflyBlack",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyBlack", {
                frames: [0, 1, 2]
            })
        })

        //create animation for green butterfly
        this.anims.create({
            key: "butterflyGreen",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyGreen", {
                frames: [0, 1, 2]
            })
        })        
        
        //create animation for pink butterfly
        this.anims.create({
            key: "butterflyPink",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyPink", {
                frames: [0, 1, 2]
            })
        })
        



        //set a invisible sprite to visible when hovering this element
        startButton.setInteractive();
        //event pointerover (mouse in)
        startButton.on("pointerover", ()=>{
            hoverSprite.setVisible(true);
            hoverSprite.play("fly");
            hoverSprite.x = 750;
            hoverSprite.y = 870;
            this.input.setDefaultCursor("pointer");
        })
        //event pointerout (mouse out)
        startButton.on("pointerout", ()=>{
            hoverSprite.setVisible(false);
            this.input.setDefaultCursor("default");
        })
        //event pointerup (clicked)
        startButton.on("pointerup", ()=>{
            this.scene.start(CST.SCENES.PLAY);
            this.input.setDefaultCursor("default");
        })

        const createButterfly = (sprite, x, y) => {
            let currentButterfly = this.add.sprite(x, y, sprite).setVisible(true);
            currentButterfly.setVisible(true);
            currentButterfly.play(sprite);
            currentButterfly.x = x;
            currentButterfly.y = y;
        }
        createButterfly("butterflyYellow", 110, 620);
        createButterfly("butterflyRed", 210, 620);

        createButterfly("butterflyOrange", 210, 620);
        createButterfly("butterflyBrown", 210, 620);
        createButterfly("butterflyBlue", 210, 620);
        createButterfly("butterflyWhite", 210, 620);
        createButterfly("butterflyBlack", 210, 620);
        createButterfly("butterflyGreen", 210, 620);
        createButterfly("butterflyPink", 210, 620);



    }

}