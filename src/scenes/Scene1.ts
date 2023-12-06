// @ts-nocheck
import { CST } from "../CST"
import { Sprite } from "../Sprite";


//calling scene class to render a scene in game
export class Scene1 extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.SCENE1
        });
        
    }

    create(){


        //background display configurations
        const canvasWidth = this.game.renderer.width;
        const canvasHeight = this.game.renderer.height;
        let backgroundImage = this.add.image(0, 0, "scene1_bg");
        backgroundImage.setOrigin(0.5, 0.5); // Set the origin to the center
        backgroundImage.setDepth(0);
        const scaleX = canvasWidth / backgroundImage.width;
        const scaleY = canvasHeight / backgroundImage.height;
        const minScale = Math.min(scaleX, scaleY);
        backgroundImage.setScale(minScale);
        backgroundImage.setPosition(canvasWidth / 2, canvasHeight / 2);


        //add moldure to the screen
        let moldure1 = this.add.image(960, 470, "moldure1").setScale(1.5).setDepth(0);

        //add sprites in screen
        let continueButton = this.add.image(1600,850, "continueButton").setScale(1.6).setDepth(0);
        let hoverSprite = new Sprite(this, 100, 100, CST.SPRITE.BUTTERFLY).setVisible(false);

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
        //create animation for black butterfly (2)
        this.anims.create({
            key: "butterfly",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterfly", {
                frames: [0, 1, 2]
            })
        })
        //create animation for yellow butterfly
        this.anims.create({
            key: "butterflyYellow",
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyYellow", {
                frames: [0, 1, 2]
            })
        })
        ////create animation for red butterfly
        this.anims.create({
            key: "butterflyRed",
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyRed", {
                frames: [0, 1, 2]
            })
        })
        //    
        ////create animation for orange butterfly
        this.anims.create({
            key: "butterflyorange",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyorange", {
                frames: [0, 1, 2]
            })
        })
//
        ////create animation for brown butterfly
        this.anims.create({
            key: "butterflyBrown",
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyBrown", {
                frames: [0, 1, 2]
            })
        })
//
        ////create animation for blue butterfly
        this.anims.create({
            key: "butterflyBlue",
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyBlue", {
                frames: [0, 1, 2]
            })
        })       
        
        ////create animation for white butterfly
        this.anims.create({
            key: "butterflyWhite",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyWhite", {
                frames: [0, 1, 2]
            })
        })
//
        ////create animation for green butterfly
        this.anims.create({
            key: "butterflyGreen",
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyGreen", {
                frames: [0, 1, 2]
            })
        })        
        
        ////create animation for pink butterfly
        this.anims.create({
            key: "butterflyPink",
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterflyPink", {
                frames: [0, 1, 2]
            })
        })
        



        //set a invisible sprite to visible when hovering this element
        continueButton.setInteractive();
        //event pointerover (mouse in)
        continueButton.on("pointerover", ()=>{
            hoverSprite.setVisible(true);
            hoverSprite.play("fly");
            hoverSprite.x = 1780;
            hoverSprite.y = 745;
            this.input.setDefaultCursor("pointer");
        })
        //event pointerout (mouse out)
        continueButton.on("pointerout", ()=>{
            hoverSprite.setVisible(false);
            this.input.setDefaultCursor("default");
        })
        //event pointerup (clicked)
        continueButton.on("pointerup", ()=>{
            this.scene.start(CST.SCENES.SCENE2);
            this.input.setDefaultCursor("default");
        })

        const createButterfly = (sprite, x, y) => {
            let currentButterfly;

            currentButterfly = this.add.sprite(x, y, sprite).setVisible(true).setScale(1.5);
            currentButterfly.play(sprite);

        };

        createButterfly("butterflyYellow", 580, 66);
        createButterfly("butterflyRed", 587, 233);
        createButterfly("butterflyorange", 619, 479);
        createButterfly("butterflyBrown", 600, 726);
        createButterfly("butterflyBlue", 1317, 104);
        createButterfly("butterflyWhite", 1307, 229);
        createButterfly("butterflyGreen", 1331, 608);
        createButterfly("butterflyPink", 1322, 815);
        createButterfly("butterfly", 1311, 442);


        







    }

}