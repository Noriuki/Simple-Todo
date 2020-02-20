import Vue from 'vue'
import Vuex from 'vuex'
const os = require('os');
const storage = require('electron-json-storage');
Vue.use(Vuex)
storage.setDataPath(os.tmpdir());
storage.set('todo-storage', [], function(error) {
    if (error) throw error;
});

export default new Vuex.Store({
  state: {
    todos: storage.get('todo-storage', (error, data) => {
        if (error) throw error;
        return data
      }),
  },
  getters: {
    getTodos(state) {
        return state.todos;
    }
  },
  mutations: {
    addtodo(state, newTodo) {
        state.todos.push({
            name:newTodo,
            done: false
        });
    },
    editTodo (state, { todo, text = todo.text, done = todo.done }) {
        todo.text = text
        todo.done = done
    }

  },
  actions: {
    addTodo({commit}, newTodo) {
        commit("addtodo", newTodo);
    },
    toggleTodo ({ commit }, todo) {
        commit('editTodo', { todo , done: !todo.done })
    },
  }
})
