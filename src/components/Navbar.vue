<template lang="en">
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <a class="navbar-brand text-black">Vue Todo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/main">Main</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
  name: 'MyNavbar'
}
</script>
<style lang="en">

</style>
