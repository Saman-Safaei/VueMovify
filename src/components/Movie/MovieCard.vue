<template>
  <div class="card">
    
    <img :src="props.imgUrl" alt="null" class="card__image" @click="imgClicked">

    <div class="card__content">
      <div class="card__info">
        <h4 class="info__title">NeoFilm</h4>
        <p class="info__rate">2.4 / 10</p>
      </div>
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
  width: 30%;
  background: white;
  box-shadow: 0 4px 0.5rem 0.1rem rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  overflow: hidden;

  .card__image {
    width: 100%;
  }

  .card__content {
    padding: 0.5rem;

    .card__info {
      display: flex;
      flex-direction: row;

      .info__title {
        flex-basis: 70%;
      }
      .info__rate {
        flex-basis: 30%;
        text-align: end;
      }
    }
  }
}

</style>
