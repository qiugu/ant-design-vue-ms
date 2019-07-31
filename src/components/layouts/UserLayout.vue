<template>
  <div id="userLayout" class="user-layout-wrapper">
    <div class="container">
      <!-- 粒子漂浮物 -->
      <vue-particles
        id="particles-js"
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="50"
        shapeType="star"
        :particleSize="3"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
      />
      <div class="top">
        <transition name="left-cover">
          <span v-if="!cover" class="owl-hand left"/>
        </transition>
        <transition name="left-remove">
          <img src="~@/assets/images/owl-login-arm.png" v-if="cover" alt="left-arm" class="left-arm">
        </transition>
        <div>
          <img src="~@/assets/images/owl-login.png" alt="owl">
          <div class="owl-body"/>
        </div>
        <transition name="right-cover">
          <span v-if="!cover" class="owl-hand right"/>
        </transition>
        <transition name="right-remove">
          <img src="~@/assets/images/owl-login-arm.png" v-if="cover" alt="left-arm" class="right-arm">
        </transition>
      </div>

      <router-view/>

      <div class="footer">
        <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div>
        <div class="copyright">Copyright &copy; 2019 qiugu personal produce</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VueParticles from 'vue-particles'

@Component({
  components: {
    VueParticles
  }
})
export default class UserLayout extends Vue {
  private get cover() {
    return this.$store.getters.cover
  }
  private mounted() {
    document.body.classList.add('userLayout')
  }
  private beforeDestroy() {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="scss" scoped>
.left-cover-enter-active {
  animation: left-cover-eyes .4s reverse;
}
.left-cover-leave-active {
  animation: left-cover-eyes .3s;
}
.right-cover-enter-active {
  animation: left-cover-eyes .4s reverse;
}
.right-cover-leave-active {
  animation: right-cover-eyes .3s;
}
.left-remove-enter-active {
  animation: left-cover-eyes .3s;
}
.left-remove-leave-active {
  animation: left-cover-eyes .4s reverse;
}
.right-remove-enter-active {
  animation: right-cover-eyes .3s;
}
.right-remove-leave-active {
  animation: right-cover-eyes .4s reverse;
}
@keyframes left-cover-eyes {
  0% {
    top: 90px;
    left: 0;
  }
  100% {
    top: 65px;
    left: 63px;
  }
}
@keyframes right-cover-eyes {
  0% {
    top: 90px;
    right: 0;
  }
  100% {
    top: 65px;
    right: 60px;
  }
}
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
#userLayout.user-layout-wrapper {
  height: 100%;
  user-select: none;
  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }

  .container {
    width: 100%;
    min-height: 100%;
    background: url('http://pvi0ecexm.bkt.clouddn.com/login-bg.png') no-repeat 100%;
    background-size: cover;
    padding: 110px 0 144px;
    box-sizing: border-box;
    position: relative;
    a {
      text-decoration: none;
    }

    .top {
      text-align: center;
      position: absolute;
      left: 50%;
      top: calc(50% - 205px);
      transform: translate(-50%, -50%);
      .owl-body {
        width: 0;
        height: 0;
        margin: 0 auto;
        border-left: 70px solid transparent;
        border-right: 70px solid transparent;
        border-top: 70px solid #4e3425;
        border-bottom: 70px solid transparent;
      }
      .left-arm {
        position: absolute;
        left: 60px;
        top: 60px;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      .right-arm {
        transform: rotateY(180deg);
        position: absolute;
        right: 55px;
        top: 60px;
      }
      .owl-hand {
        display: inline-block;
        width: 25px;
        height: 20px;
        border-radius: 70%;
        background: #4e3425;
        position: absolute;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      .owl-hand.left {
        left: 0;
        top: 90px;
      }
      .owl-hand.right {
        right: 0;
        top: 90px;
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }

    .main {
      min-width: 260px;
      width: 368px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;

      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: rgba(0, 0, 0, 0.45);
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}
</style>
