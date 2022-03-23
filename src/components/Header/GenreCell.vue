<template>
  <router-link :to="{ name: 'movies', params: {genreId: props.genreId}}" class="cell">
      <slot></slot>
  </router-link>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps(["genreId"]);

</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables";

.cell {
    background: rgba(255, 255, 255, 0.685);
    color: $secondary-color;
    padding: 0.3rem 0.6rem;
    border-radius: 10rem;
    transition: all 300ms;
    user-select: none;

    &:hover {
        color: white;
        background: $secondary-variant-color;
    }
}
</style>