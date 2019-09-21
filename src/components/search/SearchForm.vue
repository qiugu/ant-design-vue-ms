<template>
  <div class="search-form">
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
            <a-select :placeholder="type" v-decorator="['messType']">
              <a-select-option v-for="item in types" :key="item.value" :value="item.value">{{ item.title }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="关键词：" :labelCol="{ span: formLayout.labelCol }" :wrapperCol="{ span: formLayout.wrapCol }">
            <a-input placeholder="请输入关键词" v-decorator="['keys']"/>
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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SearchForm extends Vue {
  private resetForm() {
    this.form.resetFields()
  }
}
</script>

<style>

</style>