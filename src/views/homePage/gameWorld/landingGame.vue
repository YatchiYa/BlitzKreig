<template>
  <div id="gamePart">
    <h1 class="clickToStart">  Clique AnyWhere to Start !! </h1>
    <div>

        <img @click="logout" v-show="showLogOut" class="imToLogOut2" src= '../../../../static/assets/homePage/out.png' alt = " logout" />
    </div>

    <img @click="iShow" class="imToLogOut" src= '../../../../static/assets/homePage/out_2.png' alt = " logout" />

    </div>
</template>


<script>

import axios from 'axios'
import launch from '../../../js/setting/homePhaser.js'

export default {
  name: 'landingGame',
  data () {
    return {
      showLogOut: false
    }
  },
  methods: {
    iShow(){
      this.showLogOut = !this.showLogOut
    },
    logout () {
      localStorage.removeItem('jwtToken')
      this.$router.push({
        name: 'taverne'
      })
    }
  },
  mounted() {
    launch();
  },
  created () {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
    axios.get(`http://localhost:3000/initialization/landingGame`)
    .then(response => {
      console.log(" connected  as !!!" + response.token.username);
    })
    .catch(e => {
      if(e.response.status === 401) {
        alert(" not connected !! please Login to your compte !! ");
        this.$router.push({
          name: 'auth'
        });
      }
    })
  }
}

</script>


<style>
#gamePart{
  overflow : hidden;
  background: black;
}
#gamePart > canvas {
  cursor : none;
}
.clickToStart{
  top: 63%;
  left: 34%;
  animation: blink 2s linear infinite;
}

@keyframes blink{
  0%{opacity: 0;}
  50%{opacity: .5;}
  100%{opacity: 1;}
}


.imToLogOut {

    z-index: 5;
    position: absolute;
    width: 30px;
    background: rebeccapurple;
    border-radius: 150px;
    cursor: pointer;

}


.imToLogOut2 {

    position: absolute;
    width: 500px;
    border-radius: 80px;
    left: 460px;
    top: 110px;
}
</style>
