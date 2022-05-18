<template>
  <div class="view">
    <div v-if="data.loaded">
      <div class="movie__info">
        <img class="info__img" :src="data['poster']" alt="" />

        <div class="info__desc-container">
          <h3>{{ data["title"] }}</h3>
          <p>Rated : {{ data["rated"] }}</p>
          <p>Meta score : {{ data["metascore"] }}</p>
          <p>IMDB rating : {{ data["imdb_rating"] }}</p>
          <p>Awards : {{ data["awards"] }}</p>
          <p>Country: {{ data["country"] }}</p>
          <p>Director : {{ data["director"] }}</p>
          <p>Writer : {{ data["writer"] }}</p>
          <p>Year : {{ data["year"] }}</p>
          <p>Release date : {{ data["released"] }}</p>
          <p>Play Time : {{ data["runtime"] }}</p>
          <p>Actors : {{ data["actors"] }}</p>
          <p>Synopsis : {{ data["plot"] }}</p>
        </div>
      </div>
      <h3 class="imgs-title">Images</h3>
      <div class="movie__imgs">
        <img class="movie__img" v-for="img in data['images']" :key="img" :src="img" alt="movie img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { api } from "@/api";
import { useRoute } from "vue-router";
import { reactive, onMounted } from "vue";

const route = useRoute();
const data = reactive({});

onMounted(() => {

  api.get(`/movies/${route.params.id}`).then((res) => {
    Object.assign(data, res.data);
    data.loaded = true;
    document.title = "Vue Movify - " + res.data.title;
  });
  
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables";

.view {
  padding: 1rem;

  .movie__info {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;

    @media screen and (min-width: $md) {
      flex-direction: row;
    }

    .info__img {
      width: 100%;
      object-fit: contain;

      @media screen and (min-width: $md) {
        width: 40%;
        max-width: 300px;
      }

      @media screen and (min-width: $lg) {
        width: 30%;
      }

      border-radius: 1rem;
    }

    .info__desc-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 0.4rem;
    }
  }

  .imgs-title {
    text-align: center;
    margin: 1rem 0;
  }

  .movie__imgs {
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;

    @media screen and (min-width: $md) {
      grid-template-columns: 1fr 1fr;
    }

    .movie__img {
      width: 100%;
      border-radius: 0.5rem;
    }
  }
}
</style>
