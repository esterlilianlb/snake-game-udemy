import MainScene from "./MainScene.js";

const config = {
    width: 600,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: [MainScene]
};

new Phaser.Game(config)