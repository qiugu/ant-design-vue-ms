<template>
  <div class="type">
    <p>文章来源：<a href="https://juejin.im/post/5cec1bcff265da1b8f1aa08f#heading-24" target="_blank">掘金</a></p>
    <a-card title="基本数据类型（值本身不可改变）">
      <a-card-grid style="width:25%;textAlign:'center'" v-for="(item, index) in data" :key="index">
        <a-tag :color="item.color">{{ item.content }}</a-tag>
        {{ item.extra || '' }}
      </a-card-grid>
    </a-card>
    <a-card title="引用类型" style="margin: 20px 0;">
      <a-list
        bordered
        :dataSource="data_1"
      >
        <a-list-item slot="renderItem" slot-scope="item">{{ item }}</a-list-item>
      </a-list>
      <a-card title="类型转换规则" style="margin: 20px 0;">
        <img src="../../assets/images/type-convert.png" alt="convert">
      </a-card>
      <a-card title="包装类型（装箱和拆箱）">
        <a-tag color="#2db7f5">Boolean</a-tag>
        <a-tag color="#87d068">Number</a-tag>
        <a-tag color="#108ee9">String</a-tag>
      </a-card>
    </a-card>
    <a-card title="判断JavaScript数据类型" style="margin-bottom: 20px;">
      <a-list
        bordered
        :dataSource="data_2"
      >
        <a-list-item slot="renderItem" slot-scope="item">{{ item }}</a-list-item>
      </a-list>
    </a-card>
    <a-card title="number类型精度丢失">
      <p>计算机中所有的数据都是以二进制存储的，所以在计算时计算机要把数据先转换成二进制进行计算，然后在把计算结果转换成十进制。在计算0.1+0.2时，二进制计算发生了精度丢失，导致再转换成十进制后和预计的结果不符。</p>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { color: 'pink', content: 'null' },
        { color: 'red', content: 'undefined' },
        { color: 'orange', content: 'string' },
        { color: 'green', content: 'number' },
        { color: 'cyan', content: 'boolean' },
        { color: 'blue', content: 'Symbol' },
        { color: 'purple', content: 'BigInt', extra: '(es10的类型，最新版谷歌已经支持)' }
      ],
      data_1: [
        '存储的值大小不定，可动态调整',
        '空间较大，运行效率低',
        '无法直接操作其内部存储，使用引用地址读取',
        '通过代码进行分配空间'
      ],
      data_2: [
        'typeof',
        'instanceof',
        'Object.prototype.toString.call(/* 要判断的值 */)'
      ]
    }
  }
}
</script>

<style>
</style>
