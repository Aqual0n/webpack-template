import './js/blanks/commons.js';

import './assets/scss/critical.scss';
import './assets/scss/main.scss';


import Vue from 'vue';
import router from './router'
import store from './store'
import App from './App.vue'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');