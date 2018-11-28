<template>
  <div>
    <div class="title"> Register </div>

    <form class="register_template" @submit="checkForm" >
      <label for="name">Email : </label>
      <input id="name" v-model="form.email" type="text" name="name"  style="left: 76px;"> <br/><br/>

        <label for="name"> username : </label>
        <input id="name" v-model="form.username" type="text" name="name"  style="left: 53px;"><br/><br/>

          <label for="name"> password : </label>
          <input id="name" v-model="form.password" type="password" name="name"  style="left: 54px;"><br/><br/>

            <label for="name"> confirm password : </label>
            <input id="name" v-model="form.confirm_password" type="password" name="name" ><br/><br/>


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
        email: '',
        username: '',
        password: '',
        confirm_password:''
      }

    }
  },
  methods: {
    checkForm(evt){
      evt.preventDefault()
      axios.post(`http://localhost:3000/api/register`, this.form)
      .then(response => {
        // JSON responses are automatically parsed.
        this.form = response.data;
        if(this.form.status === 200){alert(this.form.message);  }
      })
      .catch(e => {
        alert(e);
      })
    }



    }

}
</script>

<style>


.register_template{
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
