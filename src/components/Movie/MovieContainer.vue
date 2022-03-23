<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/base/variables';

.container {
  display: grid;
  grid-template-columns: auto;
  padding: 1rem;
  gap: 1rem;

  @media screen and (min-width: $sm) {
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: $md) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (min-width: $lg) {
    grid-template-columns: auto auto auto auto;
  }

  @media screen and (min-width: $xl) {
    grid-template-columns: auto auto auto auto auto;
  }
}
</style>
