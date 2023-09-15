<template>
  <TopHeader :to="'home'"></TopHeader>
  <div class="laundry-container">
    <!-- use this if the user has not chosen any item -->
    <ChooseItems></ChooseItems>
    <!-- use this when the user has chosen items, go to choose date an time -->
    <!-- <Checkout></Checkout> -->
  </div>
</template>
<script>
import Checkout from "~/components/Checkout.vue";
import ChooseItems from "~/components/ChooseItems.vue";
</script>
<style lang="scss">
.laundry-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 60px 20px 0px 20px;
}
</style>
