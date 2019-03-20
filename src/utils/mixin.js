const mixin = {
    data () {
        return {
            menus: [
                {title: '仪表盘',icon: 'dashboard',key: 'index'},
                {title: '表单页',icon: 'video-camera',key: 'home'},
                {title: '表格页',icon: 'area-chart',children: [
                    {title: '地图组件',icon: 'user',key: 'map'},
                    {title: '子菜单二',icon: 'setting',key: 'set'}
                ]},
                {title: '个人中心',icon: 'lock'}
            ]
        }
    }
}
export default mixin;