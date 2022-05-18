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
    <div v-if="!isAnyData" class="no-movies">
      <h3 class="no-movies__title">I can't find any movie :(</h3>
    </div>
    <PageSelect view="movies" :metadata="metaData.data" v-if="metaData.data && isAnyData" />
  </div>
</template>

<script setup>
import MovieCard from "@/components/Movie/MovieCard.vue";
import MovieContainer from "@/components/Movie/MovieContainer.vue";
import PageSelect from "@/components/Pagination/PageSelect.vue";

import { api } from "@/api";
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const page = computed(() => route.query.p || 1);
const search = computed(() => route.query.search);
const genre = route.params.genreId;

const isAnyData = ref(true);

const reqUrl = computed(() => {

  if (genre === "search") 
    return `/movies?q=${search.value}&page=${page.value}`;
  
  if (genre === "all")
    return `/movies?page=${page.value}`;

  return `/genres/${genre}/movies?page=${page.value}`;
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

    if (movieList.length === 0) isAnyData.value = false;
    else isAnyData.value = true;
}

watch([page, reqUrl], async () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  await fetchData();
}, { immediate: true });

onMounted(() => {
  document.title = "Vue Movify - Movies with genre ID " + genre;
})
</script>

<style lang="scss" scoped>
.no-movies {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20vh;

  .no-movies__title {
    font-size: 1.5rem;
    font-weight: normal;
  }

}
</style>
