<template>
  <div>
    <div class="title"> Login </div>

    <form class="login_template" @submit="checkForm" >

        <label for="name"> username : </label>
        <input id="name" v-model="form.username" type="text" name="name"  style="left: 53px;"><br/><br/>

          <label for="name"> password : </label>
          <input id="name" v-model="form.password" type="password" name="name"  style="left: 54px;"><br/><br/>


      <input type="submit" value="Submit"  @click="checkForm" style="left: 74px;">

    </form>


  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }

    }
  },
  methods: {
    checkForm(evt){
      evt.preventDefault()
      axios.post(`http://localhost:3000/api/login`, this.form)
      .then(response => {
        // JSON responses are automatically parsed.
        this.form = response.data;
        if(this.form.status === 200){
        localStorage.setItem('jwtToken', this.form.token);
          alert(this.form.message);
          this.$router.push({
            name: 'landingGame'
          });
        }
      })
      .catch(e => {
        alert(e);
      })
      }



    }

}
</script>

<style>

.login_template{
  position: relative;
}

.title {

    position: relative;
    margin-bottom: 40px;
    margin-left: 110px;
    color: #ce21d3;
    text-shadow: 3px 1px 5px cornsilk;
    font-size: 30px;
}

input{
  position: relative;
}

</style>
