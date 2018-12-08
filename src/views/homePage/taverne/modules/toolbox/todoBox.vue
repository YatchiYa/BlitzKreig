<template>
    <div id="goals" style="color: white;">

      <div id="general_part" style="position: absolute;">

      </div>

     <h3>{{ title }}</h3>


<form @submit.prevent="addLink">
   <input class="link-input" type="text" placeholder="Add a Link" v-model="newLink" />
</form>


    <ul>
      <li v-for="(link, index) in links" v-bind:key="index">
        {{ link }}
        <button v-on:click="removeLinks(index)" class="rm">Remove</button>  <!-- Add this -->
      </li>
    </ul>

           so there is : {{ countLinks }}
           <button v-on:click="removeAllLinks">Remove all links</button>
           <p>{{ msg }}</p>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions   } from 'vuex'

export default {
  name: 'goals',
  data() {                                     // Add this:
    return {
      newLink: '',
      msg: ''
    }
  },
  computed: {
      ...mapState('ToDo',[
      'title',
      'links'
    ]),

    ...mapGetters('ToDo',[
      'countLinks'
    ])
  },
  methods: {                                   // Add this:
    ...mapMutations('ToDo',[
      'ADD_LINK'
    ]),
    ...mapActions('ToDo',[                  // Add this
      'removeLink'
    ]),
    addLink: function() {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    removeLinks: function(link) {    // Add this
      this.removeLink(link)
    },

    ...mapMutations('ToDo', ['REMOVE_ALL']),
    ...mapActions('ToDo', ['removeAll']),
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = 'They have been removed'
      });
    }



  }
}
</script>


<style>
#goals{
  background-image: url('../../../../../../static/assets/homePage/goals.jpg');
  width : 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 802px;
    overflow: auto;
    background-size: 100% 100%;
}


</style>
