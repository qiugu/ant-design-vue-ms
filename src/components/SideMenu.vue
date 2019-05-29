<template>
  <div class="sidemenu">
    <a-menu 
      theme="dark" 
      mode="inline" 
      v-model="keyArr" 
      :openKeys="openKeys"
      @click="goPage"
      @openChange="openChangeHander"
    >
      <template v-for="item in menus">
        <a-menu-item :key="item.meta.key" v-if="!item.children">
          <a-icon :type="item.meta.icon"/>
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <a-sub-menu :key="item.meta.key" v-else>
          <span slot="title">
            <a-icon :type="item.meta.icon"/>
            <span>{{ item.meta.title }}</span>
          </span>
          <a-menu-item v-for="child in item.children" :key="child.name">
            <span>{{ child.meta.title }}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openKeys: []
    }
  },
  computed: {
    rootSubmenuKeys () {
      const list = []
      this.menus.map(item => {
        list.push(item.meta.key)
      })
      return list
    },
    menus() {
      return this.$store.getters.addRouters[0].children
    },
    keyArr: {
      get () {
        const selected = []
        selected.push(this.$route.name)
        return selected
      },
      set (val) {}
    }
  },
  mounted () {
    this.initOpenKeys()
  },
  methods: {
    initOpenKeys () {
      this.openKeys = this.$route.meta.key ? [this.$route.meta.key] : []
    },
    //展开/折叠子菜单时的回调
    openChangeHander (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    //跳转相应菜单路由
    goPage(item) {
      this.keyArr = [item.key]
      // let arrTab = this.$store.state.app.multiTab;
      console.log(item)
      //这里如果使用name属性跳转的话，则当路由不存在时，404页面无法捕获到
      this.$router.push({ path: `/${item.key}` })
    }
  }
}
</script>

<style>
</style>
