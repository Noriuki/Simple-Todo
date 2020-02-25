<template>
        <v-list-item class="todo-item">
            <v-list-item-action>
                <v-checkbox
                    :input-value="todo.done"
                    color="success"
                    @change="toggleTodo(todo)"
                ></v-checkbox>
            </v-list-item-action>

            <template>
                <v-list-item-content class="todo-item-content">
                    <v-col cols="9">{{todo.name}}</v-col>
                    <v-col cols="3">{{todo.dateTodo}}</v-col>
                </v-list-item-content>
            </template>

            <v-list-item-action>
                <button @click="removeTodo(todo)">X</button>
            </v-list-item-action>
        </v-list-item>
</template>

<script>
export default {
    name: 'todoItem', 
    props: ['todo'],
    methods: {
        toggleTodo(todo) {
            this.$store.dispatch('toggleTodo', todo)
        },
        removeTodo(todo){
            this.$store.dispatch('removeTodo', todo)
        }
    },
}
</script>

<style>
.todo-item button {
    color: red;
}
.todo-item {
    display: flex;
    align-items: center;
    padding: 0px 8px;
    word-break: break-all;
}
.todo-item-content{
    display: flex;
    flex-direction: row;
}
</style>