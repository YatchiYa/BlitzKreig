
import Phaser from 'phaser';

import tiles0 from "./assets/home.png"
import tiles1 from "./assets/papi2.png"
import tiles2 from "./assets/papi.png"

var config = {
    type: Phaser.WEBGL,  // .canvas
    parent: 'phaser-example',
    width: 1360,
    height: 725,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('pic', tiles0);
    this.load.image('magnify-out', tiles1);
    this.load.image('magnify-in', tiles2);
}

function create ()
{
    this.add.image(400, 300, 'pic').setTint(0x2d2d2d);

    //  The scale creates a slight magnification effect
    var pic = this.add.image(400, 300, 'pic').setScale(1.02);

    var lense = this.make.sprite({
        x: 400,
        y: 300,
        key: 'magnify-in',
        add: false
    });

    pic.mask = new Phaser.Display.Masks.BitmapMask(this, lense);

    var magnify = this.add.image(400, 300, 'magnify-out');

    this.input.on('pointermove', function (pointer) {

        lense.x = pointer.x;
        lense.y = pointer.y;

        magnify.x = pointer.x;
        magnify.y = pointer.y;

    });
}
