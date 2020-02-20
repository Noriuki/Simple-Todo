<template>
  <div class="d-flex-wrap" id="home">

    <v-col cols="7">
        <v-text-field v-model="newTodo" 
            @keyup.enter="addTodo"
            color="success"
            placeholder="What's up?"
            :clearable="true"
        >
        </v-text-field>
        <v-progress-linear class="my-0" color="success" v-model="progressPercentage"/>
        <v-list class="pa-0" id="todoList">
          <template v-for="todo in getTodos">
            <v-divider :key="`${todo.name}-divider`"></v-divider>
            <todoItem :key="`${todo.name}`" :todo="todo"/>
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
        getTodos() {
            return this.$store.getters.getTodos;
        },
        progressPercentage () {
            const remaining = this.getTodos.filter(todo => !todo.done).length
            const len = this.getTodos.length
            return ( (len - remaining) * 100) / len
        }
    },
    data: () => ({
        newTodo: '',
    }),
    methods: {
        addTodo() {
            this.$store.dispatch('addTodo', this.newTodo)
        }
    }
}
</script>

<style>
    #home {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
    }
    #todoList {
        border: 1px solid #f2f2f2;
        display: flex;
        flex-direction: column;
    }

</style>