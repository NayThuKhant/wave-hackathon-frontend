import { authStore } from "~/stores/authStore";
import {useRoute} from "#app";

export default function () {
    const {$axios} = useNuxtApp()

    const getMobileNumber = ( ) => {
        // TODO get misisdn from wave sdk
        return useRoute().query.mobile_number ?? "09784489866"
    }

    const config = useRuntimeConfig()
    const store = authStore()
    const loading = ref(true)
    const dummyData = {
        msisdn: getMobileNumber() ,
        name: 'Ko Pai Lay',
        dob: '1998-04-07',
        nrc: '12/KhaYaNa(N)123456',
        gender: 'Male',
        kyc_status: 'LEVEL_2'
    }


    const storeResponseData = (res) => {
        store.setToken(res.data.token)
        store.setUserData(res.data.user)

        navigateTo('home')
    }
    const login = async () => {
        $axios.post(`${config.public.backendApi}/auth/login`, dummyData)
            .then( (res) => {
                storeResponseData(res)
            })
    }

    const fetchMe = async () => {
        $axios.get(`${config.public.backendApi}/me`)
            .then( (res) => {
                store.setUserData(res.data.data)
            })
    }


    return {
        login,
        loading,
        fetchMe
    }
}
