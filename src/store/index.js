import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      id: "abc123",
      name: "Ahmed"
    },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: [
      { id: 1, text: '...'},
      { id: 2, text: '...'},
      { id: 3, text: '...'},
      { id: 4, text: '...'}
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo=>todo.done)
    },
    activeTodosCount: (state, getters) /* Passing the entire getters object to this getter */ => {
      return state.todos.length - getters.doneTodos.lengths
      // // alternative method
      // return state.todos.fitler(todo => !todo.done).length
    },

    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
