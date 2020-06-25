import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./registerServiceWorker";
import { ServerTable, ClientTable, Event } from "vue-tables-2";
import Vuetify from 'vuetify'
import './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ClientTable);
Vue.use(Vuetify)

axios.defaults.baseURL = 'https://reqres.in/api/';


new Vue({
  vuetify: new Vuetify(),
  mode: 'history',
  router,
  store,
  render: h => h(App)
}).$mount("#app");
