<template>
  <div class="word">
    <a-card title="学习计划表">
      <TodoList/>
    </a-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TodoList from '@/components/TodoList/TodoList.vue'

@Component({
  components: {
    TodoList
  }
})
export default class WorkPlace extends Vue {}
</script>
