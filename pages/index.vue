<template>
  <div v-loading.fullscreen.lock="loading">

  </div>
</template>

<script setup>
import {useAsyncData} from "#app";
import { authStore } from "~/stores/authStore";

const store = authStore()
const loading = ref(true)
const dummyData = {
  msisdn: '09799378561',
  name: 'Ko Pai Lay',
  dob: '1998-04-07',
  nrc: '12/KhaYaNa(N)123456',
  gender: 'Male',
  kyc_status: 'LEVEL_2'
}

const storeResponseData = (context) => {
  console.log(context.response._data)
  store.setToken(context.response._data.token)
}
const login = async () => {
  const { data: loginResponse } = await useAsyncData('login',() => {
    $fetch(`http://whbackend.local/api/auth/login`, {
      method: 'POST',
      body: dummyData,
      onResponse(context) {
        storeResponseData(context)
      }
    })
  })
}
onMounted(() => {
  login()
})
</script>
