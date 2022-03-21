<template>
  <TopHeader />
  <MovieContainer>
    <movie-card v-for="movie in movieList" :key="movie['id']" :title="movie['title']" :img-url="movie['poster']" :genres="movie['genres']"></movie-card>
  </MovieContainer>
</template>

<script setup>
import TopHeader from "@/components/Header/TopHeader.vue";
import MovieCard from "@/components/Movie/MovieCard.vue";
import MovieContainer from "@/components/Movie/MovieContainer.vue";

import { api } from "@/api";
import { reactive } from "vue";


const movieList = reactive([]);

api.get('https://moviesapi.ir/api/v1/movies?page=1').then(res => {movieList.push(...res.data.data)});


</script>

<style lang="scss" scoped>

</style>