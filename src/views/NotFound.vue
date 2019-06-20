<template>
  <div class="not">
    <div class="notfound-wrapper">
      <img src="../assets/images/404.png" alt="404">
      <p class="disc">哎呀迷路了...</p>
      <div class="reason">
        <span>可能的原因：</span>
        <ul>
          <li>没有VIP卡不给进去了</li>
          <li>我们的服务器被外星人劫持了</li>
        </ul>
      </div>
      <a-button @click="goIndex" type="primary">返回首页</a-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goIndex () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.not {
  display: flex;
  justify-content:center;
  align-items:Center;
  padding-top: 30px;
  .notfound-wrapper {
    text-align: center;
    .disc {
      font-size: 18px;
      margin: 20px 0;
      color: #000;
    }
    .reason {
      text-align: left;
      color: #9ca4ac;
    }
  }
}
</style>
