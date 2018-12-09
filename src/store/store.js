
import Vue from 'vue'
import Vuex from 'vuex'
import ToDo from './modules/box/todoBox.js'
import toolbox from './modules/box/toolbox.js'

Vue.use(Vuex)


export const store = new Vuex.Store({
  namespaced : true,
  modules : {
    ToDo,
    toolbox
  }
})
