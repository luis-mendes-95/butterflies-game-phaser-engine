import Phaser from "phaser";
import { CST } from "./../CST"
import { MenuScene } from "./MenuScene"


//calling scene class to render a scene in game
export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }


    //preload functions
    preload(){


        //import assets - images
        this.load.image("title_bg", "assets/img/backgrounds/title_bg.svg");
        this.load.image("startButton", "assets/img/buttons/startButton.svg");
        this.load.image("title_letters", "assets/img/backgrounds/nome_jogo.svg");
        this.load.image("brand_logo", "assets/img/brand_logo.svg");




        //spritesheets - LOAD BUTTERFLIES
        this.load.spritesheet("butterfly", "assets/sprites/butterfly.svg", {frameHeight: 52, frameWidth: 78});
        this.load.spritesheet("butterflyYellow", "assets/sprites/butterflyYellow.svg", {frameHeight: 63, frameWidth: 75});
        this.load.spritesheet("butterflyRed", "assets/sprites/butterflyRed.svg", {frameHeight: 64, frameWidth: 74});
        this.load.spritesheet("butterflyorange", "assets/sprites/butterflyorange.png", {frameHeight: 52, frameWidth: 76});
        this.load.spritesheet("butterflyBrown", "assets/sprites/butterflyBrown.svg", {frameHeight: 69, frameWidth: 70});
        this.load.spritesheet("butterflyBlue", "assets/sprites/butterflyBlue.svg", {frameHeight: 52, frameWidth: 76});
        this.load.spritesheet("butterflyWhite", "assets/sprites/butterflyWhite.svg", {frameHeight: 64, frameWidth: 74});
        this.load.spritesheet("butterflyGreen", "assets/sprites/butterflyGreen.svg", {frameHeight: 52, frameWidth: 76});
        this.load.spritesheet("butterflyPink", "assets/sprites/butterflyPink.svg", {frameHeight: 52, frameWidth: 76});



        this.load.spritesheet("anna", "assets/sprites/anna.png", {frameHeight: 64, frameWidth: 64});


        //load sprite sheet atlas
        this.load.atlas("characters", "assets/sprites/characters.png","./assets/sprites/characters.json");
        this.load.atlas("daze", "assets/sprites/daze.png","./assets/sprites/daze.json");
        //audio
        this.load.audio("title_music", "assets/sounds/music/title_music.mp3");



        //declares loading bar
        let loadingBar = this.add.graphics({fillStyle: {color: 0xffff00}})


        //event progress
        this.load.on("progress", (percent: number)=>{//manage load events when in progress
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
        })
        //event complete
        this.load.on("complete", ()=>{//manage load events when done
            this.scene.start(CST.SCENES.MENU)
        })
        //event load
        this.load.on("load", (file: Phaser.Loader.File) => {//manage when a loading file event is done
            //console.log(file.src)
        })



        
    }

    create(){



    }
}