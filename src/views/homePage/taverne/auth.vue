<template>
  <div id="auth_template">

    <div class="span_RL">
      <img @click="isLogin" src= '../../../../static/assets/homePage/login.png'  style="width: 11%; cursor:pointer; margin-right:25px; background: rgba(255,255,255,0.5); border-radius: 59px;"/>
        <img @click="isRegister" src= '../../../../static/assets/homePage/register.png'  style="width: 11%; cursor:pointer;  background: rgba(255,255,255,0.5); border-radius: 59px;"/>

    </div>

    <div style="background: rgba(255,255,255,0.7); position: absolute; left: 37%; top: 34%; padding-left: 68px; padding-top: 65px; border-radius: 20px; box-shadow: 4px 5px 3px mediumaquamarine; ">

      <Register id="register_template" v-show="switchToRegister" />
      <login id="login_template" v-show="switchToLogin" />

    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Register from './Register.vue'
import Login from './Login.vue'


export default {
  name: 'auth',
  data () {
    return {
      switchToLogin : true,
      switchToRegister : false
    }
  },
  components: { Register, Login},
  methods: {
    isLogin(){
      this.switchToLogin = true,
      this.switchToRegister = false
    },
    isRegister(){
      this.switchToLogin = false,
      this.switchToRegister = true
    }
  }

}
</script>

<style>

#auth_template {
    background: url('../../../../static/assets/homePage/login_screen.jpg');
        background-size: auto auto;
    background-size: cover;
    width: 1535px;
    height: 740px;
    overflow: hidden;
}


#register_template{
  width: 350px;
  height: 300px;
  position: relative;
}

#login_template{
  width: 350px;
  height: 300px;
  position: relative;
}
.span_RL {
    display: flex;
    position: relative;
    margin-left : 44%;
    margin-top: 4%;
}

</style>
