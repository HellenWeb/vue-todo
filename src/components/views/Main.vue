<template lang="en">
    <div style="margin-top: 5%">
      <h1 class="text-center mb-4">Todo App</h1>
      <div class="input-group mb-3">
        <input
        type="text"
        class="form-control"
        placeholder="Task"
        aria-label="Task"
        aria-describedby="basic-addon2"
        v-on:input="inputTargetValue"
        v-on:keyup.enter="pressEnter"
        >
        <span class="input-group-text" id="basic-addon2">Add Todo</span>
      </div>
      <div class="list-group">
        <TodoList
        v-bind:todos="todos"
        @remove-todo="removeTodo"
        />
      </div>
    </div>
</template>
<script>
import TodoList from '@/components/TodoList.vue'
export default {
  name: 'MyMain',
  data () {
    return {
      task: '',
      todos: []
    }
  },
  methods: {
    inputTargetValue (event) {
      this.task = event.target.value
    },
    pressEnter () {
      this.todos.push({ id: this.todos.length, name: this.task, date: new Date().toLocaleString() })
    },
    removeTodo (name) {
      this.todos = this.todos.filter(t => t.name !== name)
    }
  },
  components: { TodoList }
}
</script>
<style lang="en">

</style>
