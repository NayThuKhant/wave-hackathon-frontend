<template>
  <!-- <TopHeader></TopHeader> -->
  <div style="margin: 20px 20px 70px 20px">
    <div class="addr-container">
      <el-text size="small">Appoint to</el-text>
      <el-link type="primary" class="addr-link" :underline="false"
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
import Carousel from "~/components/Carousel.vue";
import SearchBar from "~/components/SearchBar.vue";
import Services from "~/components/Services.vue";
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
