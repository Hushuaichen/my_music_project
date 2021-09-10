import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as API from './api'
import { Button,MessageBox,Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
//引入elementui
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
new Vue({
  beforeCreate(){
    Vue.prototype.$API = API
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
