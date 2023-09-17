<template>
  <TopHeader :to="'home'" :header="'Services'"></TopHeader>
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
import useWaveMoneySDK from "~/composables/useWaveMoneySDK";

const isReadyCheckout = ref(false)
const {getWaveUserWalletBalance} = useWaveMoneySDK()

const readyCheckoutToggle = async (data) => {
  const response = await getWaveUserWalletBalance()
  if(data.amount > response) {
    ElMessageBox.alert('You dont have sufficient balance in Wave Pay Account, pls try again', 'Balance check!')
    return
  }
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
