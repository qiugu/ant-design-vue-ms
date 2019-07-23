<template>
    <li class="todo" :class="{completed: todo.done,editing: editing}">
        <div class="view">
            <input type="checkbox" class="toggle" :checked="todo.done" @change="toggleTodo(todo)">
            <label v-text="todo.text" class="todo-content" @dblclick="editing=true"/>
            <button @click="removeTodo(todo)" class="destroy"/>
        </div>
        <input type="text" class="edit" v-show="editing" :value="todo.text" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" @blur="doneEdit">
    </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class TodoItem extends Vue {

  private editing: boolean = false
  @Prop() private todo: any
  @Action('editTodo') private editTodo!: (data: { todo: any; value: string }) => void
  @Action('toggleTodo') private toggleTodo!: (todo: any) => void
  @Action('removeTodo') private removeTodo!: (todo: any) => void

  private doneEdit (e: any) {
    // 获得输入框中的值和当前组件的todo对象传递给相应的mutations
    const value = e.target.value.trim()
    const {todo} = this
    if (!value) {
      this.removeTodo(todo)
    } else if (this.editing) {
      this.editTodo({
        todo,
        value
      })
      this.editing = false
    }
  }
  private cancelEdit (e: any) {
    e.target.value = this.todo.text
    this.editing = false
  }
}
</script>
