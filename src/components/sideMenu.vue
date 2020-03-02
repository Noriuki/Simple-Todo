<template>
    <v-card id="sideMenu">
      <v-list>

        <v-list-item class="pt-3" v-for="item in items" :key="item.title" :href="item.href">
            <v-list-item-icon class="ma-0">
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
        </v-list-item>
        
      </v-list>
    </v-card>
</template>

<script>
export default {
    name: "sideMenu",
    data () {
        return {
            items: [
            { title: 'Home', icon: 'mdi-home', href: '/'},
            { title: 'My Settings', icon: 'mdi-magnify', href: '/search' },
            ],
        }
    },
}
</script>

<style>
#sideMenu {
    width: min-content;
}
</style>