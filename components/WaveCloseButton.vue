<template>
  <el-image @click="shutDown" style="margin-left: 10px" src="/images/exit.svg"></el-image>
</template>

<script setup>
import useWaveMoneySDK from "~/composables/useWaveMoneySDK"
const shutDown = async () => {
  await useWaveMoneySDK().shutDownAppFromWave()
}
</script>
