import '/style.css'
import Phaser from 'phaser'
import { LoadScene } from './scenes/LoadScene';
import { MenuScene } from './scenes/MenuScene';
import { PlayScene } from './scenes/PlayScene';


//game configuration and calling main engine class
let game = new Phaser.Game({
    width: 1920,
    height: 1080,
    scene: [
        LoadScene,
        MenuScene,
        PlayScene
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
