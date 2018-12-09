import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)

export default {
	namespaced: true,
  state: {
    todos: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ],
		user : 'yatchi',
		desc: 'none',
		deadline: 0,
		countTodoDone: 0
  },
  getters: {
    countLinks: state => {
      return state.todos.length
    },
		countTodoDone: state => {
      return state.countTodoDone  // a verifier
    }


  },
  mutations: {
		GET_TODOS: state => {
			axios.get(`http://localhost:3000/todo/getTodo`)
	    .then(response => {
		    console.log("33" + response.data.todos)
	      state.todos = response.data.todos
	      return state.todos  // a verifier
	    })
	    .catch(e => {
	      console.log(e)
	    })
		},
    ADD_LINK: (state, todo) => {
      state.todos.push(todo)
			axios.post(`http://localhost:3000/todo/saveTodo`, {user : state.user, todos : state.todos, desc: state.desc, deadline: state.deadline })
      .then(response => {
					console.log(response.data)
      })
      .catch(e => {
        console.log(" error ")
      })
    },
    REMOVE_LINK: (state, todo) => {        // Add this:
      state.todos.splice(todo, 1)
    },
    REMOVE_ALL: (state) => {                     // Add this
      state.todos = []
    }
  },
  actions: {
    removeLink: (context, todo) => {       // Add this:
      context.commit("REMOVE_LINK", todo)
    },
		getTodos: (context, todo) => {
			context.commit(GET_TODOS)
		},

    removeAll ({commit}) {                       // Add this
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         commit('REMOVE_ALL')
         resolve()
       }, 1500)
     })
   }
  }
}
