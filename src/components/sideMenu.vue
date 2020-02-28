<template>
    <v-navigation-drawer v-model="drawer" 
    :mini-variant.sync="mini" permanent id="sideMenu">
      <v-list-item link>
        <v-list-item-content>
            <v-list-item-title>{{'      '}}</v-list-item-title>
        </v-list-item-content>

        <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
        </v-btn>   
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item v-for="item in items" :key="item.title" :href="item.href">
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "sideMenu",
    data () {
        return {
            drawer: true,
            items: [
            { title: 'Home', icon: 'mdi-home', href: '/'},
            { title: 'My Settings', icon: 'mdi-account', href: '/settings' },
            { title: 'Users', icon: 'mdi-account-group-outline' },
            ],
            mini: true,
        }
    },
}
</script>

<style>
#sideMenu {
    min-width: max-content;
}
</style>