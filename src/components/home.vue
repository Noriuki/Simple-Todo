<template>
  <div class="d-flex-wrap" id="home">
      
    <v-col cols="6">

        <v-text-field v-model="todoText" 
            @keyup.enter="addTodo"
            color="success"
            placeholder="What's up?"
            :clearable="true"
        >
        </v-text-field>

        <v-progress-linear class="my-0" color="success" v-model="progressPercentage"/>
        <v-date-picker class="mt-4" v-model="date" full-width
        :locale="locale" color="green lighten-1"></v-date-picker>

    </v-col>
    <v-col cols="6" id="todoList">

        <v-list class="pa-0">
          <template v-for="todo in getTodos">
            <v-divider :key="`${todo.name}--${todo.date}--divider`"></v-divider>
            <todoItem :key="`${todo.name}--${todo.date}`" :todo="todo"/>
          </template>
        </v-list>

    </v-col>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import todoItem from './todoItem.vue';

export default {
    name:"home",
    components: {
        todoItem: todoItem,
    },
    computed:{
       ...mapGetters([
           'getTodos',
       ]),
        progressPercentage () {
            const remaining = this.getTodos.filter(todo => !todo.done).length
            const len = this.getTodos.length
            return ( (len - remaining) * 100) / len
        }
    },
    data: () => {
        return {
            locale: window.navigator.language,
            todoText: '',
            date: null,
            dateNow: new Date().setHours(0,0,0,0)
        }
    },
    methods: {
        addTodo() {
            let newTodo;
            if(this.date == null) {
                newTodo = {name: this.todoText, dateTodo:this.date}
                this.$store.dispatch('addTodo', newTodo);
            }
            else if ( Date.parse(this.date.replace(/-/g, ' ')) >= this.dateNow) {
                newTodo = {name: this.todoText, dateTodo:this.date}
                this.$store.dispatch('addTodo', newTodo);
            }
        }
    }
}
</script>

<style>
    #home {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        height: 100vh;
        padding: 10px;
    }
    #todoList {
        height: 78%;
        overflow: auto;
        border: 1px solid #f2f2f2;
        display: flex;
        flex-direction: column;
    }

</style>