<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed" width="256px">
      <div class="logo">
        <a href="https://github.com/qiugu/vue-qiugu-ms">
          <img src="~@/assets/svg/logo.svg" class="svg-icon" alt="logo">
          <h2 v-if="!collapsed">Developer Notes</h2>
        </a>
      </div>
      <SideMenu/>
    </a-layout-sider>
    <a-layout :style="{ minHeight: '100vh' }">
      <a-layout-header class="header-wrap">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <div class="user-wrapper">
          <a-badge :count="messageNumber">
            <a-icon type="bell" style="font-size: 20px;cursor: pointer;" @click="inform"/>
          </a-badge>
          <a-dropdown v-model="visible" placement="topRight">
            <span class="dropdown-title">
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
              <span class="dropdown-user">{{ username }}</span>
            </span>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="user">
                <a-icon type="user"/>个人中心
              </a-menu-item>
              <a-menu-item key="setting">
                <a-icon type="setting"/>账户设置
              </a-menu-item>
              <a-menu-divider/>
              <a-menu-item key="logout">
                <a-icon type="logout"/>退出登录
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ height: '100%', margin: '24px 24px 0' }">
        <multi-tab/>
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="page-footer">
        <a href="https://www.github.com/qiugu/ant-design-vue-ms" target="_blank">
        仓库地址
          <a-icon type="github" />
        </a>
        <a href="https://pro.loacg.com/" target="_blank">Ant Design Pro of Vue</a>
        <a href="https://vue.ant.design/docs/vue/introduce-cn/" target="_blank">Ant Design Vue</a>
        <a href="http://www.beian.miit.gov.cn/" target="_blank">皖ICP备19014274号-1</a>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SideMenu from '@/components/sidemenu/SideMenu.vue'
import MultiTab from '@/components/multitab/MultiTab.vue'

@Component({
  components: {
    SideMenu,
    MultiTab
  }
})
export default class BasicLayout extends Vue {

  private username: string = ''
  public data() {
    return {
      collapsed: false,
      visible: false,
      messageNumber: 0
    }
  }

  private mounted() {
    this.username = sessionStorage.getItem('loginName') || '游客'
  }
  // 点击下拉菜单执行响应的方法
  private handleMenuClick(data: { key: string }) {
    this[data.key]()
  }
  //  跳转到个人中心
  private user () {
    this.$router.push({
      name: 'personal'
    })
  }
  private setting () {}
  //  退出方法
  private logout () {
    this.$confirm({
      title: '提示',
      content: '是否确认退出',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        return new Promise((resolve, reject) => {
          this.$store.dispatch('Logout')
          .then(() => {
            window.location.reload()
          })
        }).catch(err => {})
      },
      onCancel: () => {}
    })
  }
  //  查看消息通知
  private inform() {
    if (this.messageNumber === 0) {
      this.$message.info('暂无消息通知')
    }
    this.$router.push({
      name: 'message_manage'
    })
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/mixins.scss';
@import '~@/assets/styles/var.scss';
#components-layout-demo-custom-trigger {
  height: 100%;
  .header-wrap {
    background: $bg-color;
    padding: 0;
    @include flex-layout(space-between);
    user-select: none;
    .user-wrapper {
      width: 220px;
      @include flex-layout(space-evenly);
      padding: 0 24px;
      flex-wrap: nowrap;
      .dropdown-title {
        @include flex-layout(flex-end);
        .dropdown-user {
          max-width: 60px;
          text-overflow: ellipsis;
          overflow: hidden;
          display: inline-block;
          white-space: nowrap;
        }
      }
    }
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: $theme-color;
}

#components-layout-demo-custom-trigger .logo {
  height: 64px;
  background: rgba($color: #fff, $alpha: 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    h2 {
      color: $font-color;
      margin: 0;
    }
  }
}
.page-footer {
  @include flex-layout(space-evenly);
  padding: 20px 180px;
  font-size: 12px;
}
.svg-icon {
  width: 30px;
  height: 30px;
}
</style>
