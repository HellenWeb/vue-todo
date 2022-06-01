<template>
    <div style="display: flex; justify-content:space-between; margin-bottom: 5px;">
        <button type="button" class="list-group-item list-group-item-action" style="margin-right: 5px;">{{todo.name}}</button>
        <button class="btn btn-danger">X</button>
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
  name: 'TodoItem'
}
</script>
<style>

</style>
