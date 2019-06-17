<template>
  <div class="message">
    <a-form layout="inline" :form="form" @submit="handleSubmit" class="search-form">
      <a-row :gutter="10">
        <a-col :span="8">
          <a-form-item label="消息时间：" :labelCol="{ span: formLayout.labelCol }" :wrapperCol="{ span: formLayout.wrapCol }">
            <a-range-picker
              format="YYYY-MM-DD"
              :placeholder="['请选择开始日期','请选择结束日期']"
              v-decorator="['dateRange']"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="消息类型：" :labelCol="{ span: formLayout.labelCol }" :wrapperCol="{ span: formLayout.wrapCol }">
            <a-select placeholder="请选择消息类型" v-decorator="['messType']">
              <a-select-option v-for="item in types" :key="item.value" :value="item.value">{{ item.title }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="关键词：" :labelCol="{ span: formLayout.labelCol }" :wrapperCol="{ span: formLayout.wrapCol }">
            <a-input placeholder="请选择关键词" v-decorator="['keys']"/>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row style="marginTop: 20px;">
        <a-col :span="24" style="text-align: right;">
          <a-button type="primary" htmlType="submit">查询</a-button>
          <a-button @click="resetForm" style="marginLeft: 10px;">重置</a-button>
        </a-col>
      </a-row>
    </a-form>
    <div class="message-list">
      <a-button icon="delete" type="primary" @click="clearCurrentPage">清空当前页</a-button>
      <a-alert type="info" showIcon :message="alertSelectedRows" style="margin: 20px 0;"/>
      <a-table 
        :dataSource="tableData" 
        :columns="columns" 
        :rowKey="record => record.id"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}">
        <template v-for="item in ['index','datetime','mesType','mesContent']" :slot="item" slot-scope="text, record, index">
          <div :key="item">
            <template v-if="item === 'index'">{{ index+1 }}</template>
            <template v-else>{{ record[item] }}</template>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record, index">
          <a-button size="small" @click="readed">已读</a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      types: [
        {value: '0',title: '通知'},
        {value: '1',title: '警告'},
        {value: '2',title: '错误'},
        {value: '3',title: '待办'}
      ],
      formLayout: {
        labelCol: 4,
        wrapCol: 20
      },
      tableData: [],
      columns: [
        {title: '#',dataIndex: 'index',align: 'center',scopedSlots: { customRender: 'index' }},
        {title: '时间',dataIndex: 'datetime',align: 'center',scopedSlots: { customRender: 'datetime' }},
        {title: '消息类型',dataIndex: 'mesType',align: 'center',scopedSlots: { customRender: 'mesType' }},
        {title: '内容',dataIndex: 'mesContent',align: 'center',scopedSlots: { customRender: 'mesContent' }},
        {title: '操作',dataIndex: 'operation',align: 'center',scopedSlots: { customRender: 'operation' }}
      ],
      selectedRowKeys: []
    }
  },
  computed: {
    alertSelectedRows () {
      return `当前选中了${this.selectedRowKeys.length}行`
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const params = {
        token: JSON.parse(sessionStorage.getItem('ms__ACCESS_TOKEN')).value
      }
      const res = await this.$http.post(this.$ctx + '/personal/message',params)
      if (res.status === 200) {
        this.tableData = res.resultData && res.resultData.map(item => {
          item.mesType = this.types[item.mesType].title
          return item
        })
      }
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          this.$notification['info']({
            message: '暂未开启'
          })
        }
      })
    },
    resetForm() {
      this.form.resetFields()
    },
    onSelectChange(selectKeys) {
      this.selectedRowKeys = selectKeys
    },
    clearCurrentPage() {
      if (this.selectedRowKeys.length === 0) {
        this.$notification['info']({
          message: '请选择要清空的行'
        })
        return
      }
    },
    readed() {
      this.$notification['info']({
        message: '暂未开启'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  background: #fff;
  padding: 20px;
  .search-form .ant-form-item {
    display: flex;
  }
  .search-form .ant-form-item-control-wrapper {
    flex: 1;
  }
  .message-list {
    margin-top: 20px;
  }
}
</style>
