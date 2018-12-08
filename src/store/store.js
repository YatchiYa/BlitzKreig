
import Vue from 'vue'
import Vuex from 'vuex'
import ToDo from './modules/box/todoBox.js'

Vue.use(Vuex)


export const store = new Vuex.Store({
  namespaced : true,
  modules : {
    ToDo
  }
})
