<template>
  <div class="articles">
    <mavon-editor
      ref="md" 
      v-model="text" 
      :style="{ minHeight: '650px', zIndex: '100' }" 
      placeholder="暂时无法上传图片"
      @imgAdd="imgAdd"
      @save="saveContent"/>
    <a-modal title="请输入文章标题" :visible="visible" :destroyClose="true" width="380px" @cancel="closeTitle">
      <a-input v-model="title" maxlength="50"></a-input>
      <template slot="footer">
        <a-button @click="closeTitle">取消</a-button>
        <a-button type="primary" @click="sendContent">确定</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { axios } from '@/utils/request'

@Component
export default class Articles extends Vue {
  private text: string = ''
  private title: string = ''
  private visible: boolean = false

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
  private saveContent(value: string) {
    this.visible = true
  }
  private async sendContent() {
    if (!this.text || !this.title) {
      this.$notification['warning']({
        message: '文章标题和内容不能为空',
        description: ''
      })
      return
    }
    const param = {
      title: this.title,
      docContent: this.text,
      username: sessionStorage.getItem('loginName'),
      token: JSON.parse(sessionStorage.getItem('ms__ACCESS_TOKEN') || '').value
    }
    const res = await this.$http.post(this.$ctx + '/articles/saveContent', param)
    if (res.status === 200) {
      this.$notification['success']({
        message: res.resultMsg,
        description: ''
      })
    } else {
      this.$notification['success']({
        message: res.resultMsg,
        description: ''
      })
    }
    this.visible = false
    this.text = ''
    this.title = ''
  }
  private closeTitle() {
    this.visible = false
  }
}
</script>

<style lang="scss">
.ant-modal-footer {
  border: 0;
}
</style>

