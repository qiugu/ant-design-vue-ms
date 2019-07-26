import Vue from 'vue'
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
    message,
    Spin,
    List,
    Card,
    Breadcrumb,
    Table,
    Alert
} from 'ant-design-vue'

const components = [
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
    message,
    Spin,
    List,
    Card,
    Breadcrumb,
    Table,
    Alert
]

components.forEach((component: any) => {
    Vue.use(component)
})

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
