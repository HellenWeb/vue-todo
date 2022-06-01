<template>
<div>
   <TodoItem
      v-for="todo of todos" :key="todo"
      v-bind:todo="todo"
   />
</div>
</template>
<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  props: ['todos'],
  name: 'TodoList',
  components: { TodoItem }
}
</script>
<style>

</style>
