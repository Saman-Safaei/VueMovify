<template>
  <div class="cell-container">
      <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.cell-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: flex-start;
    margin: 1rem 0 0 0;

    @media screen and (min-width: 700px) {
        justify-content: center;
    }
}
</style>