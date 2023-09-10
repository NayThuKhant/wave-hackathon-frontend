import { defineStore } from 'pinia'

export const authStore = defineStore({
    id: 'authStore',
    state: () => ({
        token: null,
        userData: null
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
            localStorage.setItem('userToken', token)
        },
        async setUserData(userData) {
            this.userData = userData
            localStorage.setItem('userData', JSON.stringify(userData))
        }
    }
})