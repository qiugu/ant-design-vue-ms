import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import {Button,Col,Row,Layout,Menu,Icon,Input,Form,Tag} from 'ant-design-vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import './permission'

// Vue.component(Button.name,Button)
// Vue.component(Row.name,Row)
// Vue.component(Col.name,Col)
// Vue.component(Layout.name,Layout)
// Vue.component(Layout.Header.name,Layout.Header)
// Vue.component(Layout.Sider.name,Layout.Sider)
// Vue.component(Layout.Footer.name,Layout.Footer)
// Vue.component(Layout.Content.name,Layout.Content)
// Vue.component(Menu.name,Menu)
// Vue.component(Icon.name,Icon)
// Vue.component(Form.name,Form)
// Vue.component(Tag.name,Tag)
// Vue.component(Form.Item.name,Form.Item)
// Vue.component(Input.TextArea.name,Input.TextArea)
Vue.config.productionTip = false
Vue.use(Antd)
setTimeout(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
},1000)
