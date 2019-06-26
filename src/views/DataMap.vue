<template>
  <div class="map">
    <div id="container"/>
  </div>
</template>

<script>
/*global BMap*/
import styleJson from '@/json/mapStyle.json'
export default {
  data() {
    return {}
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      const map = new BMap.Map('container') //创建地图实例
      const point = new BMap.Point(118.384108423, 31.3660197875) //创建点坐标
      map.centerAndZoom(point, 12) //初始化坐标，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
      map.setMapStyleV2({ styleJson: styleJson }) //设置地图样式
      map.setCurrentCity('芜湖')
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  #container {
    min-height: 800px;
  }
}
</style>
<style>
/* 去除左下角地图logo */
.anchorBL {
  display: none !important;
}
</style>

