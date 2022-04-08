<template>
  <div class="card" :style="props.styles">
    <img :src="props.imgUrl" alt="null" class="card__image" :class="{ 'card__image-hide': !loaded}" loading="lazy" @load="loadFinished"/>
    <div class="card__loading-placeholder" v-show="!loaded">Loading</div>

    <div class="card__content">
      <div class="card__info">
        <h4 class="info__title">{{ props.title }}</h4>
        <p class="info__genres">{{ props.genres.join(" - ") }}</p>
      </div>
    </div>

    <router-link
      class="card__link"
      :to="{ name: 'movie_info', params: { id : props.id } }"
    ></router-link>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps(["imgUrl", "genres", "styles", "title", "id"]);
const loaded = ref(false);

function loadFinished() {
  loaded.value = true;
}

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

  .card__loading-placeholder {
    aspect-ratio: 283/429;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card__image {
    width: 100%;
  }
  .card__image-hide {
    width: 0;
    height: 0;
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
