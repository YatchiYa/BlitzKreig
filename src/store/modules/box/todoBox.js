export default {
	namespaced: true,
  state: {
    title: 'My Custom Title',
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {        // Add this:
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) => {                     // Add this
      state.links = []
    }
  },
  actions: {
    removeLink: (context, link) => {       // Add this:
      context.commit("REMOVE_LINK", link)
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
