<template>
  <div class="main">
    <a-spin :spinning="loading" tip="正在登陆">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :form="form"
      @submit="handleSubmit"
    >
      <div class="header">
        <img src="~@/assets/svg/logo.svg" class="logo" alt="logo">
        <span class="title">前端架构管理系统</span>
      </div>
      <a-form-item>
        <a-input
          size="large"
          type="text"
          maxlength="50"
          placeholder="帐户名 / admin"
          v-decorator="[
                'username',
                {rules: [{ required: true, message: '请输入帐户名' }], validateTrigger: 'change'}
              ]"
        >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          size="large"
          type="password"
          maxlength="50"
          autocomplete="false"
          placeholder="密码 / admin"
          @focus="focusAnimate"
          @blur="blurAnimate"
          v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
              ]"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-item>

      <a-form-item style="margin-bottom: 0;">
        <a-checkbox v-decorator="['rememberMe']" class="font-theme">自动登陆</a-checkbox>
        <router-link
          :to="{ name: 'login', params: { user: 'aaa'} }"
          class="forge-password"
          style="float: right;"
        >忘记密码</router-link>
      </a-form-item>

      <a-form-item>
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="state.loginBtn"
          :disabled="state.loginBtn"
        >确定</a-button>
      </a-form-item>

      <a-form-item class="user-login-other">
        <span class="font-theme">其他登陆方式</span>
        <a>
          <a-icon class="item-icon" type="alipay"/>
        </a>
        <a>
          <a-icon class="item-icon" type="wechat"/>
        </a>
        <a href="https://github.com/login/oauth/authorize?client_id=46b85aea388080d94dd8">
          <a-icon class="item-icon" type="github"/>
        </a>
        <router-link class="register" :to="{ name: 'register' }">注册账户</router-link>
      </a-form-item>
    </a-form>
    </a-spin>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { timeFix } from '@/utils/util.ts'

@Component
export default class Login extends Vue {
  @Action('Login') private Login!: (data: { username: string; password: string }) => any
  private loading: boolean = false
  public data() {
    return {
      form: this.$form.createForm(this),
      state: {
        time: 60,
        LoginBtn: false
      }
    }
  }

  private mounted() {
    if (this.$route.query.code && !sessionStorage.getItem('ms__ACCESS_TOKEN')) {
      this.getAuth()
    }
  }
  // 获取第三方登录的信息
  private async getAuth() {
    this.loading = true
    const params = {
      code: this.$route.query.code,
      client_id: '46b85aea388080d94dd8',
      client_secret: '793f96044a8003cbb9a879b897ba0f190804d0c9'
    }
    const res = await this.$http.post(this.$ctx + '/user/githubAuth', params)
    if (res.status === 200) {
      this.loading = false
      const result = res.resultData
      Vue.ls.set('ACCESS_TOKEN', result.ACCESS_TOKEN, 60 * 60 * 1000 * 60 * 24)
      sessionStorage.setItem('loginName', result.username)
      this.$store.commit('SET_TOKEN', result.ACCESS_TOKEN)
      this.$store.commit('SET_USER', result.username)
      this.loginSuccess(result)
    } else {
      this.requestFailed(res)
      this.loading = false
    }
  }
  private handleSubmit(e: Event) {
    e.preventDefault()
    this.state.loginBtn = true

    this.form.validateFields(['username', 'password'], { force: true }, (err: any, values: any) => {
      if (!err) {
        // loginParams.password = md5(values.password)//密码加密
        this.Login(values)
          .then((res: Ajax.AjaxResponse) => this.loginSuccess(res))
          .catch((err: any) => this.requestFailed(err))
          .finally(() => {
            this.state.loginBtn = false
          })
      } else {
        setTimeout(() => {
          this.state.loginBtn = false
        }, 600)
      }
    })
  }
  private loginSuccess(res: Ajax.AjaxResponse) {
    this.$router.push({ path: '/schedule' })
    // 延迟 1 秒显示欢迎信息
    setTimeout(() => {
      this.$notification.success({
        message: '欢迎',
        description: `${timeFix()}，欢迎回来`
      })
    }, 1000)
  }
  private requestFailed(err: any) {
    this.$notification['error']({
      message: '错误',
      description: ((err.response || {}).data || {}).message || err.resultMsg || '请求出现错误，请稍后再试',
      duration: 4
    })
  }
  //  点击密码输入框聚焦事件
  private focusAnimate() {
    this.$store.commit('SET_COVER', true)
  }
  private blurAnimate() {
    this.$store.commit('SET_COVER', false)
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 44px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  .badge {
    position: absolute;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    margin-left: -12px;
    margin-top: -10px;
    opacity: 0.8;
  }

  .logo {
    height: 44px;
    margin-right: 16px;
    border-style: none;
  }

  .title {
    font-size: 33px;
    color: rgba(255, 255, 255, 0.85);
    font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-weight: 600;
  }
}
.user-layout-login {
  padding: 40px 20px 20px;
  margin-top: -5px; 
  height: 450px;
  background: rgba(255, 255, 255, .2);
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.7);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
