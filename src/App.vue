<template>
  <v-app>
    <div class="d-flex-wrap" id="appWrap">
      <sideMenu/>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import sideMenu from './components/sideMenu.vue';
export default {
  name: 'App',

  components: {
    sideMenu,
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
