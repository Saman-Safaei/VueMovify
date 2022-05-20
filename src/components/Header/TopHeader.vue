<template>
  <header class="header">
    <div class="header__content">
      <h2 class="header__title">Vue Movify</h2>
      <p class="header__description">
        This is a simple site with a fake movie rate in cards. All ratings in the cards is fake but in the Movie Details not !</p>
      <CellContainer>
          <Cell v-for="genre in genres" :genreId="genre['id']" :key="genre">{{ genre['name'] }}</Cell>
          <Cell genreId="#" v-if="showLoading">{{ loadingMessage }}</Cell>
      </CellContainer>
    </div>
  </header>
</template>

<script setup>
import CellContainer from './GenresCellContainer.vue';
import Cell from './GenreCell.vue';
import { reactive, ref } from 'vue';
import { api } from '@/api';

const genres = reactive([]);
const showLoading = ref(true);
const loadingMessage = ref("Loading")

api({
  url: "/genres",
}).then(res => {

  res.data.forEach(genre => genres.push(genre));
  showLoading.value = false;

}).catch(() => {

  loadingMessage.value = "Loading Failed";

});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base/variables';

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  min-height: 80vh;
  background: url("@/assets/images/header-bg.jpeg") center/cover no-repeat;
  background-attachment: fixed;
  padding: 2rem 0 0 0;

  .header__content {
      padding: 2rem;
      max-width: 700px;
      margin: 0 auto;


      .header__title {
          margin: 0 0 1rem 0;
          @media screen and (min-width: $md) {
              text-align: center;
              font-size: 2.5rem;
          }
      }

      .header__description {
          line-height: 1.4rem;
          word-spacing: 0.1rem;
          font-size: 1.1rem;

          @media screen and (min-width: $md) {
              text-align: center;
          }
      }
  }
}
</style>
