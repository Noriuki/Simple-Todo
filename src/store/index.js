import Vue from 'vue'
import Vuex from 'vuex'
import data from '../data.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: data,
  },
  getters: {
    getTasks(state) {
        return state.tasks;
    }
  },
  mutations: {
    addTask(state, task) {
    state.tasks.push(task);
    }
  },
  actions: {
    addTask({commit}) {
        commit("addTask");
    }
  }
})
