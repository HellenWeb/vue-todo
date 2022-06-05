<template>
<div>
   <TodoItem
      v-for="todo of todos" :key="todo"
      v-bind:todo="todo"
      v-on:remove-todo="removeTodo"
   />
</div>
</template>
<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  props: ['todos'],
  name: 'TodoList',
  components: { TodoItem },
  methods: {
    removeTodo (name) {
      this.$emit('remove-todo', name)
    }
  }
}
</script>
<style>

</style>
