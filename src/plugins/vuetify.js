import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    locales: Intl.DateTimeFormat().resolvedOptions().locale,
});
