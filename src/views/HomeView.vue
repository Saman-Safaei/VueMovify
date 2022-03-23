<template>
  <TopHeader />
  <MovieContainer>
    <movie-card
      v-for="movie in movieList"
      :key="movie['id']"
      :title="movie['title']"
      :img-url="movie['poster']"
      :genres="movie['genres']"
      :style="{ width: '100%' }"
    ></movie-card>
  </MovieContainer>
  <PageSelect view="home" :metadata="metaData.data" v-if="metaData.data" />
</template>

<script setup>
import TopHeader from "@/components/Header/TopHeader.vue";
import MovieCard from "@/components/Movie/MovieCard.vue";
import MovieContainer from "@/components/Movie/MovieContainer.vue";
import PageSelect from "@/components/Pagination/PageSelect.vue";

import { api } from "@/api";
import { computed, reactive, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const page = computed(() => route.query.p);


const movieList = reactive([]);
const metaData = reactive({});

function fetchData() {

  api.get(`https://moviesapi.ir/api/v1/movies?page=${page.value}`)
    .then(res => {
      metaData.data = res.data.metadata;
      movieList.length = 0;
      movieList.push(...res.data.data);
    });
}

watch(page, () => {
  window.scrollTo(0, 0);
  fetchData();
})

fetchData();


</script>

<style lang="scss" scoped>
</style>