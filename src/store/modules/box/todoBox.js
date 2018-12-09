import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)

export default {
	namespaced: true,
  state: {
    todos: [],
		user : 'annonymous',
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

		GET_USER: state => {
			axios.get(`http://localhost:3000/api/getSession`)
	    .then(response => {
	      state.user = response.data.user
				console.log("60" + state.user)
	      return state.user  // a verifier
	    })
	    .catch(e => {
	      console.log(e)
	    })
		},
		GET_TODOS: (state, userx) => {
			console.log("42 try : " + userx)
			axios.post(`http://localhost:3000/todo/getTod`, {user : userx})
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
		console.log("54" + state.user)
      state.todos.push({todo: todo, desc: '', deadline: 0, created: new Date() })
			axios.post(`http://localhost:3000/todo/saveTodo`, {user : state.user, todos : state.todos })
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
		getUser: (context, user) => {
			context.commit(GET_USER, user)
		},
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
