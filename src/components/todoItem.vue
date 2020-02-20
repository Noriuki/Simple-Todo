<template>
        <v-list-tile class="todo-item">
            <v-list-tile-action>
                <v-checkbox
                    :input-value="todo.done"
                    color="success"
                    @change="toggleTodo(todo)"
                ></v-checkbox>
            </v-list-tile-action>
            <template>
                <v-list-tile-content>
                    {{ todo.name }}
                </v-list-tile-content>
            </template>
        </v-list-tile>
</template>

<script>
export default {
    name: 'todoItem', 
    props: ['todo'],
    methods: {
        toggleTodo(todo) {
            this.$store.dispatch('toggleTodo', todo)
        }
    },
}
</script>

<style>
.todo-item {
    display: flex;
    align-items: center;
    padding: 0px 8px;
    word-break: break-all;
}
</style>