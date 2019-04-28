<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo">
        <a href="https://github.com/qiugu/vue-qiugu-ms">
          <img
            height="30"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi42ICg2NzQ5MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+VnVlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI2OS42NDQxMTYlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjlDREZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxNDhFRkYiIG9mZnNldD0iMzcuODYwMDY4NyUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzBBNjBGRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ii0xOS44MTkxNTUzJSIgeTE9Ii0zNi43OTMxNDY0JSIgeDI9IjEzOC41NzkxOSUiIHkyPSIxNTcuNjM3NTA3JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjlDREZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwRjc4RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC0zIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iVnVlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjAwMDAwMCwgOS4wMDAwMDApIj4KICAgICAgICAgICAgPHBhdGggZD0iTTg5Ljk2LDkwLjQ4IEM3OC41OCw5My40OCA2OC4zMyw4My4zNiA2Ny42Miw4Mi40OCBMNDYuNjYwNDQ4Nyw2Mi4yMjkyMjU4IEM0NS41MDIzODQ5LDYxLjExMDMyMzYgNDQuODQyNjg0NSw1OS41NzI4ODM1IDQ0LjgyOTY5ODcsNTcuOTYyNjM5NiBMNDQuNTAzNTU2NCwxNy41MjA5OTQ4IEM0NC40OTQ4ODYxLDE2LjQ0NTg3NDQgNDQuMDUzNzcxNCwxNS40MTk1MDk1IDQzLjI3OTY4NjQsMTQuNjczMzUxNyBMMjkuNjQ1OTk5OSwxLjUzMTUzNzM3IEMyOC4wNTU0NzUsLTAuMDAxNjA1MDQwMDUgMjUuNTIzMjQyMywwLjA0NDkxMjY1ODggMjMuOTkwMDk5OSwxLjYzNTQzNzU2IEMyMy4yNzE1MTIxLDIuMzgwOTIwNjYgMjIuODcsMy4zNzYwMDgzNCAyMi44Nyw0LjQxMTQzNzQ2IEwyMi44Nyw2NC4zODY0NzUxIEMyMi44Nyw2Ny4wODA3ODkxIDIzLjk1NzIyMzMsNjkuNjYxMTA2NyAyNS44ODU0MDksNzEuNTQyOTc0OCBMNjMuNjAwNDYxNSwxMDguMzUyMDYxIEM2NS45NDY2MzIzLDExMC42NDE4NzMgNjkuNjk2MzU4NCwxMTAuNjI0NjA1IDcyLjAyMTM0MDMsMTA4LjMxMzI4MSIgaWQ9IlBhdGgtQ29weSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ni40MTUwMDAsIDU0LjgzMTE1Nykgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtNTYuNDE1MDAwLCAtNTQuODMxMTU3KSAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTY4LDkwLjExNjMxMjIgQzU2LjYyLDkzLjExNjMxMjIgNDUuNDYsODMuMzYgNDQuNzUsODIuNDggTDIzLjc5MDQ0ODcsNjIuMjI5MjI1OCBDMjIuNjMyMzg0OSw2MS4xMTAzMjM2IDIxLjk3MjY4NDUsNTkuNTcyODgzNSAyMS45NTk2OTg3LDU3Ljk2MjYzOTYgTDIxLjYzMzU1NjQsMTcuNTIwOTk0OCBDMjEuNjI0ODg2MSwxNi40NDU4NzQ0IDIxLjE4Mzc3MTQsMTUuNDE5NTA5NSAyMC40MDk2ODY0LDE0LjY3MzM1MTcgTDYuNzc1OTk5OSwxLjUzMTUzNzM3IEM1LjE4NTQ3NSwtMC4wMDE2MDUwNDAwNSAyLjY1MzI0MjMyLDAuMDQ0OTEyNjU4OCAxLjEyMDA5OTkxLDEuNjM1NDM3NTYgQzAuNDAxNTEyMTI1LDIuMzgwOTIwNjYgMy45MDIxMTg3OGUtMTMsMy4zNzYwMDgzNCAzLjkwNzk4NTA1ZS0xMyw0LjQxMTQzNzQ2IEwzLjk0MzUxMjE4ZS0xMyw2NC4zODY0NzUxIEMzLjk0NjgxMTc3ZS0xMyw2Ny4wODA3ODkxIDEuMDg3MjIzMjYsNjkuNjYxMTA2NyAzLjAxNTQwOTAzLDcxLjU0Mjk3NDggTDQwLjc4MDcwOTIsMTA4LjQwMTEwMSBDNDMuMTA2OTMwNCwxMTAuNjcxNDQ0IDQ2LjgxODAxNTEsMTEwLjY3NjUyNSA0OS4xNTA0NDQ1LDEwOC40MTI1NjEiIGlkPSJQYXRoIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTQzLjI5ODM0ODgsMTkuMDk5MTkzMSBMMjcuNTU2NjA3OSwzLjg4MjQ2MjQ0IEMyNi43NjI0MjgxLDMuMTE0NzY5NjcgMjYuNzQwOTU2MSwxLjg0ODYyMTc3IDI3LjUwODY0ODgsMS4wNTQ0NDE5NCBDMjcuODg1NDgyNiwwLjY2NDYwNjYxMSAyOC40MDQ0NDM4LDAuNDQ0NDcyNjUxIDI4Ljk0NjYzODYsMC40NDQ0NzI2NTEgTDYwLjM5MjUwMjEsMC40NDQ0NzI2NTEgQzYxLjQ5NzA3MTYsMC40NDQ0NzI2NTEgNjIuMzkyNTAyMSwxLjMzOTkwMzE1IDYyLjM5MjUwMjEsMi40NDQ0NzI2NSBDNjIuMzkyNTAyMSwyLjk4NTgzNzUgNjIuMTczMDM5NiwzLjUwNDA3NzQyIDYxLjc4NDI1MTIsMy44ODA3OTk0MiBMNDYuMDgwMTI4NSwxOS4wOTc1MzAxIEM0NS4zMDUxNTc5LDE5Ljg0ODQ0ODggNDQuMDc0MjE2NywxOS44NDkxODQ3IDQzLjI5ODM0ODgsMTkuMDk5MTkzMSBaIiBpZD0iUGF0aCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0zKSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
            alt="logo"
          >
          <h2 v-if="!collapsed">Ant Design</h2>
        </a>
      </div>
      <side-menu></side-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header-wrap">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <div class="user-wrapper">
          <a-badge count="15">
            <a-icon type="bell" style="font-size: 20px;"></a-icon>
          </a-badge>
          <a-dropdown v-model="visible" placement="topRight">
            <span>
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
              {{username || '游客'}}
            </span>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1">
                <a-icon type="user"/>个人中心
              </a-menu-item>
              <a-menu-item key="2">
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
      <multi-tab></multi-tab>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: 'auto' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import SideMenu from "@/components/SideMenu.vue";
import MultiTab from "@/components/MultiTab.vue";
export default {
  components: { SideMenu, MultiTab },
  data() {
    return {
      collapsed: false,
      visible: false,
      username: ""
    };
  },
  methods: {
    handleMenuClick({ key }) {
      console.log(key);
      let action = new Map([
        ['user',this.getPersonalCenter],
        ['setting',this.accountSetting],
        ['logout',this.logout]
      ])
      action.get(key)()
    },
    getPersonalCenter () {},
    accountSetting () {},
    logout () {
      this.$store.dispatch('Logout')
      .then(() => {
        this.$router.push({name: 'login'})
      })
    }
  },
  mounted() {
    this.username = sessionStorage.getItem("loginName");
  }
};
</script>
<style lang="scss" scoped>
#components-layout-demo-custom-trigger {
  height: 100%;
  .header-wrap {
    background: #fff;
    padding: 0;
    display: flex;
    justify-content: space-between;
    .user-wrapper {
      width: 180px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px;
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
  color: #1890ff;
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
      color: #fff;
      margin: 0;
    }
  }
}
</style>
