<template>
  <div class="sidemenu">
    <a-menu theme="dark" mode="inline" v-model="keyArr" @click="goPage">
      <template v-for="item in menus">
        <a-menu-item :key="item.key" v-if="!item.children">
          <a-icon :type="item.icon"/>
          <span>{{item.title}}</span>
        </a-menu-item>
        <a-sub-menu :key="item.key" v-else>
          <span slot="title">
            <a-icon :type="item.icon"/>
            <span>{{item.title}}</span>
          </span>
          <a-menu-item v-for="child in item.children" :key="child.key">
            <span>{{child.title}}</span>
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
      keyArr: ["about"]
    };
  },
  computed: {
    menus() {
      return this.$store.getters.menus;
    }
  },
  watch: {
    $route: function(val) {
      let arrTab = this.$store.state.app.multiTab,
        name = this.$route.name,
        toRoute = this.$route.meta.title;
      if (name !== "login" && !arrTab.some(item => item.title === toRoute)) {
        this.$store.commit("ADD_TAB", { title: toRoute, key: name });
      }
    }
  },
  mounted() {
    this.initMulti();
  },
  methods: {
    //初始化多标签页
    initMulti () {
      this.keyArr = [this.$router.currentRoute.name];
      let arrTab = this.$store.state.app.multiTab,
        name = this.$route.name,
        toRoute = this.$route.meta.title;
      if (name !== "login" && !arrTab.some(item => item.title === toRoute)) {
        this.$store.commit("ADD_TAB", { title: toRoute, key: name });
      }
    },
    //跳转相应菜单路由
    goPage(item) {
      this.keyArr = [item.key];
      let arrTab = this.$store.state.app.multiTab;
      //这里如果使用name属性跳转的话，则当路由不存在时，404页面无法捕获到
      this.$router.push({ path: `/${item.key}` });
    }
  }
};
</script>

<style>
</style>
