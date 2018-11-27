<template>
  <div id="gamePart">
    <h1 class="clickToStart">  Clique AnyWhere to Start !! </h1>

    </div>
</template>


<script>

import launch from '../../../js/setting/homePhaser.js'

export default {
  name: 'landingGame',
  mounted() {
    launch();
  }
}

</script>


<style>
#gamePart{
  overflow : hidden;
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

</style>
