<template>
  <div class="articles">
    <a-row type="flex" justify="space-between" class="header-toolbar">
      <a-col :span="23">
        <a-input v-model="title" maxlength="50" placeholder="请输入文章标题" />
      </a-col>
      <a-col :span="1">
        <!-- <a-button type="primary">保存</a-button> -->
      </a-col>
    </a-row>
    <mavon-editor
      ref="md"
      v-model="text" 
      :style="{ minHeight: '600px', zIndex: '100' }" 
      placeholder="暂时无法上传图片"
      :toolbarsFlag="false"
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
  private title: string = ''

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
    this.$confirm({
      title: '提示',
      content: '是否保存？',
      okText: '保存',
      cancelText: '取消',
      onOk: () => {
        this.sendContent()
      },
      onCancel: () => {}
    })
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
    this.text = ''
    this.title = ''
  }
}
</script>

<style lang="scss" scoped>
.header-toolbar {
  padding: 10px 0;
  background: #fff;
  box-shadow: 0 0px 3px rgba(0,0,0,0.157), 0 0px 3px rgba(0,0,0,0.227);
}
.ant-modal-footer {
  border: 0;
}
.ant-input:focus,
.ant-input:hover {
  border-color: transparent;
  box-shadow: none;
  border-width: 0;
}
.ant-input {
  border: 0;
  padding-left: 25px;
}
</style>

