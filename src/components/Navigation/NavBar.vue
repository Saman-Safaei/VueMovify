<template>
  <nav class="navbar" :class="navbarBackground">
    <div class="navbar__mobile">
      <button class="navbar__toggler" @click="toggleDrawer"></button>
      <img class="navbar__brand" src="@/assets/logo.png" alt="brand-icon" />
      <p>Vue Movify</p>
      <div class="navbar__spacer"></div>
      <button class="navbar__search" @click="toggleSearch"></button>
    </div>

    <div class="navbar__desktop">
      <router-link
        v-for="navLink in navigationLinks"
        :key="navLink.title"
        :to="navLink.addr"
      >{{ navLink.title }}</router-link>

      <div class="navbar__spacer"></div>
      <button class="navbar__search" @click="toggleSearch"></button>
      <img class="navbar__brand" src="@/assets/logo.png" alt="brand-icon" />
    </div>
  </nav>

  <drawer :show="showDrawer" @close-click="toggleDrawer" />

  <transition name="fade">
    <div class="search-box" v-show="showSearch">
      <form class="search-box__form" action="/search" method="get">
        <input class="search-box__field" type="text" name="s" autocomplete="off" />
        <button class="search-box__submit" type="submit">Search</button>
      </form>
    </div>
  </transition>
</template>

<script setup>
import Drawer from "@/components/Navigation/NavigationDrawer.vue";
import { computed, onMounted, onBeforeUnmount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import navigationLinks from "@/components/Navigation/navigation_links.js";

const route = useRoute();

const addBg = ref(!route.name === "home");
const showDrawer = ref(false);
const showSearch = ref(false);
const navbarBackground = computed(() => {
  return { "navbar--bg": addBg.value };
});

function addNavBg() {
  const { scrollTop } = document.documentElement;
  addBg.value = scrollTop > 100 || route.name !== "home";
}

function toggleDrawer() {
  showDrawer.value = !showDrawer.value;
  if (showDrawer.value) {
    document.documentElement.style.overflowY = "hidden";
  } else {
    document.documentElement.style.overflowY = "unset";
  }
}

function toggleSearch() {
  showSearch.value = !showSearch.value;
}

onMounted(() => {
  // add a EventListener for Window and update addBg with scrolling Event
  window.addEventListener("scroll", addNavBg);
  watch(() => route.fullPath, () => {
    addNavBg();
    showSearch.value = false;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", addNavBg, false);
});

</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables";

.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 3.5rem;
  background: transparent;
  padding: 0.5rem 0.8rem;
  color: white;
  z-index: 20;
  transition: all 200ms;

  .navbar__mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 0.5rem;

    @media screen and (min-width: $md) {
      display: none;
    }

    .navbar__toggler {
      height: 30px;
      width: 30px;
      background: url("@/assets/images/Navbar/menu-ic.svg") center/contain
        no-repeat;
    }
  }

  .navbar__desktop {
    display: none;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 0.8rem;

    @media screen and (min-width: $md) {
      display: flex;
    }
  }

  .navbar__spacer {
    flex-grow: 1;
  }

  .navbar__brand {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .navbar__search {
    height: 30px;
    width: 30px;
    background: url("@/assets/images/Navbar/search-ic.svg") center/contain
      no-repeat;
    cursor: pointer;
  }
}
.navbar--bg {
  background: $primary-color;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 5px 2px;
}

.search-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);

  .search-box__form {
    display: flex;
    flex-direction: row;
    width: 80%;
    max-width: 500px;

    .search-box__field {
      display: block;
      flex-grow: 1;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }

    .search-box__submit {
      color: white;
      background: $secondary-variant-color;
      margin: 0 0.3rem;
      border-radius: 0.5rem;
    }
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 300ms ease;
}
</style>