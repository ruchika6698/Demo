import Vue from "vue";
import Home from "./views/Home.vue";
import router from "./router";
import store from "./store";
// import Datepicker from "vuejs-datepicker";
// Vue.component("datepicker", Datepicker);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount("#app");
