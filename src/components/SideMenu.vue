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
      let arrTab = this.$store.state.multiTab,
        name = this.$route.name,
        toRoute = this.$route.meta.title;
      if (!arrTab.some(item => item.title === toRoute)) {
        this.$store.commit("ADD_TAB", { title: toRoute, key: name });
      }
    }
  },
  mounted() {
    this.keyArr = [this.$router.currentRoute.name];
    let arrTab = this.$store.state.multiTab;
    if (!arrTab.some(item => item.title === this.$route.meta.title)) {
      this.$store.commit("ADD_TAB", {
        title: this.$route.meta.title,
        key: this.$route.name
      });
    }
  },
  methods: {
    goPage(item) {
      this.keyArr = [item.key];
      let arrTab = this.$store.state.multiTab;
      this.$router.push({ name: item.key });
    }
  }
};
</script>

<style>
</style>
