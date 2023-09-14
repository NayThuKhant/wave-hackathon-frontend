import {orderStore} from "~/stores/orderStore";
import {authStore} from "~/stores/authStore";

export default function () {
    const store = orderStore()
    const userStore = authStore()
    const config = useRuntimeConfig()
    const { $axios } = useNuxtApp()

    const activeName = ref('first')
    const user = userStore.getUserData
    const orders = store.getOrders
    const offers = store.getOffers
    const handleClick = (tab, event) => {
        console.log(tab, event)
    }

    const formatDate = (date) => {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(date).toLocaleDateString("en-US", options);
    };

    const setOrderData = async (response) => {
        await store.setOrders(response.data.data)
    }

    const fetOrderList = async () => {
        await $axios.get(`${config.public.backendApi}/orders`)
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
        orders,
        fetOrderList,
        offers,
        determineImage
    }
}