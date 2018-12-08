// The Vue build version to load with the `import` command

import Vue from 'vue'
import App from '../../views/App.vue'
import router from '../../views/router.js'
import { store } from '../../store/store.js'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

// export const SocketInstance = socketio('localhost:3000/'); you define this in your vue file



Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
