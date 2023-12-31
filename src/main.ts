import '/style.css'
import Phaser from 'phaser'
import { LoadScene } from './scenes/LoadScene';
import { MenuScene } from './scenes/MenuScene';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { Scene4 } from './scenes/Scene4';



//game configuration and calling main engine class
let game = new Phaser.Game({
    width: 1920,
    height: 1080,
    transparent: true,
    scene: [
        LoadScene,
        MenuScene,
        Scene1,
        Scene2,
        Scene3,
        Scene4
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
