export class Sprite extends Phaser.GameObjects.Sprite {
    hp: number; //custom feature

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setScale(1);
        this.setOrigin(0, 0);
        this.hp = 10; //custom feature
    }
}