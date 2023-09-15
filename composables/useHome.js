import { authStore } from "~/stores/authStore";

export default function () {
  const store = authStore();
  const config = useRuntimeConfig();

  const user = store.getUserData;
  const drawer = ref(false);

  const toggleDrawer = () => (drawer.value = !drawer.value);

  const goToProviders = () => {
    navigateTo("service-providers");
  };

  return {
    user,
    toggleDrawer,
    drawer,
    goToProviders,
  };
}
