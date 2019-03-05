<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a-form>
      <a-form-item label="拖到的位置" :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }">
        <a-textarea :rows="4" v-model="content1" @change="changText"></a-textarea>
      </a-form-item>
      <a-form-item label="被拖动区域" :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }">
        <a-textarea :rows="4" v-model="content2"></a-textarea>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      content1: '<p>端午节群殴的几千万的</p>            大叔大婶大撒大声地撒大所大所大所大所多',
      content2: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    changText(val) {
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #7546c9;
}
</style>
