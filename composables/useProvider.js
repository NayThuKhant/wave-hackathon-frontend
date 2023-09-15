export default function () {
    const providers = ref([]);

    const config = useRuntimeConfig()
    const {$axios} = useNuxtApp();
    const axiosHeaders = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
    };

    const fetchProviders = async () => {
        $axios
            .get(`${config.public.backendApi}/employees`, axiosHeaders)
            .then((response) => {
                providers.value = response.data.data
            })
    };

    return {
        providers,
        fetchProviders
    }
}
