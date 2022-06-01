<template lang="en">
    <div style="margin-top: 5%">
      <h1 class="text-center mb-4">Todo App</h1>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Task" aria-label="Task" aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">Add Todo</span>
      </div>
      <div class="list-group">
        <TodoList
        v-bind:todos="todos"
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
      todos: [
        { id: 1, name: 'Buy bread' },
        { id: 2, name: 'Buy butter' }
      ]
    }
  },
  components: { TodoList }
}
</script>
<style lang="en">

</style>
