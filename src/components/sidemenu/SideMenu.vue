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
        <a-menu-item :key="item.path" v-if="!item.children">
          <a-icon :type="item.meta.icon"/>
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <a-sub-menu :key="item.path" v-else>
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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SideMenu extends Vue {
  private openKeys: any[] = []

  private get rootSubmenuKeys() {
    const list: string[] = [];
    this.menus.map((item: any) => {
      list.push(item.path);
    });
    return list;
  }

  private get menus() {
    const mainMenus = this.$store.getters.addRouters;
    return mainMenus.find((menu: any) => menu.path === '/').children;
  }

  private get keyArr() {
    const selected: string[] = [];
    selected.push(this.$route.name || '');
    return selected;
  }

  private set keyArr(key: string[]) {}

  private mounted() {
    this.initOpenKeys();
  }

  private initOpenKeys() {
    this.openKeys = this.$route.matched[1].path ? [this.$route.matched[1].path] : [];
  }

  // 展开/折叠子菜单时的回调
  private openChangeHander(openKeys: string[]) {
    const latestOpenKey: string = openKeys.find(key => this.openKeys.indexOf(key) === -1) || '';
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.openKeys = openKeys;
    } else {
      this.openKeys = latestOpenKey ? [latestOpenKey] : [];
    }
  }

  // 跳转相应菜单路由
  private goPage(item: any) {
    // this.keyArr = [item.key]
    // 这里如果使用name属性跳转的话，则当路由不存在时，404页面无法捕获到
    this.$router.push({ path: `/${item.key}` });
  }
}
</script>

<style>
</style>
