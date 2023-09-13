<template>
  <div v-loading.fullscreen.lock="loading"
  element-loading-text="Authenticating...">

  </div>
</template>

<script setup>
import useLogin from "~/composables/useLogin"

const { login, loading } = useLogin()

onBeforeMount(() => {
  login()
})
</script>
