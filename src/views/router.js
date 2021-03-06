import Vue from 'vue'
import Router from 'vue-router'
import Carousel3d from 'vue-carousel-3d'
import Vuetify from 'vuetify'
import VueDraggable from 'vue-draggable'

import App from './App.vue'
import caroussel from './homePage/caroussel.vue'
import gameLand from './homePage/gameLand.vue'
import taverne from './homePage/taverne/taverne.vue'
import landingGame from './homePage/gameWorld/landingGame.vue'
import auth from './homePage/taverne/auth.vue'
import presentation from './homePage/taverne/presentation.vue'
import goals from './homePage/taverne/goals.vue'


Vue.use(Router);
Vue.use(Carousel3d);
Vue.use(Vuetify);
Vue.use(VueDraggable);




const router =  new Router({
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
    },
    {
      path: '/landingGame',
      name: 'landingGame',
      component: landingGame
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth
    },
    {
      path: '/gameLand',
      name: 'gameLand',
      component: gameLand
    },
    {
      path: '/presentation',
      name: 'presentation',
      component: presentation
    },
    {
      path: '/goals',
      name: 'goals',
      component: goals
    }

  ]
});


export default router;
