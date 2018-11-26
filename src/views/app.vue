<template>
    <div id="app">

      <router-view/>
    </div>
</template>


<script>


export default {
  name : 'App',
  data () {
    return {}
  }
}
</script>


<style>
body{
  margin: 0;
  background-size : cover;
  filter : blur;
}
#app{
  position : absolute;
  width: 100%;
  height : 100%;
}

</style>
