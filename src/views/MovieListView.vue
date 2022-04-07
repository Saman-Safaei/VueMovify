<template>
  <div class="view">
    <MovieContainer>
      <movie-card
        v-for="movie in movieList"
        :key="movie['id']"
        :title="movie['title']"
        :img-url="movie['poster']"
        :genres="movie['genres']"
        :style="{ width: '100%' }"
        :id="movie['id']"
      ></movie-card>
    </MovieContainer>
    <PageSelect view="movies" :metadata="metaData.data" v-if="metaData.data" />
  </div>
</template>

<script setup>
import MovieCard from "@/components/Movie/MovieCard.vue";
import MovieContainer from "@/components/Movie/MovieContainer.vue";
import PageSelect from "@/components/Pagination/PageSelect.vue";

import { api } from "@/api";
import { computed, reactive, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const page = computed(() => route.query.p || 1);

const reqUrl = computed(() => {
  const genre = route.params.genreId;

  return genre === "all"
    ? `/movies?page=${page.value}`
    : `/genres/${genre}/movies?page=${page.value}`;
});

const movieList = reactive([]);
const metaData = reactive({ data: null });

async function fetchData() {
  await api
    .get(reqUrl.value)
    .then((res) => {
      metaData.data = res.data.metadata;
      movieList.length = 0;
      movieList.push(...res.data.data);
    })
    .catch(() => {
      movieList.push({
        id: 0,
        title: "Loading Failed",
        genres: ["Loading Failed"],
        poster:
          "https://i.pinimg.com/originals/25/32/13/253213c58ce79335d9f5a5c9b17c3627.gif",
      });
    });
}

watch([page, reqUrl], async () => {
  await fetchData();
  window.scrollTo({ top: 0, left: 0 });
}, { immediate: true });

</script>