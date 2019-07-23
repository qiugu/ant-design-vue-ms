<template>
  <div class="word">
    <a-card title="学习计划表">
      <todo-list/>
    </a-card>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import TodoList from '@/components/TodoList/TodoList.vue'

@Component({
  components: {
    [TodoList.name]: TodoList
  }
})
export default class WorkPlace extends Vue {}
</script>

<style>

</style>
