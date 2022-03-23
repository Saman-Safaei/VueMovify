<template>
  <transition name="fade">
    <div class="backdrop" @click="emit('closeClick')" v-show="props.show"></div>
  </transition>
  <transition name="drawer">
    <div class="drawer" v-show="props.show">
      <img class="drawer__logo" src="@/assets/logo.png" alt="logo" />
      <hr class="drawer__hr" />
      <router-link
        v-for="navLink in navigationLinks"
        :key="navLink.title"
        :to="navLink.addr"
        class="drawer__link"
        @click="emit('closeClick')"
        exact-active-class="drawer__link--active"
      >{{ navLink.title }}</router-link>

      <button class="drawer__close" @click="emit('closeClick')">&#10094;</button>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import navigationLinks from '@/components/Navigation/navigation_links';

const emit = defineEmits(["closeClick"]);
const props = defineProps(["show"]);

</script>

<style lang="scss" scoped>
@import '@/assets/styles/base/variables';

.backdrop {
  position: fixed;
  background: black;
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: $drawer-backdrop-z;
}

.drawer {
  position: fixed;
  background: white;
  padding: 1rem;
  top: 0;
  bottom: 0;
  left: 0;
  min-width: 70%;
  z-index: $drawer-z;

  .drawer__logo {
    width: 50%;
    max-width: 120px;
    display: block;
    margin: 0 auto;
  }

  .drawer__hr {
    display: block;
    width: 90%;
    margin: 1rem auto;
  }

  .drawer__link {
    display: block;
    padding: 0.5rem 1rem;
    margin: 0.1rem 0;
    border-radius: 0.5rem;
    transition: all 300ms;

    &:hover {
      background: lightgray;
    }
  }
  .drawer__link--active {
    color: $secondary-variant-color;
  }
  .drawer__close {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.5rem;
    font-size: 1.2rem;
  }
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active,
.drawer-enter-active,
.drawer-leave-active {
  transition: all 400ms ease-in-out;
}
</style>