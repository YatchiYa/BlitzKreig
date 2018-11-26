// The Vue build version to load with the `import` command

import Vue from 'vue'
import App from '../../views/App.vue'
import router from '../../views/router.js'


Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
