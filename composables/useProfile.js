import {authStore} from "~/stores/authStore";
export default function () {
    const store = authStore();
    const config = useRuntimeConfig()
    const { $axios } = useNuxtApp();

    const userProfile = store.getUserData
    const isActive = ref(userProfile.employee ? true : false)
    
    const fetchMe = async () => {
        $axios.get(`${config.public.backendApi}/me`)
            .then( (res) => {
                store.setUserData(res.data.data)
                isActive.value = true
            })
    }
    const startWorking = () => {
        $axios.post(`${config.public.backendApi}/start-working`)
            .then( (response) => {
                fetchMe()
            })
    }

    return { userProfile, startWorking, isActive }
}