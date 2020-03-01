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

        <div class="d-flex-wrap dataPicker">
            <v-col cols="6" class="pa-0">
                <v-date-picker v-model="date" color="green" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="green" @click="date = null">Clear</v-btn>
                    <v-spacer></v-spacer>
                </v-date-picker>
            </v-col>
            <v-col cols="6" class="pa-0" align="center">
                <v-text-field
                    v-model="date"
                    label="Choose a date"
                    prepend-icon="mdi-alarm-check"
                    readonly
                    v-on="on"
                ></v-text-field>
                <v-progress-circular class="mt-2" size="120" color="success" v-model="progressPercentage"/>
            </v-col>
        </div>

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
import todoItem from '../components/todoItem.vue';

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
            dateNow: new Date().setHours(0,0,0,0),
            menu: false,
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
    .dataPicker{
        display: flex;
        justify-content: center!important;
    }

</style>