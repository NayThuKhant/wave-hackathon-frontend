<template>
  <!-- <TopHeader></TopHeader> -->
  <div style="margin: 20px 20px 70px 20px">
    <div class="addr-container">
      <el-text size="large">Welcome, {{ user.name }}</el-text>
      <el-link size="small" type="primary" class="addr-link" :underline="false"
        >Add New Address</el-link
      >
      <SearchBar></SearchBar>
      <Carousel></Carousel>
      <Services></Services>
    </div>
  </div>
  <BaseFooter :active="'home'"></BaseFooter>
</template>

<script setup>
import { authStore } from "~/stores/authStore";
const store = authStore()

const user = store.getUserData
</script>

<style scoped lang="scss">
.home {
  margin: 50px 20px 50px 20px;
}
.addr-link {
  display: block;
  padding: 5px 0;
  list-style-type: none;
}
</style>
