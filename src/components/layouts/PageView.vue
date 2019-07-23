<template>
  <div class="page-view">
    <a-breadcrumb :routes="routes" class="breadcrumb">
      <template slot="itemRender" slot-scope="{route,params,routes}">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.meta.title }}
        </span>
        <router-link v-else :to="{name: route.name}">
          {{ route.meta.title }}
        </router-link>
      </template>
    </a-breadcrumb>
    <div :style="{ margin: '24px 16px', padding: '24px', minHeight: 'auto' }">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class PageView extends Vue {
  public data() {
    return {}
  }
  public get routes () {
    return this.$route.matched
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/var.scss';
.page-view {
  .breadcrumb {
    padding: 20px;
    background: $bg-color;
  }
}
</style>
