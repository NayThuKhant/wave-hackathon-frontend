import {authStore} from "~/stores/authStore";

export default function () {
    const {$axios} = useNuxtApp()
    const store = authStore();
    const config = useRuntimeConfig()

    const axiosHeaders = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
    }
    const userProfile = store.getUserData
    const isActive = ref(userProfile.employee ? true : false)

    const fetchMe = () => {
        $axios.get(`${config.public.backendApi}/me`, axiosHeaders)
            .then((res) => {
                store.setUserData(res.data.data)
                isActive.value = true
            })
    }
    const startWorking = async () => {
        $axios.post(`${config.public.backendApi}/start-working`, {}, axiosHeaders)
            .then((response) => {
                fetchMe()
                navigateTo('employee-profile')
            })
    }
    const subscribeCategories = (data) => {
        $axios.put(`${config.public.backendApi}/subscribe-categories`, data, axiosHeaders)
            .then((response) => {
                navigateTo('profile')
            })
    }

    return {userProfile, startWorking, isActive, subscribeCategories}
}
