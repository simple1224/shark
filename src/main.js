// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vant/lib/icon/local.css'
import {
  Field, Cell, CellGroup, Button, Icon, Row, Col, List, PullRefresh, Toast, Dialog, NavBar, Tag, Picker, Popup, Loading, RadioGroup, Radio,
  Progress, DatetimePicker, Checkbox, CheckboxGroup, Uploader
} from 'vant'
import '../static/icon/iconfont.css'
Vue.config.productionTip = false

Vue.use(Field)
  .use(Progress)
  .use(DatetimePicker)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(RadioGroup)
  .use(Radio)
  .use(Cell)
  .use(CellGroup)
  .use(Button)
  .use(Icon)
  .use(Row)
  .use(Col)
  .use(List)
  .use(PullRefresh)
  .use(Toast)
  .use(Dialog)
  .use(NavBar)
  .use(Tag)
  .use(Picker)
  .use(Loading)
  .use(Popup)
  .use(Uploader)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
