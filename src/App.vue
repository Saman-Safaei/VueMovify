<template>
  <NavBar/>
  <router-view/>
</template>

<script setup>
import NavBar from '@/components/Navigation/NavBar.vue';
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212e3b;
}
.view {
  margin-top: 3.5rem;
}
</style>
