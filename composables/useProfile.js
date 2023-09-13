import {authStore} from "~/stores/authStore";
export default function () {
    const store = authStore();

    const userProfile = store.getUserData;

    return { userProfile }
}