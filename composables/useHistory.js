import {orderStore} from "~/stores/orderStore";
import {authStore} from "~/stores/authStore";

export default function () {
    const store = orderStore()
    const userStore = authStore()
    const config = useRuntimeConfig()
    const { $axios } = useNuxtApp()

    const activeName = ref('first')
    const user = userStore.getUserData
    const services = ref([])
    const offers = ref([])

    const axiosHeaders = {
        headers:{
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
    }

    const handleClick = (tab, event) => {
        // console.log(tab, event)
    }

    const formatDate = (date) => {
        const options = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
        return new Date(date).toLocaleDateString("en-US", options);
    };

    const setOrderData = async (response) => {
        services.value = response.data.data.services
        offers.value = response.data.data.offers
    }

    async function fetOrderList() {
        await $axios.get(`${config.public.backendApi}/orders`, axiosHeaders)
            .then( (response) => {
                setOrderData(response)
            })
    }

    const determineImage = (id) => {
        if (id === 1) {
            return "/images/cleaning.svg"
        }
        if (id === 2) {
            return "/images/laundry.svg"
        }
    }

    return {
        user,
        formatDate,
        handleClick,
        activeName,
        services,
        fetOrderList,
        offers,
        determineImage
    }
}
