import { defineStore } from 'pinia'
import nuxtStorage from 'nuxt-storage'

export const authStore = defineStore({
    id: 'authStore',
    state: () => ({
        token: nuxtStorage.localStorage.getData('userToken') ?? null,
        userData: nuxtStorage.localStorage.getData('userData') ?? null
    }),

    getters: {
        getToken(state) {
            return state.token
        },
        getUserData(state) {
            return state.userData ? JSON.parse(state.userData) : null
        }
    },

    actions: {
        async setToken(token) {
            this.token = token
            nuxtStorage.localStorage.setData('userToken', token)
        },
        async setUserData(userData) {
            this.userData = JSON.stringify(userData)
            nuxtStorage.localStorage.setData('userData', JSON.stringify(userData))
        }
    }
})