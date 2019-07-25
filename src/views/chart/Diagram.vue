<template>
  <div class="charts">
    <div ref="wuhu" class="wuhu"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import geoJson from '@/json/wuhu.json'

@Component
export default class Diagram extends Vue {

  private mounted() {
    this.loadMap()
  }

  private calcSymbol(val: number, min: number, max: number, limitMin: number, limitMax: number) {
    const nomalVal = (val - min) / (max - min) * (limitMax - limitMin) + limitMin;
    return nomalVal;
  }
  private loadMap() {
    this.$echarts.registerMap('hefei', geoJson);
    const that = this
    const option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: '#fff',
            padding: [
                0,
                0,
                0,
                0
            ],
            textStyle: {
                color: '#333333'
            }
        },
        geo: {
            map: 'hefei',
            scaleLimit: {
                min: 1
            },
            label: {
                emphasis: {
                    show: true,
                    color: '#fff'
                },
                normal: {
                    show: true,
                    color: '#fff'
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#2274e2',
                    borderColor: '#87ebff'
                },
                emphasis: {
                    areaColor: '#2274e2',
                    show: false
                }
            },
            roam: true
        },
        series: [{
                type: 'scatter',
                name: 'city',
                coordinateSystem: 'geo',
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        formatter: '{b}'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#ffef34'
                    }
                },
                symbolSize(val: string, params: any) {
                    if (params.data.person && typeof(params.data.person) === 'number') {
                        return that.calcSymbol(params.data.person, 203, 400, 10, 50);
                    } else {
                        return 0
                    }
                },
                data: [
                  {
                        id: 2,
                        name: '芜湖',
                        cityId: 2,
                        cityName: '芜湖',
                        value: [
                            118.384108423,
                            31.3660197875
                        ],
                        sale: '--',
                        person: 272,
                        openDate: '2018-10-01 00:00:00'
                    }
                ]
            },
            {
                type: 'map',
                map: 'hefei',
                geoIndex: 0,
                roam: true,
                // "mapType":"map",
                scaleLimit: {
                    min: 10
                },
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                        color: '#fff'
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#2274e2',
                        borderColor: '#87ebff'
                    }
                },
                data: [{
                        name: '广西壮族自治区',
                        value: 217
                    },
                    {
                        name: '新疆',
                        value: 203
                    },
                    {
                        name: '陕西',
                        value: 367
                    },
                    {
                        name: '上海',
                        value: 748
                    },
                    {
                        name: '广东',
                        value: 966
                    },
                    {
                        name: '内蒙古自治区',
                        value: 500
                    },
                    {
                        name: '北京',
                        value: 1467
                    }
                ]
            }
        ]
    }
    const myChart = this.$echarts.init(this.$refs.wuhu)
    myChart.setOption(option, true);
  }
}
</script>

<style lang="scss" scoped>
.charts {
  width: 100%;
  height: 670px;
  .wuhu {
    width: 100%;
    height: 670px;
  }
}
</style>
