import { defineStore } from 'pinia'

export const authStore = defineStore({
    id: 'authStore',
    state: () => {
        return {
            token: localStorage.getItem('userToken'),
            userData: localStorage.getItem('userData')
        }
    },

    getters: {
        getToken: (state) => state.token,
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
            this.userData = JSON.stringify(userData)
            localStorage.setItem('userData', JSON.stringify(userData))
        }
    }
})
