import { defineStore } from 'pinia'

export const navigationStore = defineStore('navigationStore', () => {
    const active = ref('home')
    function setActive(name) {
        active.value = name
    }

    return { active, setActive }
})
