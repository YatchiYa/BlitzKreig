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
  filter : blur;
}
#app{
  position : absolute;
  width: 1535px;
  height : 100%;
  overflow: auto;
}

</style>
