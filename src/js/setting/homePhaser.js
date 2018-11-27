
import Phaser from 'phaser';

import BootScene from '../module/Scene/BootScene.js'


/*
var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1360,
    height: 725,
    scene: {
        preload: preload,
        create: create
    }
};

*/
// var game = new Phaser.Game(config);

function launch () {
  var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1518,
    height: 740,
    parent: 'gamePart',
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 }, // Top down game, so no gravity
        debug: false
      }
    },
    scene: [BootScene]
    //scene: [BootScene, HouseOfMusicScene, TownScene, EmptyGrassField, NuitBlancheTown] // this defines, which number the scene has: Grow.scene.scenes[2].player;

    // scene: [BootScene, PlayScene]
    //scene: [BootScene, platformerScene]
  })
}




export default launch

export { launch }
