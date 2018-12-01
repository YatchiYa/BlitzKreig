<template>
  <div id="taverne">

    <div v-show="showEmo" style=" background: rgba(255,255,255,0.7); left: 960px; position: absolute; top: 290px ;z-index: 5; box-shadow: 4px 9px 25px aqua; width: 200px;

height: 200px;

overflow: auto;">

        <img ref="theButton" src="http://img9.xooimage.com/files/7/0/c/15-4a662.gif" value="1" style="cursor: pointer;"  @click.prevent="addEmo(0)" />

        <img ref="theButton" src="http://img9.xooimage.com/files/d/8/e/41fe3244-337a15.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(1)" />
        <img ref="theButton" src="http://img1.xooimage.com/files/b/1/e/0b1213e1-2e1b5f.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(2)" />
        <img ref="theButton" src="http://img2.xooimage.com/files/a/3/9/0f1eff50-2a88c0.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(3)" />
        <img ref="theButton" src="http://img6.xooimage.com/files/1/c/5/1-4a65b.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(4)" />
        <img ref="theButton" src="http://img8.xooimage.com/files/3/9/9/1b38f9e2-fe235.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(5)" />
        <img ref="theButton" src="http://img3.xooimage.com/files/5/0/9/3ca8b998-156841.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(6)" />
        <img ref="theButton" src="http://img3.xooimage.com/files/5/0/9/3ca8b998-156841.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(7)" />
        <img ref="theButton" src="http://img6.xooimage.com/files/e/a/a/4d6161fd-86b94.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(8)" />
        <img ref="theButton" src="http://img8.xooimage.com/files/6/5/8/5c745924-86b99.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(9)" />
        <img ref="theButton" src="http://img6.xooimage.com/files/5/f/9/8-4a65f.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(10)" />
        <img ref="theButton" src="http://img7.xooimage.com/files/1/d/4/009-8fae1.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(11)" />
        <img ref="theButton" src="http://img4.xooimage.com/files/6/e/9/10-4a661.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(12)" />
        <img ref="theButton" src="http://img2.xooimage.com/files/7/e/e/11-54bbb.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(13)" />
        <img ref="theButton" src="http://img9.xooimage.com/files/7/0/c/15-4a662.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(14)" />
        <img ref="theButton" src="http://img10.xooimage.com/files/8/0/c/16-4a666.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(15)" />
        <img ref="theButton" src="http://img2.xooimage.com/files/e/d/f/19-14af68.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(16)" />
        <img ref="theButton" src="http://img8.xooimage.com/files/8/0/4/20-4a669.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(17)" />
        <img ref="theButton" src="http://img3.xooimage.com/files/a/0/4/22-4a66a.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(18)" />
        <img ref="theButton" src="http://img3.xooimage.com/files/a/c/f/23-4a663.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(19)" />
        <img ref="theButton" src="http://img2.xooimage.com/files/b/9/f/031-8fb23.gif" value="2" style="cursor: pointer;"  @click.prevent="addEmo(20)" />

      </div>











    <header> <div id="tav"> Tavern </div> </header>

    <div id="chatBox">

            <!--
            <div v-if="ready" class="joind" >

              <p v-for="inf in info" >
                {{inf.name }}  {{ inf.type}}

              </p>
            </div>
            -->

            <ul style="width: 947px; height: 320px; border:7px groove red; position: relative; margin 0; list-style: simp-chinese-formal; overflow: auto; ">
              <li v-for="message in messages" style= "border-bottom: 1px solid #d58a40; height: 44px;">
                  <div v-if=" message.type === 0" v-bind:style="{'float' : 'right'}" >
                     {{ message.message }} :  <span v-bind:style="{ color: mycolor }"> {{ message.user}}</span>     <br/>
                     <img style="position: relative;width: 22px;top: -16px;right: 27px;" :src="message.emo" />
                   </div>
                  <div v-else v-bind:style="{'float' : 'left'}" >  <span v-bind:style="{ color: theircolor }">{{ message.user}}</span> :  {{ message.message }}
                  <img style="position: relative; width:22px;" :src="message.emo" />  <br/>  </div>
              </li>
            </ul>


              <form @submit.prevent ="addName" v-if="!ready" style="position: relative; top:10px; left : 15px;">
                <label> pseudo </label>
                <input id="name" v-model="pseudo" type="text" name="pseudo" placeholder="pseudo " /><br/><br/>

                </form>

                <h3 style="position: relative; left:15px; top:-11px; color: rebeccapurple; " v-else> {{ pseudo }} </h3>

                <form @submit.prevent ="saveMe(), send(), generator()" v-if="ready" style="left: 15px;position: relative;top: -26px;color: red;">
                  <label> message </label>
                  <input id="name" v-model="newMessag" type="text" name="name" placeholder="your message" size="100" />
                </form>
                <button v-if="ready"  @click.prevent="showEmox" >Try Me</button>
                <br />
                <div v-if="typing" style="color: rgba(0, 0, 0, 0.5);position: relative;top: -46px;left: 73px;" > {{ whosTyping }} is typing... </div>

          </div>

          <div class="connected">
           <p style="color: #00f802;">  Connected !
             <span   v-if="count >= 0" >({{ count }}) </span>
             <span  v-else >(0) </span>
           </p>

           <p style="color:red;" v-for="inf in info" >
             {{inf.name }}  {{ inf.type}}

           </p>

            <p style="color: #00f802;" v-for="onl in online" >
                {{ onl }}
            </p>
          </div>


    <footer>
      <div class="bull Presentation"> <h2> Presentation  </h2></div>
      <div class="bull feedback"  @click="toGame()"> <h2> Game  </h2></div>
      <div class="bull fun"> <h2> Fun </h2></div>
      <div class="bull Goal !"> <h2> Goals  </h2></div>
    </footer>

  </div>
