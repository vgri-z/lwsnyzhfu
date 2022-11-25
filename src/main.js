import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import dataV from "@jiaminghi/data-view";

import "./assets/css/index.less";

Vue.config.productionTip = false;
Vue.use(dataV);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
