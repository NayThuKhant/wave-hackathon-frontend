import {orderStore} from "~/stores/orderStore";
export default function () {
    const store = orderStore()
    const config = useRuntimeConfig()
    const { $axios } = useNuxtApp()

    const activeName = ref('first')
    const users = ref([
        {
            id: 1,
            workerName: "John Doe",
            service: "Laundry Service",
            price: "10,000",
            date: "9 Oct 2023",
            image: "/images/laundry.svg",
        },
        {
            id: 2,
            workerName: "Alice Smith",
            service: "Cleaning Service",
            price: "7,500",
            date: "9 Sep 2023",
            image: "/images/cleaning.svg",
        },
        {
            id: 3,
            workerName: "Bob Johnson",
            service: "Gardening Service",
            price: "12,000",
            date: "9 Nov 2023",
            image: "/images/laundry.svg",
        },
    ])
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
        users,
        formatDate,
        handleClick,
        activeName,
        orders,
        fetOrderList,
        offers,
        determineImage
    }
}