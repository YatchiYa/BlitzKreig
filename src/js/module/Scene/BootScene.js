
import tiles0 from "../../../../static/assets/home.jpg"
import tiles1 from "../../../../static/assets/papi2.png"
import tiles2 from "../../../../static/assets/papi.png"
import tiles3 from "../../../../static/assets/homePage/grow2.png"
import tiles4 from "../../../../static/assets/homePage/growLogo.png"

class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'BootScene'
        });

     }


    preload () {
      this.load.image('pic', tiles0);
      this.load.image('magnify-out', tiles1);
      this.load.image('magnify-in', tiles2);
      this.load.image('forLand', tiles3);
      this.load.image('logo', tiles4);
    }

    create (data) {

          this.add.image(400, 300, 'pic').setTint(0x2d2d2d);
          this.add.image(700, 400, 'forLand');
          this.add.image(1440, 690, 'logo');

          // let text = this.add.text(530, 480, "Clique Enter To Continue !! ", {font: "30px Kells", fill: "#ce21d3"});



          //  The scale creates a slight magnification effect
          var pic = this.add.image(390, 290, 'pic').setScale(1.04);

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


                  function fadeText() {

                  }

        }

        update(){

        }
}

export default BootScene;
