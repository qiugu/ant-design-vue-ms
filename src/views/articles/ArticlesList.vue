<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ArticlesList extends Vue {

  private tableData: any[] = []
  private form: any = this.$form.createForm(this)
  private formLayout: any =  { labelCol: 7, wrapCol: 17 }
  private columns: any[] = [
    { title: '序号', dataIndex: 'index', align: 'center' },
    { title: '文章标题', dataIndex: 'title', align: 'center' },
    { title: '作者', dataIndex: 'author', align: 'center' },
    { title: '创建时间', dataIndex: 'createdTime', align: 'center' },
    { title: '修改时间', dataIndex: 'lastModifiedTime', align: 'center' },
  ]

  private resetForm() {}

  private handleSubmit() {}

  private renderSearch() {
    return (
      <a-form layout='inline' form={this.form} onSubmit={this.handleSubmit} class='search-form'>
        <a-row gutter={10}>
          <a-col span={8}>
            <a-form-item label='创建时间' labelCol={{ span: this.formLayout.labelCol }} wrapperCol={{ span: this.formLayout.wrapCol }}>
              <a-range-picker
                format='YYYY-MM-DD'
                placeholder={['请选择创建开始日期', '请选择创建结束日期']}
                v-decorator={['dateRange']}
              />
            </a-form-item>
          </a-col>
          <a-col span={8}>
            <a-form-item label='文章标题' labelCol={{ span: this.formLayout.labelCol }} wrapperCol={{ span: this.formLayout.wrapCol }}>
              <a-input placeholder='请输入文章标题' v-decorator={['keys']} style={{ width: '100%' }}/>
            </a-form-item>
          </a-col>
          <a-col span={8}>
            <a-form-item label='关键词' labelCol={{ span: this.formLayout.labelCol }} wrapperCol={{ span: this.formLayout.wrapCol }}>
              <a-input placeholder='请输入关键词' v-decorator={['keys']}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col span={24} style={{ textAlign: 'right' }}>
            <a-button type='primary' htmlType='submit'>查询</a-button>
            <a-button onClick={this.resetForm}>重置</a-button>
          </a-col>
        </a-row>
      </a-form>
    )
  }

  private render() {
    return (
      <div class='list'>
        {this.renderSearch()}
        <a-table dataSource={this.tableData} columns={this.columns}></a-table>
      </div>
    )
  }
}
</script>
<style lang="scss" scoped>

</style>