export default defineNuxtRouteMiddleware((to, from) => {
    const secretKey = "void"
    const key = localStorage.getItem("private_site_key") ?? prompt("Enter the secret key to access the private site")

    if (secretKey !== key) {
        localStorage.removeItem("private_site_key")
        alert("You dont have access to enter this private site")
        return navigateTo('/')
    } else {
        localStorage.setItem("private_site_key", key)
    }
})
