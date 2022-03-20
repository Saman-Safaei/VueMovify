<template>
  <TopHeader />
  <div class="movie-container">
    <movie-card img-url="http://moviesapi.ir/images/tt0111161_poster.jpg"></movie-card>
    <movie-card img-url="http://moviesapi.ir/images/tt0111161_poster.jpg"></movie-card>
    <movie-card img-url="http://moviesapi.ir/images/tt0111161_poster.jpg"></movie-card>
    <movie-card img-url="http://moviesapi.ir/images/tt0111161_poster.jpg"></movie-card>
    <movie-card img-url="http://moviesapi.ir/images/tt0111161_poster.jpg"></movie-card>
    <movie-card img-url="http://moviesapi.ir/images/tt0111161_poster.jpg"></movie-card>
    <movie-card img-url="http://moviesapi.ir/images/tt0111161_poster.jpg"></movie-card>
  </div>
</template>

<script setup>
import TopHeader from "@/components/Header/TopHeader.vue";
import MovieCard from "@/components/Movie/MovieCard.vue";
</script>

<style lang="scss" scoped>

.movie-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: 31% 31% 31%;
  padding: 1rem;
  justify-content: space-between;
}

</style>