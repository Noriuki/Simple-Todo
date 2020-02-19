<template>
  <div class="d-flex-wrap" id="home">
    <v-row>
        <v-text-field label="input"></v-text-field>
        <v-btn large color="primary">Primary</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
    name:"home",
}
</script>

<style>
    #home{
        display: flex;
        flex-grow: 1;
    }
    #home>.row{
        max-width: 60%;
        margin: auto;
    }
</style>