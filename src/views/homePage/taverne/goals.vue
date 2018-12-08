<template>
    <div id="goals" style="color: white;">
      <h1> Set Up Your Goals </h1>

      <div id="general_part" style="position: absolute;">

      </div>

     <todoBox id="todoBox" />


    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions   } from 'vuex'
import todoBox from './modules/toolbox/todoBox.vue'

export default {
  name: 'goals',
  data() {                                     // Add this:
    return {
      newLink: '',
      msg: ''
    }
  },
  components: {todoBox }

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

#todoBox{
  position: absolute;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  border-radius : 10px;
  text-align: center;
  background : grey;
}

</style>
