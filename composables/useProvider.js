export default function () {
    const providers = ref([]);
    const searchedProviders = ref([]);

    const search = ref('')

    const clearSearch = () => search.value = ''

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
                searchedProviders.value = response.data.data
            })
    };

    const setSearchedProviders = async () => {
        if (search) {
            searchedProviders.value = providers.value.filter((provider) => {
                return provider.name.toLowerCase().includes(search.value.toLowerCase())
            })
        } else {
            searchedProviders.value = providers.value
        }
    }

    return {
        providers,
        fetchProviders,
        searchedProviders,
        setSearchedProviders,
        search,
        clearSearch
    }
}