</template>


<script>
import axios from 'axios'
import * as io from 'socket.io-client'


export default {
  name: 'taverne',
  data() {
    return {
      messages: [],
      newMessag : '',
      pseudo : '',
      typing : false,
      whosTyping : '',
      ready: false,
      info: [],
      count: 0,
      online: [],
      mycolor:'red',
      theircolor: 'red',
      myEmo: '',
      showEmo: false,
      socket: io('http://localhost:3000')
    };
  },
  methods: {
    saveMe(){
      axios.post(`http://localhost:3000/chat/saveMessages`, {text: this.newMessag, user: this.pseudo, emo: this.myEmo})
      .then(response => {
        console.log(response.data.message + " and "+ response.data.userOf)
      })
      .catch(e => {
        console.log(e)
      })
    },

    send() {
      console.log(this.newMessag)
      this.messages.push({ message : this.newMessag, type : 0, user:"Me", emo:this.myEmo})
      this.socket.emit('chat-message', {message: this.newMessag, user: this.pseudo})
      this.newMessag = ''
    },
    addName(){
      this.socket.emit('Created', this.pseudo)
      this.ready = true
      this.socket.emit('joined', this.pseudo)
    },

    // generate fuction color
    generator(event){
        this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        this.theircolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    },
    showEmox() {
      this.showEmo = !this.showEmo
    },
    // add Emoticone
    addEmo(evt) {
        // i need to define this !!!
        console.log(evt)
        // const button = this.$refs.theButton
        var x = document.getElementsByTagName("img")[evt].getAttribute("src")
        console.log(x)
        this.myEmo = x
        this.messages.push({ message : this.newMessag, type : 0, user:"Me", emo: this.myEmo})
        this.socket.emit('chat-message', {message: this.newMessag, user: this.pseudo, emo: this.myEmo})
        this.newMessag= ''
        this.showEmo = false
        this.saveMe()
    },
    // renders !!!!
    toGame() {
      this.$router.push({
        name:'landingGame'
      });
    }
  },
  sockets : {
    connected : function(){

    }
  },
  watch: {
      newMessag(value) {
          value ? this.socket.emit('typing', this.pseudo) : this.socket.emit('stoptyping')
      }
  },
  mounted() {
    window.onbeforeunload = () =>{
      this.socket.emit('leaved', this.pseudo)
    }
    this.socket.on('noOfConnections', (count) => {
      this.count = count -1
    })

  },
  created() {
    // get all messages !!!!!!
    axios.get(`http://localhost:3000/chat/getMessages`)
    .then(response => {
      console.log(response.data)
      this.messages = response.data
    })
    .catch(e => {
      console.log(e)
    })


    // to see who is the user
    this.socket.on('Created', (data) => {
      console.log( " hum ! " + data + " is connected ")
    })

    // to emit the messages
    this.socket.on('chat-message', (data) => {
      this.messages.push({ message : data.message, type : 1, user: data.user, emo: data.emo})
    })

    this.socket.on('typing', (data) => {
      console.log(" he is typing")
      this.typing = true
      this.whosTyping = data
    })
    this.socket.on('stoptyping', () => {
      console.log(" he is not typing")
      this.typing = false
    })

    // to show the name joind
    this.socket.on('joined', (data) => {
      this.online.push(data)
      this.info.push({ name: data, type:'joined'})

      // just if you want that it display after like 5sec !!
      setTimeout(() => {
          this.info = []
      }, 5000);

    })

    // to show the name leaved
    this.socket.on('leaved', (data) => {
      this.online.splice(this.online.indexOf(data))
      this.info.push({ name: data, type:'leaved'})
      setTimeout(() => {
          this.info = []
      }, 5000);
    })
  }
}
</script>

<style>
ul{
  margin: 0;
}

#taverne{
  background: url('../../../../static/assets/homePage/tav.jpg');
  background-size: cover;
  overflow: auto;
}

.bull{
  background: rgba(100,220,100,0.8);
  width: 150px;
  height: 150px;
  border-radius: 110px;
  cursor: pointer;
  border: 8px groove green;
}
.bull > h2{
  color: white;
  margin-top:55px;
}

#chatBox{
  position: relative;
  background : white;
  height: 450px;
  width : 1000px;
  margin: auto;
  border: 1px solid black;
  margin-top: 70px;
  box-shadow: 9px 3px 35px aliceblue;
}
footer{
  position: relative;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin: 30px auto;
}
header{
  text-align: center;
}
#tav{
  position: relative;
  font-size: 30px;
  top: 35px;
  color: rebeccapurple;
  text-shadow: 3px 3px 4px cornsilk;
}


.connected{
    background: rgba(255,255,255,0.3);
    width: 122px;
    height: 200px;
    text-align: center;
    position: absolute;
    top: 3%;
    left: 1%;
    border: 1px solid aliceblue;
    border-radius: 15px;
    overflow: auto;
}

.joind{
    color: red;
    background: rgba(255,255,255,0.3);
    width: 122px;
    height: 200px;
    text-align: center;
    position: absolute;
    top: 30%;
    left: -24%;
    border: 1px solid aliceblue;
    border-radius: 15px;
    overflow: auto;
    padding-top: 10px;
}
</style>
