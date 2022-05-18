import { defineStore } from 'pinia'

export default defineStore('main', {
    state() {
        return {
          pageLoading: false
        };
    },
    actions: {
      loadingStart() {
        this.pageLoading = true;
      },
      loadingFinished() {
        this.pageLoading = false;
      }
    },
    getters: {
      isPageLoading() {
        return this.pageLoading;
      }
    }
});
