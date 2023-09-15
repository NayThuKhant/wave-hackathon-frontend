import { authStore } from "~/stores/authStore";
import { providerStore } from "~/stores/providerStore";

export default function () {
  const store = authStore();
  const empStore = providerStore();
  const config = useRuntimeConfig();

  const user = store.getUserData;
  const providers = empStore.getProviders;
  const drawer = ref(false);

  const { $axios } = useNuxtApp();
  const axiosHeaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  };
  const toggleDrawer = () => (drawer.value = !drawer.value);

  const setProvidersData = async (response) => {
    empStore.setProviders(response.data.data);
  };

  const fetchProvidersList = async () => {
    await $axios
      .get(`${config.public.backendApi}/employees`, axiosHeaders)
      .then((response) => {
        setProvidersData(response);
      });
  };
  const goToProviders = () => {
    navigateTo("service-providers");
  };
  return {
    user,
    toggleDrawer,
    drawer,
    providers,
    fetchProvidersList,
    goToProviders,
  };
}
