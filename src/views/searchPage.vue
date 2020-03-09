<template>
    <div class="d-flex-wrap" id="searchPage">
      <v-col cols="10" class="todoList mx-auto">
          <h2>All To-Do</h2>
          <v-progress-linear size="20" v-model="progressPercentage" color="success"/>
          <v-list class="pa-0">
            <template v-for="todo in getTodos">
              <v-divider :key="`${todo.name}--${todo.dateCreated}--divider`"></v-divider>
              <todoItem :key="`${todo.name}--${todo.dateCreated}`" :todo="todo"/>
            </template>
          </v-list>
      </v-col>
    </div>
</template>

<script>
import todoItem from '../components/todoItem';

export default {
    name:'SearchPage',
    components: {
        todoItem: todoItem,
    },
    computed:{
        getTodos() {
            return this.$store.getters.getTodos;
        },
        progressPercentage () {
            const remaining = this.getTodos.filter(todo => !todo.done).length
            const len = this.getTodos.length
            return Math.ceil(( (len - remaining) * 100) / len)
        }
    },

}
</script>

<style>
#searchPage {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    height: 100vh;
    padding: 10px;
}
</style>