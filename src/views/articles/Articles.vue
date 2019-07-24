<template>
  <div class="articles">
    <mavon-editor
      ref="md" 
      v-model="text" 
      :style="{ minHeight: '650px' }" 
      placeholder="暂时无法上传图片"
      @imgAdd="imgAdd"
      @save="saveContent"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { axios } from '@/utils/request'

@Component
export default class Articles extends Vue {
  private text: string = ''

  private imgAdd(pos: any, $file: any) {
    this.$notification['info']({
      message: '暂未开启',
      description: ''
    })
    // 第一步.将图片上传到服务器.
    // let formdata = new FormData();
    // formdata.append('image', $file);
    // axios({
    //     url: 'server url',
    //     method: 'post',
    //     data: formdata,
    //     headers: { 'Content-Type': 'multipart/form-data' },
    // }).then((url) => {
    //     // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
    //     /**
    //    * $vm 指为mavonEditor实例，可以通过如下两种方式获取
    //    * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
    //    * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
    //    */
    //     this.$refs['md'].$img2Url(pos, url);
    // })
  }
  private async saveContent(value: string) {
    const param = {
      docContent: value,
      username: sessionStorage.getItem('loginName')
    }
    const res = await this.$http.post(this.$ctx + '/articles/saveContent', param)
    if (res.status === 200) {
      this.$notification['success']({
        message: res.resultMsg,
        description: ''
      })
      this.text = ''
    }
  }
}
</script>
