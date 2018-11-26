import Vue from 'vue'
import Router from 'vue-router'
import Carousel3d from 'vue-carousel-3d'
import Vuetify from 'vuetify'

import App from './App.vue'
import caroussel from './homePage/caroussel.vue'
import menu from './homePage/menu.vue'
import taverne from './homePage/taverne/taverne.vue'

Vue.use(Router);
Vue.use(Carousel3d);
Vue.use(Vuetify);


const router =  new Router({
//  mode:'history',  to avoid on the link : /#/
  routes: [
  	{
      path: '/',
      name: 'caroussel',
      component: caroussel
    },
    {
      path: '/taverne',
      name: 'taverne',
      component: taverne
    }
  ]
});


export default router;
