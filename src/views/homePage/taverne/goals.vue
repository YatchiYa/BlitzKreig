<template>
    <div id="goals" style="color : white;">
      <h1> Set Up Your Goals </h1>

      <div id="general_part" style="position: absolute;">

      </div>


      <label for="flavor">Favorite ice cream flavor?</label>
		    <input name="flavor">



        <p>You chose ???</p>
    </div>
</template>


<script>


export default {
  name : 'goals',
  data () {
    return {}
  }
}
</script>


<style>
#goals{
  background-image: url('../../../../static/assets/homePage/goals.jpg');
  width : 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 802px;
    overflow: auto;
    background-size: 100% 100%;
}


</style>
