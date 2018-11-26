<template>
  <div id="taverne">

    <header> <span id="tav"> Taverne </span> </header>

    <div id="chatBox"> chat Box ! </div>

    <footer>
      <div class="bull Presentation"> <h2> Presentation  </h2></div>
      <div class="bull feedback"> <h2> feedback  </h2></div>
      <div class="bull fun"> <h2> Fun </h2></div>
      <div class="bull Goal !"> <h2> Goals  </h2></div>
    </footer>

  </div>
</template>


<script>


export default {
  name : 'App',
  components: { },
}

</script>

<style>
#taverne{
  background: url('../../../js/assets/homePage/tav.jpg');
  background-size: cover;
  overflow: auto;
}

.bull{
  background: rgba(100,220,100,0.8);
  width: 150px;
  height: 150px;
  border-radius: 110px;
  cursor: pointer;
  border: 8px groove green;
}
.bull > h2{
  color: white;
  margin-top:55px;
}

#chatBox{
  position: relative;
  background : white;
  height: 450px;
  width : 1000px;
  margin: auto;
  border: 1px solid black;
  margin-top: 70px;
}
footer{
  position: relative;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin: 30px auto;
}
header{
  text-align: center;
}
#tav{
  position: relative;
  font-size: 30px;
  top: 35px;
  color: rebeccapurple;
  text-shadow: 3px 3px 4px cornsilk;
}
</style>
