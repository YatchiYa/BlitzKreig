<template>
  <div id="gameLand">
      <auth v-show="showAuth"/>
      <landingGame v-show="showLand"/>

  </div>
</template>


<script>
import auth from './taverne/auth.vue'
import landingGame from './gameWorld/landingGame.vue'

export default {
  name : 'gameLand',
  data() {
    return {
      showAuth : true,
      showLand : false
    }
  },
  components: { landingGame, auth },
  methods: {
  },
  mounted() {
  }
}

</script>



<style>

</style>
