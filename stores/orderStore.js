import {defineStore} from "pinia";

export const orderStore = defineStore({
    id: 'orderStore',

    state: () => {
        return {
            orders: null,
            offers: null
        }
    },

    getters: {
        getOrders: (state) => state.orders,
        getOffers: (state) => state.offers
    },

    actions: {
        setOrders(orders) {
            this.orders = orders.orders
            this.offers = orders.offers
        }
    }
})
