import Vue from 'vue'
import App from './App.vue'
import {defineCustomElements} from 'reso-components/loader'


Vue.config.productionTip = false
defineCustomElements(window);
new Vue({
  render: h => h(App),
}).$mount('#app')
