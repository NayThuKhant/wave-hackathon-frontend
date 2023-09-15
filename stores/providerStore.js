import { defineStore } from "pinia";

export const providerStore = defineStore({
  id: "providerStore",

  state: () => {
    return {
      providers: [],
    };
  },

  getters: {
    getProviders: (state) => state.providers,
  },

  actions: {
    async setProviders(providers) {
      this.providers = providers;
    },
  },
});
