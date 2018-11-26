<template>
  <div id="carrousel">

        <carousel-3d style="height: 500px;">

      <!--   <slide v-for="(slide, i) in slides" :index="i">
          <span class="title">You know</span>
          <p>You know, being a test pilot isn't always the healthiest business in the world.</p>
        </slide> -->

          <slide id="firstSlide" :index="0" style="height:400px; width:500px;">
            <h1 @click="goTaverne()"> Taverne </h1>
          </slide>

          <slide id="secondSlide" :index="1" style="height:400px; width:500px;">
            <h1> Our Vision </h1>
          </slide>

          <slide id="thirdSlide" :index="2" style="height:400px; width:500px;">
            <h1> Game </h1>
          </slide>
        </carousel-3d>


          <img id="imgsrc" src="../../js/assets/homePage/logo.png" alt="grow logo" />
  </div>
</template>


<script>

import { Carousel3d, Slide } from 'vue-carousel-3d'
import Menu from './menu.vue'

export default {
  name : 'App',
  components: { Menu, Carousel3d, Slide },
  methods: {
    goTaverne() {
      this.$router.push({
        name:'taverne'
      });
    }
  }
}

</script>



<style>
#carrousel {
    background: url("../../js/assets/homePage/main2.jpg");
        background-size: auto auto;
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow : hidden;
}

#firstSlide{
  cursor : pointer;
  background: url('../../js/assets/homePage/taverne.jpg');
  background-size : 100% 100%;
}


#secondSlide{
  cursor : pointer;
  background: url('../../js/assets/homePage/game.jpg');
  background-size : 100% 100%;
}

#thirdSlide{
  cursor : pointer;
  background: url('../../js/assets/homePage/gam.jpg');
  background-size : 100% 100%;
}

.carousel-3d-container[data-v-c06c963c]{
  height: 500px;
  margin : 60px 0px;
}
.carousel-3d-slider[data-v-c06c963c]{
  margin: auto 520px;
}


h1{
  position: absolute;
  left: 40%;
  top: 0%;
  color: whitesmoke;
  text-shadow: 5px 5px 4px cornsilk;
}


#imgsrc{
  position: absolute;
  left: 35%;
  width: 30%;
  top: 69%;
}
</style>
