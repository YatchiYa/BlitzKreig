<template>
  <div id="chat">
    <h1> chat part </h1>

    <div style="position: absolute; left : 20%; top: 10%; border: 1px solid black; width: 700px; height: 500px;">

      <div v-if="ready">

        <p v-for="inf in info">
          {{inf.name }}  {{ inf.type}}

        </p>

      </div>
      <ul style="width: 655px; height: 380px; border:1px solid red; position: relative; ">
        <li v-for="message in messages" >
            <div v-if=" message.type === 0" v-bind:style="{'float' : 'right'}" >    {{ message.message }}  :{{ message.by}}  <br/>  </div>
            <div v-if=" message.type === 1" v-bind:style="{'float' : 'left'}" >  {{ message.by}} :  {{ message.message }}   <br/>  </div>
        </li>
      </ul>


        <form @submit.prevent ="addName" v-if="!ready">
          <label> pseudo </label>
          <input id="name" v-model="pseudo" type="text" name="pseudo" placeholder="pseudo " /><br/><br/>

          </form>

          <h3 v-else> {{ pseudo }} and {{ count}} connections </h3>
          <form @submit.prevent ="send" v-if="ready">
            <label> message </label>
            <input id="name" v-model="newMessag" type="text" name="name" placeholder="your message" /><br/><br/>
          </form>
          <br />
          <div v-if="typing" > {{ whosTyping }} is typing... </div>

    </div>

    <div v-for="onl in online">
        {{ onl }}
    </div>

  </div>
</template>


<script>
import axios from 'axios'
import * as io from 'socket.io-client'


export default {
  name: 'chat',
  data() {
    return {
      form: {
        newMessage : ''
      },
      messages: [],
      newMessag : '',
      pseudo : '',
      typing : false,
      whosTyping : '',
      ready: false,
      info: [],
      count: 0,
      online: [],
      socket: io('http://localhost:3000')
    };
  },
  methods: {
    saveMe(evt){
      evt.preventDefault();
      axios.post(`http://localhost:3000/chat/saveMessages`, this.form)
      .then(response => {
        this.form = response.data;
      })
      .catch(e => {
        console.log(e)
      })
    },

    send() {
      console.log(this.newMessag)
      this.messages.push({ message : this.newMessag, type : 0, by:"Me"})
      this.socket.emit('chat-message', {message: this.newMessag, user: this.pseudo})
      this.newMessag = ''
    },
    addName(){
      this.socket.emit('Created', this.pseudo)
      this.ready = true
      this.socket.emit('joined', this.pseudo)
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
      this.count = count
    })

  },
  created() {



    // to see who is the user
    this.socket.on('Created', (data) => {
      console.log( " hum ! " + data + " is connected ")
    })

    // to emit the messages
    this.socket.on('chat-message', (data) => {
      this.messages.push({ message : data.message, type : 1, by: data.user})
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

</style>
