<template>
    <div id="presentation">


      <h1 class="setYourWay"> Don"t Hold Your self please :3  </h1>

      <div class="x" v-show="showAdd" style="z-index: 5; position: absolute;width: 700px;height: 500px;left: 25%;top: 16%;background: rgba(12, 131, 20, 0.7);border: 3px solid chartreuse;box-shadow: 5px 5px 5px cadetblue;border-radius: 15px;">
        <div style="text-align: center;">
          <label for="title"> how do you want so it sounds : </label>
          <input v-model="title" type="text" size=80 name="title" placeholder=" ex: Death Path" > <br/>

          <label> Express your self :  </label></br/>
          <textarea v-model="desc" type="text" cols=70 rows=20 name="title" placeholder=" " ></textarea>

          <br/>

          <picture-input v-model="imgPath" ref="pictureInput" @change="onChange" width="1000" height="1000" margin="16" accept="image/*" size="10" buttonClass="btn" :customStrings="{}">
          </picture-input>

          <br/> <br/>
          <button @click.prevent="submitForm()"> Add </button>
          <button @click.prevent="showAdd = false"> cancel </button>

        </div>

      </div>


      <div id="container">
          <div class="coontainer_perso" v-for="presentURSELF in presentURSELFS" style = "display : flex; border-bottom: 1px solid aquamarine; ">
            <div style="border-right: 1px solid aquamarine ;">
            <img v-bind:src="presentURSELF.img" style="width: 84px;" />  <h4 style="margin-left: 20px;"> {{ presentURSELF.user}} </h4>
            </div>

            <div>
              <h3 style="text-align: center;"> {{ presentURSELF.title }} </h3>
               <p style="margin-left: 20px;"> {{ presentURSELF.desc }} </p>


            </div>
          </div>


      </div>



      <img @click.prevent="toShow"  src="../../../../static/assets/homePage/newTopic.png"  style="width: 50px;position: absolute;top: 15%;left: 15%; cursor: pointer;">




          <div v-show="shwoInfo" style="position: absolute; background: rgba(225, 30, 30, 0.6); height: 200px; width: 200px;border-radius: 15px;top: 15px;left: 15px;">
            what left : <br/>
            -> if the input is empty : easy
            -> click anywhere to hide the add modal : easy <br/>
            -> .... <br/>
            <button @click="shwoInfo = false"> hide </button>
          </div>

    </div>
</template>


<script>
import PictureInput from 'vue-picture-input'
import axios from 'axios'

export default {
  name : 'presentation',
  data () {
    return {
      showAdd: false,
      title: '',
      desc: '',
      imgPath: '',
      presentURSELFS: [],
      user : '',
      shwoInfo : true
    }
  },
  components : {PictureInput },
  methods: {
    toShow() {
      this.showAdd = !this.showAdd
    },
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
        console.log(this.image)
        console.log(this.$refs.pictureInput.image)
        this.imgPath = this.$refs.pictureInput.image

      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    submitForm(){

      axios.post(`http://localhost:3000/present/savePresent`, {user : this.user, title : this.title, desc: this.desc, img: this.imgPath })
      .then(response => {
        console.log(" success ")
        this.presentURSELFS.push({user : this.user, title : this.title, desc: this.desc, img: this.imgPath })
        this.title = ''
        this.desc = ''
        this.imgPath = ''
        this.showAdd = false
      })
      .catch(e => {
        alert(" img too large ")
      })
    }
  },
  created () {
    axios.get(`http://localhost:3000/api/getSession`)
    .then(response => {
      console.log(response.data.user)
      this.user = response.data.user
    })
    .catch(e => {
      console.log(e)
    })


    // get all messages !!!!!!
    axios.get(`http://localhost:3000/present/getPresent`)
    .then(response => {
      console.log(response.data)
      this.presentURSELFS = response.data
    })
    .catch(e => {
      console.log(e)
    })
  }
}
</script>


<style>
#presentation{
  background-image: url('../../../../static/assets/homePage/presentation.jpg');
  width : 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 802px;
    overflow: auto;
}

#container {
    position: absolute;
    height: auto;
    width: 1018px;
    border: 5px groove aliceblue;
    left: 18%;
    top: 19%;
    background: rgba(255,255,255,0.9);
    overflow: auto;
    min-height: 500px;
    border-radius: 13px;
}


</style>
