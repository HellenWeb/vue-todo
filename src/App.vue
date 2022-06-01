<template>
<div class="wrapper d-flex">
  <MyNavbar />
  <div class="main">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  <MyFooter />
</div>
</template>

<script>
import MyNavbar from '@/components/Navbar.vue'
import MyFooter from '@/components/Footer.vue'
export default {
  name: 'App',
  components: { MyNavbar, MyFooter }
}
</script>

<style>
@import "bootstrap";
html,
body {
  height: 100%;
  -moz-box-sizing: border-box;
  box-sizing: border-box
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1 1 auto;
}
</style>
