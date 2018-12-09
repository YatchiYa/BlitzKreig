<template>


        <vue-draggable-resizable id="toDoDraggable" :w="500" :h="500" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">

          <h2 style="color: lime;text-shadow: 5px 5px 5px green;text-align: center; overflow: auto;"> ToDo's List </h2>

         <form @submit.prevent="addLink" style="text-align: center;">
            <label for="title"> You want ?  </label> <br/>
            <input  name="title" class="link-input" type="text" placeholder="Add a Link" v-model="newTodo" size="50"/>
         </form>


         <div class="conainer_todos" style="width: 400px;height: 250px;margin: 51px 49px; width: 80%; overflow: auto;" >
           <div class="todos_list" v-for="(todo, index) in todos" v-bind:key="index">
             {{ todo }}
             <div v-on:click="removeLinks(index)" style="background: red none repeat scroll 0% 0%; float: right;width: 10px;margin-right: 5px;border-radius: 60px;cursor: pointer;margin-top: -6px;">x</div>  <!-- Add this -->
           </div>
         </div>
                <p style="text-align:center;">({{ countTodoDone }}/{{ countLinks }})</p>

         <button style="float: right;margin-top: -35px;" v-on:click="removeAllLinks">Remove all todos</button>
                <p style="margin-top: -35px;">{{ msg }}</p>

       </vue-draggable-resizable>


</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions   } from 'vuex'
import VueDraggableResizable from 'vue-draggable-resizable'
import axios from 'axios'

export default {
  name: 'goals',
  data() {                                     // Add this:
    return {
      newTodo: '',
      msg: ''
    }
  },
  components: { VueDraggableResizable},
  computed: {
      ...mapState('ToDo',[
      'todos'
    ]),

    ...mapGetters('ToDo',[
      'countLinks'
    ]),
    ...mapGetters('ToDo',[
      'countTodoDone'
    ]),

  },

  methods: {                                   // Add this:
    ...mapMutations('ToDo',[
      'ADD_LINK'
    ]),
    ...mapActions('ToDo',[                  // Add this
      'removeLink'
    ]),
    addLink: function() {
      this.ADD_LINK(this.newTodo)
      this.newTodo = ''
    },
    removeLinks: function(todo) {    // Add this
      this.removeLink(todo)
    },

    ...mapMutations('ToDo', ['REMOVE_ALL']),
    ...mapActions('ToDo', ['removeAll']),
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = 'They have been removed'
      });
    },


    // get All Todos
    ...mapMutations('ToDo',[
      'GET_TODOS'
    ]),
    ...mapActions('ToDo',[                  // Add this
      'getTodos'
    ]),
    getTodo(){
      this.GET_TODOS()
    }


  },
  created() {
      this.getTodo()
  }
}
</script>


<style>
#toDoDraggable{
  position: absolute;
  width : 500px;
  height: 500px;
  border : 5px solid blue;
  box-shadow: 5px 5px 5px blue;
  overflow: auto;
}

#ToDoBox {
    background: rgba(19, 194, 14, 0.5);
    width: 500px;
    height: 500px;
    border-radius: 15px;
    text-align: center;
    overflow: auto;
}

.todos_list {

    height: 35px;
    border: 1px solid #19d0ec;
    padding-top: 8px;
    padding-left: 15px;
    margin-bottom: 5px;
    box-shadow: 2px 2px 2px #005680;
    background: rgba(3, 1, 1, 0.8);
    border-radius: 5px;
    width: 96%;
}

</style>
