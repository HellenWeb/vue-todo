<template>
    <div class="main">
        <div class="intro">
          <div class="intro__inner text-center" style="margin-top: 15%">
            <div class="d-flex justify-content-center">
              <img style="width: 6%; margin-right: 4px;" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dotcom-monitor.com%2Fblog%2Fwp-content%2Fuploads%2Fsites%2F3%2F2020%2F05%2FVue-logo-1.png&f=1&nofb=1">
              <h1 class="text-xl mb-3" style="margin-top: 6px;">Todo App</h1>
            </div>
            <p style="opacity: .5; margin-bottom: 2.5%">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <router-link class="route-l text-white" to="/main">Go Main</router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyHome'
}
</script>

<style>

.route-l {
  background: rgb(87, 80, 80);
  padding: 10px;
  text-decoration: none;
  border-radius: 2px;
}

</style>
