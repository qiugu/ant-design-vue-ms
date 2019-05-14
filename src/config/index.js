import Vue from 'vue';
import {
    Button,
    Row,
    Col,
    Layout,
    Menu,
    Icon,
    Form,
    Tag,
    Input,
    Checkbox,
    Avatar,
    Badge,
    Dropdown,
    Tabs,
    Radio,
    Select,
    Switch,
    Rate,
    Upload,
    InputNumber,
    Slider,
    DatePicker,
    notification,
    Progress,
    Popover,
    Modal,
    message
} from 'ant-design-vue';

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Form)
Vue.use(Tag)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Avatar)
Vue.use(Badge)
Vue.use(Dropdown)
Vue.use(Tabs)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(Upload)
Vue.use(InputNumber)
Vue.use(Slider)
Vue.use(DatePicker)
Vue.use(Progress)
Vue.use(Popover)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning