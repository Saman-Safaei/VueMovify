<template>
  <div class="pagination">
    <ul class="pagination__pages-container">
      <li
        class="page"
        v-for="page in filteredPages"
        :key="page"
        :class="{ 'active': props.metadata['current_page'] == page }"
      >
        <router-link :to="{ name: props.view, query: { p: page } }">{{ page }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps(['metadata', 'view']);

const filteredPages = computed(() => {
  const pageList = [];
  const currentPage = Number(props.metadata['current_page']);
  const pageCount = Number(props.metadata['page_count']);

  if (currentPage - 1 > 1)
    pageList.push(currentPage - 2);

  if (currentPage > 1)
    pageList.push(currentPage - 1);

  pageList.push(currentPage);

  if (currentPage < pageCount)
    pageList.push(currentPage + 1);

  if (currentPage + 1 < pageCount)
    pageList.push(currentPage + 2);

  return pageList;
})

</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables";

.pagination {
  width: fit-content;
  margin: 1rem auto;
  color: white;

  .pagination__pages-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .page {
      background: $primary-color;
      padding: 0.5rem;
      border-radius: 0.2rem;
    }

    .page.active {
      background: $secondary-color;
    }
  }
}
</style>
