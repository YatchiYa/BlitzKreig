<template>
    <div ref="goals" id="goals" style="color: white;">
      <h1> Set Up Your Challenges </h1>

      <todoBox v-show="ToDoShow" id="todoBox" />

    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions   } from 'vuex'
import todoBox from './modules/toolbox/todoBox.vue'


export default {
  name: 'goals',
  data() {                                     // Add this:
    return {
    }
  },
  components: {todoBox },
  methods: {
    ...mapMutations('toolbox',[
      'HideToDo'
    ]),

    hideToDo(){
      this.HideToDo('i')
    }
  },
  computed: {
      ...mapState('toolbox',[
      'ToDoShow'
    ])
  },
  created() {
    // const button = this.$refs.goals
    console.log(this.ToDoShow)
    // showing the different compenets

    window.addEventListener('keydown', (e) => {
      console.log(e)
      switch(e.key){
        case 'F1':
         this.hideToDo()
        break;
      }


    });


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

#todoBox {

    position: absolute;
    width: 500px;
    height: 500px;
    background: rgba(20, 221, 128, 0.5);
    border: 1px solid #52ff00;
    border-radius: 22px;
    box-shadow: 5px 5px 5px #92ff00;

}


</style>
