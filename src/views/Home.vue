<template>
<div class="home">
  <a-card title="HTML5">
    <a-card-meta title="万维网的核心语言、标准通用标记语言下的一个应用超文本标记语言（HTML）的第五次重大修改">
      <!-- <div
        slot="description"
        class="demo-infinite-container"
        v-infinite-scroll="handleInfiniteOnLoad"
        :infinite-scroll-disabled="busy"
        :infinite-scroll-distance="10"
      >
        <a-list
          :dataSource="data"
        >
          <a-list-item slot="renderItem" slot-scope="item,index">
            <a-list-item-meta :description="item.descrip">
              <span slot="title">{{item.tag}}</span>
              <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a-list-item-meta>
            <div>Content</div>
          </a-list-item>
          <div v-if="loading && !busy" class="demo-loading-container">
            <a-spin />
          </div>
        </a-list>
      </div> -->
      <a-list
          :dataSource="data"
        >
          <a-list-item slot="renderItem" slot-scope="item,index">
            <a-list-item-meta :description="item.descrip">
              <span slot="title">{{item.tag}}</span>
              <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a-list-item-meta>
            <div>Content</div>
          </a-list-item>
          <div v-if="loading && !busy" class="demo-loading-container">
            <a-spin />
          </div>
        </a-list>
    </a-card-meta>
  </a-card>
</div>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll'
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'
export default {
  directives: { infiniteScroll },
  data () {
    return {
      data: [],
      loading: false,
      busy: false,
    }
  },
  beforeMount () {
    this.fetchData((res) => {
      this.data = res.data.resultData.results
    })
  },
  mounted () {
    this.fetchData((res) => {
      this.data = res.data.resultData.results
    })
  },
  methods: {
    async fetchData (callback) {
      const res = await this.$http.post(this.$ctx + '/html5');
      if (res.status === 200) {
        console.log(res)
        callback(res);
      }
    },
    handleInfiniteOnLoad  () {
      const data = this.data
      this.loading = true
      if (data.length > 14) {
        this.$message.warning('Infinite List loaded all')
        this.busy = true
        this.loading = false
        return
      }
      this.fetchData((res) => {
        this.data = data.concat(res.results)
        this.loading = false
      })
    },
  },
}
</script>
<style>
.home {
  background: #fff;
}
.demo-infinite-container {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 300px;
  background: #fff;
}
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>