<template>
  <div class="d-flex-wrap" id="home">
    <v-col cols="6">
        <v-text-field v-model="taskValues" 
        v-on:keyup.enter="addTask(taskValues)"
        color="green accent-4"></v-text-field>
    </v-col>
    <v-col cols="8">
        <v-list shaped>
            <v-list-item-group multiple>
                <template v-for="(item, i) in items">
                <v-divider
                    v-if="!item"
                    :key="`divider-${i}`"
                ></v-divider>

                <v-list-item
                    v-else
                    :key="`item-${i}`"
                    :value="item"
                    active-class="deep-purple--text text--accent-4"
                >
                    <template v-slot:default="{ active, toggle }">
                    <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-checkbox
                        :input-value="active"
                        :true-value="item"
                        color="deep-purple accent-4"
                        @click="toggle"
                        ></v-checkbox>
                    </v-list-item-action>
                    </template>
                </v-list-item>
                </template>
            </v-list-item-group>
        </v-list>
    </v-col>
  </div>
</template>

<script>
export default {
    name:"home",
    computed:{
        getTasks: () => { return (this.$store.getters.getTasks)}
    },
    data: () => ({
        items: this.$store.getters.getTasks(),
    }),
    methods: {
        addTask: () => { return  (this.$store.dispath('addTask'))},
    }
}
</script>

<style>
    #home {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

</style>