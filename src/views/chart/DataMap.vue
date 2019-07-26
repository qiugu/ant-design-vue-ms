<template>
  <div class="map">
    <div id="container"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import styleJson from '@/json/mapStyle.json'

@Component
export default class DataMap extends Vue {
  private map: any = null
  private data() {
    return {
      area: ['芜湖市', '芜湖市镜湖区', '芜湖市弋江区', '芜湖市鸠江区', '芜湖市三山区', '芜湖市芜湖县', '芜湖市繁昌县', '芜湖市南陵县', '芜湖市无为县'],
      boundaryOutline: null,
      boundaryOutlineLen: null
    }
  }
  private mounted() {
    this.initMap()
  }
  private initMap() {
    this.map = new BMap.Map('container') // 创建地图实例
    const point = new BMap.Point(118.384108423, 31.3660197875) // 创建点坐标
    this.map.centerAndZoom(point, 11) // 初始化坐标，设置中心点坐标和地图级别
    this.map.enableContinuousZoom()
    this.map.setMapStyleV2({ styleJson }) // 设置地图样式
    this.addCutomOverlay(new BMap.Point(118.358512, 31.336382), 1)
    this.getBoundary()
  }
  //  添加地图覆盖层
  private addCutomOverlay(point: any, index: number) {
    const marker = new BMap.Marker(point)
    this.map.addOverlay(marker)
    const opts = {
      width: 200,
      height: 100,
      title: '芜湖市弋江区',
      enableMessage: true,
      message: '弋江区的小伙伴一起燥起来'
    }
    const infoWindow = new BMap.InfoWindow('安徽省芜湖市弋江区中央城', opts)
    marker.addEventListener('click', () => {
      this.map.openInfoWindow(infoWindow, point)
    })
  }
  //  设置行政区域边界
  private getBoundary() {
    const bdary = new BMap.Boundary()
    this.area.forEach((name: string) => {
      bdary.get(name, (rs: any) => {
        // 获取行政区域
        // this.map.clearOverlays() // 清除地图覆盖物
        const count = rs.boundaries.length // 行政区域的点有多少个
        if (count === 0) {
          alert('未能获取当前输入行政区域')
          return
        }
        let pointArray: any[] = []
        for (let i = 0; i < count; i++) {
          const ply = new BMap.Polygon(rs.boundaries[i], {
            strokeWeight: 2,
            strokeColor: '#0000ff',
            fillColor: 'transparent',
            fillOpacity: 0
          }) // 建立多边形覆盖物
          this.map.addOverlay(ply) // 添加覆盖物
          pointArray = pointArray.concat(ply.getPath())
        }
        this.map.setViewport(pointArray) // 调整视野
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.map {
  #container {
    height: 770px;
  }
}
</style>
<style>
/* 去除左下角地图logo */
.anchorBL {
  display: none !important;
}
</style>

