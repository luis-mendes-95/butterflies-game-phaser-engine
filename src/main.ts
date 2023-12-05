import '/style.css'
import Phaser from 'phaser'
import { LoadScene } from './scenes/LoadScene';
import { MenuScene } from './scenes/MenuScene';
import { Scene1 } from './scenes/Scene1';


//game configuration and calling main engine class
let game = new Phaser.Game({
    width: 1920,
    height: 1080,
    scene: [
        LoadScene,
        MenuScene,
        Scene1
    ],
    render:{
        pixelArt: false
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    }
})
