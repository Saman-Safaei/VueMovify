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
        setTimeout(() => {
          this.pageLoading = false;
        }, 300);
      }
    },
    getters: {
      isPageLoading() {
        return this.pageLoading;
      }
    }
});
