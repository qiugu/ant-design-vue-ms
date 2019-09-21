const app = {
  state: {
    todos: [
      { text: '学习Nodejs，了解相关概念', done: false },
      { text: '学习vue，以及UI框架源码', done: false },
      { text: '练习英语，背单词', done: false },
      { text: '学习高等数学基本概念', done: false },
      { text: '学习Java，基本使用SpringBoot', done: false },
      { text: '学习数据库，了解数据库的概念', done: false },
    ],
  },
  mutations: {
    toggleSiderBar(state: any) {
      state.isCollapse = !state.isCollapse;
    },
    addTodo(state: any, todo: any) {
      state.todos.push(todo);
    },

    removeTodo(state: any, todo: any) {
      // 找到传递进来的todo索引，删除当前的todo
      state.todos.splice(state.todos.indexOf(todo), 1);
    },

    editTodo(state: any, data: { todo: any, text: string, done: boolean }) {
      data.todo.text = data.text;
      data.todo.done = data.done;
    },
  },
  actions: {
    addTodo(store: any, text: string) {
      store.commit('addTodo', {
        text,
        done: false,
      });
    },
    removeTodo(store: any, todo: any) {
      store.commit('removeTodo', todo);
    },
    toggleTodo(store: any, todo: any) {
      store.commit('editTodo', {
        todo,
        text: todo.text,
        done: !todo.done,
      });
    },
    editTodo(store: any, data: { todo: any, value: string }) {
      store.commit('editTodo', {
        todo: data.todo,
        text: data.value,
        done: data.todo.done,
      });
    },
    toggleAll(store: any, done: boolean) {
      store.state.todos.forEach((todo: any): void => {
        store.commit('editTodo', {
          todo,
          text: todo.text,
          done,
        });
      });
    },
    clearCompleted(store: any) {
      //  找到数组中已经完成的项，再遍历已经完成的项，提交删除的commit
      store.state.todos
        .filter((todo: any): boolean => todo.done)
        .forEach((todo: any) => {
          store.commit('removeTodo', todo);
        });
    },
  },
};
export default app;
