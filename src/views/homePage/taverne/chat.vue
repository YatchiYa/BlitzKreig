<template>
  <div id="chat">
    <h1> chat part </h1>

    <div style="position: absolute; left : 20%; top: 10%; border: 1px solid black; width: 700px; height: 500px;">

      <ul style="width: 655px; height: 380px; border:1px solid red; position: relative; list-style:none;">
        <li v-for="message in messages" > -> {{ message }}      </li>
      </ul>



          <form @submit.prevent ="send">
            <label> message </label>
            <input id="name" v-model="form.newMessage" type="text" name="name" ><br/><br/>
          </form>


    </div>


  </div>
</template>


<script>
import axios from 'axios'
import * as io from 'socket.io-client'


export default {
  name: 'chat',
  data(){
    return {
      form: {
        newMessage : ''
      },
      messages: [],
      socket: io('http://localhost:3000')
    }
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
      this.messages.push(this.form.newMessage)
      this.socket.emit('chat-message', this.form.newMessage)
      this.form.newMessage = ''
    }
  },
  sockets : {
    connected : function(){

    }
  },
  created() {
    this.socket.emit('Created', 'yatchi')

    // to see who is the user
    this.socket.on('Created', (data) => {
      console.log( " hum ! " + data + " is connected ")
    })

    // to emit the messages
    this.socket.on('chat-message', (data) => {
      this.messages.push(data)
    })

  }
}
</script>

<style>

</style>
