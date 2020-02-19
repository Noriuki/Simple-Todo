<template>
  <v-app>
   <sideMenu/>
   <home/>
  </v-app>
</template>

<script>
import sideMenu from './components/sideMenu.vue';
import home from './components/home';

export default {
  name: 'App',

  components: {
    sideMenu: sideMenu,
    home: home,
  },

  data: () => ({
    
  }),
};
</script>

<style>
    * {
        min-height: max-content;
    }
    #app>div{
        flex-direction: row;
        height: auto;
    }
    .col{
        height: max-content;
    }
</style>
