/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import axios from 'axios';
import Datepicker from 'vuejs-datepicker';
import TaskList from './components/Task-list.vue';
import moment from "moment";

window.axios = axios;
Vue.component('task-list', TaskList);

Vue.filter("formatDate", function (value) {
    if (value) {
        return moment(String(value)).format("DD/MM/YYYY hh:mm");
    }
});
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});


const date_picker = new Vue({
    el: '#date_picker', components: {
        Datepicker
    }, data: {
        date: new Date()
    }
});