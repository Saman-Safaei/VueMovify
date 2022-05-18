<template>
  <NavBar/>
  <router-view/>
  <progress-bar/>
</template>

<script setup>
import NavBar from '@/components/Navigation/NavBar.vue';
import ProgressBar from "@/components/Navigation/ProgressBar.vue";
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212e3b;
}
.view {
  margin-top: 3.5rem;
  min-height: 70vh;
}
</style>
