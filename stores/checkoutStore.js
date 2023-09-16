import {defineStore} from "pinia";

export const checkoutStore = defineStore({
    id: 'checkoutStore',

    state: () => {
        return {
            services: [],
            totalAmount: 0
        }
    },

    getters: {
        getServices: (state) => state.services,
        getTotalAmount: (state) => state.totalAmount
    },

    actions: {
        setServices(services) {
            this.services = services
        },
        setTotalAmount(amount) {
            this.totalAmount = amount
        }
    }
})
