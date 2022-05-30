<template>
<div>
  <MyNavbar />
  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import MyNavbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: { MyNavbar }
}
</script>

<style>
@import "bootstrap"
</style>
