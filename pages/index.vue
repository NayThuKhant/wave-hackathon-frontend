<template>
  <div class="loading-container">
    <div class="loading-spinner splash-container">
       <!-- <img src="../assets/images/loading.gif" alt="loading-icon"> -->
      <img src="/images/Ah-Kuu.svg" alt="" />
      <!-- <p>AH-KUU</p> -->
    </div>
  </div>
</template>

<script setup>
import useLogin from "~/composables/useLogin";

const { login } = useLogin();

onMounted(() => {
  login();
});
</script>

<style lang="scss" scoped>
.loading-container {
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
  .splash-container {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
}
</style>
