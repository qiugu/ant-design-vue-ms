<template>
  <div class="word">
    <a-card title="学习计划表">
      <todo-list/>
    </a-card>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList/TodoList.vue'
export default {
  components: {
    TodoList
  }
}
</script>

<style>

</style>
