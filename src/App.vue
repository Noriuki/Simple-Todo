<template>
  <v-app>
    <div class="d-flex-wrap" id="appWrap">
      <sideMenu/>
      <home/>
    </div>
  </v-app>
</template>

<script>
import sideMenu from './components/sideMenu.vue';
import home from './components/home.vue';

export default {
  name: 'App',

  components: {
    sideMenu,
    home,
  },
};
</script>

<style>
  #appWrap{
    display: flex;
    flex-direction: row;
    height: 100%;
  }
</style>
