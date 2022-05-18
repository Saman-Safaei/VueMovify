<template>
  <div class="view error-view">
    <h3 class="error__title">Page Not Found - Error Code : 404</h3>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(() => {
  document.title = "Vue Movify - Error";
})
</script>

<style lang="scss" scoped>
.error-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;

  .error__title {
    font-weight: normal;
    font-size: 1.3rem;
  }
}
</style>
