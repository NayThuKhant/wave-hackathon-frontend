import {authStore} from "~/stores/authStore";
import useLogin from "~/composables/useLogin";
export default function () {
    const store = authStore();
    const config = useRuntimeConfig()
    const { $axios } = useNuxtApp();
    const { fetchMe } = useLogin();

    const userProfile = store.getUserData
    const startWorking = () => {
        $axios.post(`${config.public.backendApi}/start-working`)
            .then( (response) => {
                fetchMe()
            })
    }

    return { userProfile, startWorking }
}