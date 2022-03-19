<template>
  <div class="card">
    
    <img :src="props.imgUrl" alt="null" class="card__image" @click="imgClicked">

    <div class="card__content">

    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['imgUrl']);

function imgClicked() {
  open(props.imgUrl, "_blank");
}
</script>

<style lang="scss" scoped>

.card {
  width: 6rem;
  height: 2rem;
  background: blue;
}

</style>
