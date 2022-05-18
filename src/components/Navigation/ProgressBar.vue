<template>
  <div class="progress" v-show="store.isPageLoading"></div>
</template>

<script setup>
import mainStore from "@/stores/main";

const store = mainStore();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables";

@keyframes loading {
  0% {
    left: -50%;
  }
  100% {
    left: 100%;
  }
}

.progress {
  position: fixed;
  top: 3.5rem;
  left: 0; 
  right: 0;
  height: 0.5rem;
  background: rgb(221, 221, 221);
  z-index: $progress-z;

  &::after {
    content: "";
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    height: 0.3rem;
    width: 50%;
    background: $primary-light-color;
    animation: loading 2s ease-in-out infinite;
  }
}
</style>
