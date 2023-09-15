import { authStore } from "~/stores/authStore";

export default function () {
    const store = authStore();
    const drawer = ref(false)

    const user = store.getUserData;
    const toggleDrawer = () => drawer.value = !drawer.value

    return {
        user,
        toggleDrawer,
        drawer
    }
}
