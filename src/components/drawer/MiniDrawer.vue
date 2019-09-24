<template>
  <section>
    <transition name="drawer-in-icon">
      <span class="drawer-icon right" v-show="drawerVisible">
        <a-icon type="right" @click="showDrawer"/>
      </span>
    </transition>
    <transition name="drawer-out-icon">
      <span class="drawer-icon left" v-show="!drawerVisible">
        <a-icon type="left" @click="showDrawer"/>
      </span>
    </transition>
    <transition name="drawer-content">
      <div class="btn-group" v-show="drawerVisible">
        <slot></slot>
      </div>
    </transition>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

export default class MiniDrawer extends Vue {
  private drawerVisible: boolean = false

  private mounted() {
    //  初始刷新显示抽屉
    this.drawerVisible = true;
    setTimeout(() => {
      this.drawerVisible = false;
    }, 3000);
  }

  private showDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }
}
</script>

<style lang="scss" scoped>
//  按钮抽屉的按钮部分动画
@keyframes drawerBtn {
  0% { transform: translateX(138px); }
  50% { transform: translateX(80px); }
  100% { transform: translateX(0); }
}
.drawer-in-icon-enter-active {
  animation: drawerBtn .3s;
}
.drawer-in-icon-leave-active {
  animation: drawerBtn .3s reverse;
}
.drawer-out-icon-enter-active {
  animation: drawerBtn .3s;
}
.drawer-out-icon-leave-active {
  animation: drawerBtn .3s reverse;
}
// 按钮抽屉的内容部分动画
@keyframes drawerAnimate {
  0% { transform: translateX(138px); }
  50% { transform: translateX(80px); }
  100% { transform: translateX(0); }
}
.drawer-content-enter-active {
  animation: drawerAnimate .3s;
}
.drawer-content-leave-active {
  animation: drawerAnimate .3s reverse;
}
.drawer-icon {
  width: 20px;
  height: 64px;
  position: fixed;
  top: 50%;
  margin-top: -32px;
  color: rgba($color: #002532, $alpha: 1);
  font-size: 20px;
  cursor: pointer;
  &.left {
    right: 0;
  }
  &.right {
    right: 138px;
  }
}
.btn-group {
  position: fixed;
  top: 50%;
  right: 0;
  width: 134px;
  background-color: rgba($color: #B7D8FF, $alpha: 0.5);
  line-height: 48px;
  padding: 5px 0;
  margin-top: -125px;
  .ant-btn {
    font-size:12px;
    width:122px;
    margin: auto 6px;
    border-radius: 0;
    height: 40px;
    text-align: center;
    position: relative;
  }
  .btn-border{
    height: 40px;
    width: 9px;
    background-color: #3188f0;
    position: absolute;
    left: -1px;
    top: -1px;
  }
}
</style>
