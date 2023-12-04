// @ts-nocheck
import { CST } from "../CST";
import { CharacterSprite } from "../CharacterSprite";


//calling scene class to render a scene in game
export class PlayScene extends Phaser.Scene {

    constructor() {
        super({ 
            key: CST.SCENES.PLAY
        });
        
    }



    preload(){

/**CHARACTER SPRITES STUFF**********************************************************************/

        /**HOODED CHARACTER */
        //add textures from atlas into screen
        this.textures.addSpriteSheetFromAtlas("hooded", {frameHeight: 64, frameWidth: 64, atlas: "characters", frame: "hooded"});
        //create sprite animation idle
        this.anims.create({
            key: "idle",
            frameRate: 10,
            frames: this.anims.generateFrameNames("hooded", {
                frames: [234],
            }),
            repeat: false
        });
        //create sprite animation walk right
        this.anims.create({
            key: "right",
            frameRate: 10,
            frames: this.anims.generateFrameNames("hooded", {
                frames: [143, 144, 145, 146, 147, 148, 149, 150, 151],
            }),
            repeat: -1
        });
        //create sprite animation walk left
        this.anims.create({
            key: "left",
            frameRate: 10,
            frames: this.anims.generateFrameNames("hooded", {
                frames: [117, 118, 119, 120, 121, 122, 123, 124, 125],
            }),
            repeat: -1
        });
        //create sprite animation walk fwd
        this.anims.create({
            key: "fwd",
            frameRate: 10,
            frames: this.anims.generateFrameNames("hooded", {
                frames: [104, 105, 106, 107, 108, 109, 110, 111, 112],
            }),
            repeat: -1
        });
        //create sprite animation walk bwd
        this.anims.create({
            key: "bwd",
            frameRate: 10,
            frames: this.anims.generateFrameNames("hooded", {
                frames: [130, 131, 132, 133, 134, 135, 136, 137, 138],
            }),
            repeat: -1
        });



        /**ANNA CHARACTER */
        //add textures from atlas into screen
        this.textures.addSpriteSheetFromAtlas("mandy", {frameHeight: 64, frameWidth: 64, atlas: "characters", frame: "mandy"});

/**VISUAL EFFECTS SPRITES STUFF**********************************************************************/

        //prints the current engine textures list
        console.log(this.textures.list)

        //create sprite aniimation for magic attack effect
        this.anims.create({
            key: "dazzle",
            frameRate: 20,
            frames: this.anims.generateFrameNames("daze", {
                prefix: "daze0",
                suffix: ".png",
                start: 0,
                end: 41,
                //frames: [0,1,2,3,4,5]
            }),
            repeat: false,
        });


        //add collision to magical attacks sprites
        this.magicAttacks = this.physics.add.group();

    }

    create() {

        //declares a new variable for a sprite from an atlas and plays an existing animation
        this.hooded = new CharacterSprite(this, 200, 200, "hooded", 0);
        this.hooded.setCollideWorldBounds(true);
        this.mandy = this.physics.add.sprite(400, 200, "mandy").setScale(2).setImmovable(false);
        this.hooded.setCollideWorldBounds(true);

        //set smaller hit box
        this.hooded.setSize(35,50).setOffset(10,10);

        
        //create group of enemies
        this.assassins = this.physics.add.group({immovable: true});
        this.assassins.add(this.mandy);

        
        //turn all these variables into global accessible
        window.hooded = this.hooded;
        window.mandy = this.mandy;
        window.pimple = this.pimple;


        /** * gameobject events: * animationstart * animationrepeat * animationupdate * animationcomplete         */
        //event animation update
        //hooded.on("animationupdate", () => {
        //    console.log("Animation is updating")
        //})
        //event animation update
        //hooded.on("animationrepeat", () => {
        //    console.log("Animation just restarted")
        //})



        //configures KEYBOARD controllers
        this.keyboard = this.input.keyboard.addKeys("W, A, S, D");

        //configures MOUSE controllers
        this.input.on("pointermove", (pointer: Phaser.Input.Pointer)=>{ //event mouse move
            if(pointer.isDown){ //is clicking
                let dazzle = this.add.sprite(pointer.x, pointer.y, "daze").play("dazzle");
                this.magicAttacks.add(dazzle);
                dazzle.on("animationcomplete", () => {
                    dazzle.destroy();
                })
            }
        })


        /**COLLISIONS BETWEEN OBJECTS ***********************/
        //collision between magic attacks and enemies
        this.physics.world.addCollider(this.magicAttacks, this.assassins, (magicAttacks, mandy)=>{
            magicAttacks.destroy();
            mandy.destroy();

            let x = 0;
            let y = 0;
            switch (Phaser.Math.Between(0, 1)) {
                case 0: x = Phaser.Math.Between(0, this.game.renderer.width);
                    break;
                case 1: y = Phaser.Math.Between(this.game.renderer.height)
            }

            for(let i = 0; i < 2; i++) {
                this.assassins.add(this.physics.add.sprite(x, y, "mandy").setScale(2).setImmovable(true));
            }
        });





    }



    update(time: number, delta: number){ //delta 16.666 @ 60fps

        /**MOVING CHARACTERS BY CONTROLS ***********************/
        if(this.hooded){
            if (this.keyboard.D.isDown && this.keyboard.A.isUp && this.keyboard.W.isUp && this.keyboard.S.isUp){
                this.hooded.setVelocityX(128);
                this.hooded.play("right", true);
            } else if (this.keyboard.S.isDown && this.keyboard.A.isUp && this.keyboard.W.isUp && this.keyboard.D.isUp) {
                this.hooded.setVelocityX(0);
                this.hooded.setVelocityY(128);
                this.hooded.play("bwd", true);
            } else if (this.keyboard.A.isDown && this.keyboard.S.isUp && this.keyboard.W.isUp && this.keyboard.D.isUp) {
                this.hooded.setVelocityX(-128);
                this.hooded.setVelocityY(0);
                this.hooded.play("left", true);
            } else if (this.keyboard.W.isDown && this.keyboard.S.isUp && this.keyboard.A.isUp && this.keyboard.D.isUp) {
                this.hooded.setVelocityX(0);
                this.hooded.setVelocityY(-128);
                this.hooded.play("fwd", true);
            } else {
                this.hooded.setVelocityX(0);
                this.hooded.setVelocityY(0);
                this.hooded.play("idle", true);
            }
        }


        /**COLLISIONS BETWEEN OBJECTS ***********************/
        for(let i = 0; i < this.assassins.getChildren().length; i++) {
            this.physics.accelerateToObject(this.assassins.getChildren()[i], this.hooded);
        }




        }
}