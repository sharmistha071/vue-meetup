import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import * as firebase from 'firebase'
import Routes from './routes.js'
import {store} from './store/index'

Vue.use(axios)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
    store: store,
    el: '#app',
    render: h => h(App),
    router: router,
    created(){
        firebase.initializeApp({
            apiKey: 'AIzaSyASyDCl8T50gXK1OHbt0arcrkcD9a4FNbs',
            authDomain: 'vue-mmetup.firebaseapp.com',
            databaseURL: 'https://vue-mmetup.firebaseio.com',
            projectId: 'vue-mmetup',
            storageBucket:'vue-mmetup.appspot.com'
        })
    }
})
