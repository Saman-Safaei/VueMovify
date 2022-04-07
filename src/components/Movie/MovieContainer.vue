<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/base/variables';

.container {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  padding: 1rem;
  gap: 1rem;

  @media screen and (min-width: $sm) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: $md) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (min-width: $lg) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media screen and (min-width: $xl) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>
