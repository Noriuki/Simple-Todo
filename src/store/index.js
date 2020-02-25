import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({ 
  state:{
    todos: JSON.parse(window.localStorage.getItem('todos'))
  },
  getters: {
    getTodos(state) {
      if(state.todos == undefined) {
        window.localStorage.setItem('todos', JSON.stringify([{name:'First Todo', dateTodo: toString(Date.now()), done: false, dateCreated:Date.now()}]))
      }
      return state.todos
    }
  },
  mutations: {
    addtodo(state, newTodo) {
        let todos = JSON.parse(window.localStorage.getItem('todos'));
        todos.push({name:newTodo.name,dateTodo: newTodo.dateTodo,done: false, date:Date.now()})
        state.todos  = todos;
        window.localStorage.setItem('todos',JSON.stringify(todos));
    },
    editTodo (state, {todo, name = todo.name, dateTodo = todo.dateTodo, done = todo.done}) {

      let todos = JSON.parse(window.localStorage.getItem('todos'));
      todos = todos.filter( t => JSON.stringify(t) !== JSON.stringify(todo))
      todo = {name: name , dateTodo: dateTodo, done: done, dateCreated:Date.now()}
      
      todos.push(todo)
      state.todos  = todos;
      window.localStorage.setItem('todos',JSON.stringify(todos));
    },
    removeTodo(state, Todo) {
      let todos = JSON.parse(window.localStorage.getItem('todos'));
      todos = todos.filter(todo => JSON.stringify(todo) !== JSON.stringify(Todo))
      state.todos  = todos;
      window.localStorage.setItem('todos',JSON.stringify(todos));
    }

  },
  actions: {
    addTodo({commit}, newTodo) {
        commit("addtodo", newTodo);
    },
    toggleTodo ({ commit }, todo) {
        commit('editTodo', {todo ,done: !todo.done})
    },
    removeTodo({commit}, todo) {
      commit('removeTodo', todo)
    }
  }
})
