// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Landing from './components/Landing'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)
/* eslint-disable no-new */

new Vue({
  el: '#landing',
  router,
  components: { Landing },
  template: '<Landing/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBl07XocukxfuVkiAxZqF4iULTZco6L19c',
      authDomain: 'creatr-e5685.firebaseapp.com',
      databaseURL: 'https://creatr-e5685.firebaseio.com',
      projectId: 'creatr-e5685',
      storageBucket: 'creatr-e5685.appspot.com',
      messagingSenderId: '401753736535'
    })
  }
})
