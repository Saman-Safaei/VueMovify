<template>
  <div class="card" :style="props.styles">
    
    <img :src="props.imgUrl" alt="null" class="card__image">

    <div class="card__content">
      <div class="card__info">
        <h4 class="info__title">{{ props.title }}</h4>
        <p class="info__genres">{{ props.genres.join(" - ") }}</p>
      </div>
    </div>

    <router-link class="card__link" to="#"></router-link>

  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['imgUrl', 'genres', 'styles','title', 'id']);

</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background: white;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  .card__image {
    width: 100%;
  }

  .card__link {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
  }

  .card__content {
    padding: 0.5rem;
    flex-grow: 1;

    .card__info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.3rem;
      height: 100%;

      .info__title {
        text-align: center;
      }
      .info__genres {
        text-align: center;
      }
    }
  }
}

</style>
