import {authStore} from "~/stores/authStore"
import {useRoute} from "#app"
import useWaveMoneySDK from "~/composables/useWaveMoneySDK"

export default function () {
    const waveMoneySDK = useWaveMoneySDK()
    const {$axios} = useNuxtApp()

    const config = useRuntimeConfig()
    const store = authStore()
    const loading = ref(true)


    const storeResponseData = (res) => {
        store.setToken(res.data.token)
        store.setUserData(res.data.user)

        navigateTo('home')
    }
    const login = async () => {
        const userInformation = await waveMoneySDK.getWaveUserInformation()
        // REMOVE
        alert(userInformation)
        $axios.post(`${config.public.backendApi}/auth/login`, userInformation)
            .then((res) => {
                storeResponseData(res)
            })
    }

    const fetchMe = async () => {
        $axios.get(`${config.public.backendApi}/me`)
            .then((res) => {
                store.setUserData(res.data.data)
            })
    }


    return {
        login,
        loading,
        fetchMe
    }
}
