export default function () {
  const config = useRuntimeConfig();
  const { $axios } = useNuxtApp();
  const axiosHeaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  };
  const drawer = ref(false);
  const address = ref("Select your address");
  const radio = ref([
    {
      value: "Option1",
      label: "Use Current Location",
    },
    {
      value: "Option2",
      label: "No (24), 40th Street, Botahtaung, Yangon",
    },
    {
      value: "Option3",
      label: "No (24), 49 Street, Botahtaung Township, Yangon",
    },
  ]);
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
  return {
    toggleDrawer,
    drawer,
    townships,
    cities,
    form,
    radio,
    address,
    selectedRadio,
    dateForm,
    disableDates,
    fetchItemList,
    items,
  };
}
