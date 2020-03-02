import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)


/* Todo Store */
const state = { 
    todos: JSON.parse(window.localStorage.getItem('todos')) 
};

const getters =  {
    getTodos(state) {
    if(state.todos == undefined) {
        window.localStorage.setItem('todos', JSON.stringify([{name:'First Todo', dateTodo: '', done: false, dateCreated:Date.now()}]))
    }
    return state.todos
    },
    getTodosToday(state) {
        return state.todos.filter( t => Date.parse(t.dateTodo) <= Date.now() || t.dateTodo == null)
    }
};

const mutations =  {
    addtodo(state, newTodo) { 
        if(newTodo.name) {
            let todos = JSON.parse(window.localStorage.getItem('todos'));
            todos.push({name:newTodo.name,dateTodo: newTodo.dateTodo,done: false, dateCreated:Date.now()})
            state.todos  = todos;
            window.localStorage.setItem('todos',JSON.stringify(todos));
        }
    },
    editTodo (state, {todo, name = todo.name, dateTodo = todo.dateTodo,
    done = todo.done,dateCreated = todo.dateCreated}) {

        let todos = JSON.parse(window.localStorage.getItem('todos'));
        let finded = todos.find(t => t.dateCreated == todo.dateCreated)
        todos[todos.indexOf(finded)] = {name: name , dateTodo: dateTodo, done: done, dateCreated:dateCreated}
        state.todos  = todos;
        
        window.localStorage.setItem('todos',JSON.stringify(todos));
    },
    removeTodo(state, Todo) {
            
        let todos = JSON.parse(window.localStorage.getItem('todos'));
        todos = todos.filter(todo => JSON.stringify(todo) !== JSON.stringify(Todo))
        state.todos  = todos;
        window.localStorage.setItem('todos',JSON.stringify(todos));
    }

};

const actions =  {
    addTodo({commit}, newTodo) {
        commit("addtodo", newTodo);
    },
    toggleTodo ({ commit }, todo) {
        commit('editTodo', {todo ,done: !todo.done})
    },
    removeTodo({commit}, todo) {
        commit('removeTodo', todo)
    }
};

/*      ===     */

export default new Vuex.Store({ 
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
})
