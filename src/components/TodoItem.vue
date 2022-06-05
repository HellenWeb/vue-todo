<template>
    <div style="display: flex; justify-content:space-between; margin-bottom: 5px;">
        <button type="button" class="list-group-item list-group-item-action" style="margin-right: 5px;">{{todo.name}}<a style="opacity: .5; font-size:10px; margin-left: 5px;">({{todo.date}})</a></button>
        <button type="button" class="btn btn-danger" v-on:click="$emit('remove-todo', todo.name)">X</button>
    </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
  },
  name: 'TodoItem'
}
</script>
<style>

</style>
