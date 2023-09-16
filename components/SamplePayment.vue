<template>
  <button @click="makeSamplePayment">Make Sample Payment</button>
</template>

<script setup>
import useWaveMoneySDK from "~/composables/useWaveMoneySDK"
const makeSamplePayment = async () => {
    const response = await useWaveMoneySDK().makePayment()
    alert(JSON.stringify(response))
}

</script>
