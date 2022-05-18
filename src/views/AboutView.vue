<template>
  <div class="view content">
    <h3 class="title">About Me</h3>
    <p class="description">Hello! I'm Saman Safaei, Junior Javascript Developer and Beginner in Vue.</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(() => {
  document.title = "Vue Movify - About Me";
})
</script>

<style lang="scss" scoped>
.content {
  padding: 1rem;

  .title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .description {
    word-spacing: 0.07rem;
    line-height: 1.3rem;
  }
}
</style>
