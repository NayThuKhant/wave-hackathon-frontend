<template>
  <div class="loading-container">
    <div class="loading-spinner">
      <img src="../assets/images/loading.gif" alt="loading-icon">
      <p>AH-KUU</p>
    </div>
  </div>
</template>

<script setup>
import useLogin from "~/composables/useLogin"

const { login, loading } = useLogin()

onBeforeMount(() => {
  login()
})
</script>

<style lang="scss" scoped>
.loading-container{
  display: flex;
  padding: 0;
  max-width: 480px;
  height: 100vh;
  flex-direction: column;

  .loading-spinner {
    text-align: center;
    margin: auto;

    p {
      margin: 0;
      font-weight: bold;
      font-size: 20px;
    }
  }
}
</style>
