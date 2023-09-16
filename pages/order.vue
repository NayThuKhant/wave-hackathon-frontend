<template>
  <TopHeader :to="'home'" :header="'Order'"></TopHeader>
  <div class="laundry-container">
    <!-- use this if the user has not chosen any item -->
    <ChooseItems
      @setCheckoutReady="readyCheckoutToggle"
      v-if="!isReadyCheckout"
    ></ChooseItems>
    <!-- use this when the user has chosen items, go to choose date an time -->
    <Checkout v-else></Checkout>
  </div>
</template>
<script setup>
const route = useRoute()
const isReadyCheckout = ref(false)

const readyCheckoutToggle = () => {
  isReadyCheckout.value = !isReadyCheckout.value
}
</script>
<style lang="scss">
.laundry-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 60px 20px 0px 20px;
}
</style>
