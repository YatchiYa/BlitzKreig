export default {
	namespaced: true,
  state: {
    ToDoShow : false
  },
  getters: {
    // computed function that reload in each modification itself
  },
  mutations: {
    // define our function base  like adding todo to the todos which will be deined in states above
    HideToDo: (state, e) => {
      state.ToDoShow = !state.ToDoShow
    },

  },
  actions: {
    // the actions that will refer to the mutation function  by using commit like ( context, link ) => contexte.commit('function', link)
    hideToDo: (context, e) => {       // Add this:
      context.commit("HideToDo", e)
    },
  }
}
