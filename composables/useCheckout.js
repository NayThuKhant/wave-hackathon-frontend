import { checkoutStore } from "~/stores/checkoutStore";

export default function () {
  const store = checkoutStore()
  const config = useRuntimeConfig();
  const { $axios } = useNuxtApp();
  const axiosHeaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  };
  const checkoutReadyServices = store.getServices
  const totalAmount = store.getTotalAmount
  const drawer = ref(false);
  const address = ref('Choose Address');
  const addresses = ref()
  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };
  const selectedRadio = ref("Option1");

  const form = reactive({
    floor: "",
    street: "",
    city: "",
    township: "",
    delivery: false,
    type: [],
    resource: "",
    desc: "",
  });
  const cities = ref([
    {
      value: "Yangon",
      label: "Yangon",
    },
    {
      value: "Bago",
      label: "Bago",
    },
    {
      value: "Mandalay",
      label: "Mandalay",
    },
  ]);
  const townships = ref([
    {
      value: "Yangon",
      label: "Yangon",
    },
    {
      value: "Bago",
      label: "Bago",
    },
    {
      value: "Mandalay",
      label: "Mandalay",
    },
  ]);

  const dateForm = ref({
    date: null, // Initialize with your default date if needed
    time: null, // Initialize with your default time if needed
  });
  const disableDates = (date) => {
    const today = new Date();
    const fiveDaysAhead = new Date();
    fiveDaysAhead.setDate(today.getDate() + 5); // Calculate five days ahead

    // Disable dates that are not within the range of today to five days ahead
    return date < today.setDate(today.getDate() - 1) || date > fiveDaysAhead;
  };
  const items = ref([]);
  const setItemsData = async (response) => {
    items.value = response.data.data.services;
  };
  const fetchItemList = async () => {
    await $axios
      .get(`${config.public.backendApi}/categories/2`, axiosHeaders)
      .then((response) => {
        setItemsData(response);
      });
  };
  const fetchAddressList = async () => {
    await $axios.get(`${config.public.backendApi}/addresses`, axiosHeaders)
        .then((response) => {
          addresses.value = response.data.data
        })
  }

  const checkout = async (data) => {
    await $axios.post(`${config.public.backendApi}/orders`, data, axiosHeaders)
      .then((response) => {
        // console.log('success pr tl')
      })
  }

  return {
    toggleDrawer,
    drawer,
    townships,
    cities,
    form,
    address,
    selectedRadio,
    dateForm,
    disableDates,
    fetchItemList,
    fetchAddressList,
    items,
    checkoutReadyServices,
    totalAmount,
    addresses,
    checkout
  }
}
