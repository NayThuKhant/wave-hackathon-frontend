import {authStore} from "~/stores/authStore"
import useWaveMoneySDK from "~/composables/useWaveMoneySDK"

export default function () {
    const waveMoneySDK = useWaveMoneySDK()
    const {$axios} = useNuxtApp()


    const route = useRoute()
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

        // TODO bypass the sdk on development
        const msisdn = route.query.msisdn
        if (msisdn) userInformation.msisdn = msisdn
        console.log(userInformation)

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
