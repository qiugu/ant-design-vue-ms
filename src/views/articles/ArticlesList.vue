<template>
  <div class="list">
    <condition-screen :filterData="searchData" @change="handleChange" />
    <div :style="{ marginTop: '20px' }">
      <a-table
        :rowKey="record => record.id"
        :dataSource="tableData"
        :columns="columns"
        :pagination="pagination"
      >
        <template slot="operation" slot-scope="text, record">
          <a @click="editArticle(record)">编辑</a>
          <a-divider type="vertical" />
          <a @click="queryArticle(record)">查看</a>
          <a-divider type="vertical" />
          <a-popconfirm title="是否确定删除该篇文章?" @confirm="confirmDelete(record)" okText="Yes" cancelText="No">
            <a href="#">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ConditionScreen from '@/components/screen/ConditionScreen.vue';

@Component({
  components: {
    ConditionScreen,
  },
})
export default class ArticlesList extends Vue {
  private searchData: any[] = [
    {
      name: '字数',
      lists: [
        {
          id: 0, value: '500', label: '500字', type: 0,
        },
        {
          id: 1, value: '1500', label: '1500字', type: 0,
        },
        {
          id: 2, value: '300', label: '1500字', type: 0,
        },
      ],
    },
  ]

  private tableData: any[] = []

  private form: any = this.$form.createForm(this)

  private formLayout: any = { labelCol: 7, wrapCol: 17 }

  private pagination: any = {
    pageSize: 10,
    total: 1,
    current: 1,
  }

  private columns: any[] = [
    {
      title: '序号', dataIndex: 'index', align: 'center', customRender: (text: string, record: any, index: number) => index + 1,
    },
    { title: '文章标题', dataIndex: 'title', align: 'center' },
    { title: '作者', dataIndex: 'username', align: 'center' },
    { title: '创建时间', dataIndex: 'createdTime', align: 'center' },
    { title: '修改时间', dataIndex: 'lastModifiedTime', align: 'center' },
    { title: '版本', dataIndex: 'version', align: 'center' },
    {
      title: '操作', dataIndex: 'operation', align: 'center', scopedSlots: { customRender: 'operation' },
    },
  ]

  private mounted() {
    this.fetchData();
  }

  private async fetchData() {
    const params = {
      token: JSON.parse(sessionStorage.getItem('ms__ACCESS_TOKEN') || '').value,
    };
    const res = await this.$http.post(`${this.$ctx}/articles/getList`, params);
    if (res.status === 200) {
      this.tableData = res.resultData;
    }
  }

  private resetForm() {
    this.form.resetFields();
  }

  private handleSubmit() {}

  private editArticle(record: any) {
    this.$router.push({
      name: 'arti_edit',
      query: {
        id: record.id,
      },
    });
  }

  private queryArticle(record: any) {}

  private confirmDelete(record: any) {}

  private handleChange(tags: any) {}
}
</script>
<style lang="scss" scoped>
.list {
  background: #fff;
  padding: 20px;
}
</style>
