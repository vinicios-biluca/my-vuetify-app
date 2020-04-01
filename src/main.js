import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import 'material-design-icons-iconfont/dist/material-design-icons.css'

//Importa na Instância do Vue o Arquivo colors.js
import colors from '@/commons/colors';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  colors,
  vuetify,
  render: h => h(App)
}).$mount('#app')
