<template>
  <TopHeader :to="'/history'" :header="'Order Detail'"/>

  <div class="service-provider-detail" v-if="orderDetail?.contact">
    <p class="header">Contact Information</p>
    <p class="title">Name</p>
    <p class="data">{{ orderDetail?.contact.name }}</p>

    <p class="title">Mobile No.</p>
    <p class="data">{{ orderDetail?.contact.country_code }} {{ orderDetail?.contact.mobile_number }}</p>
  </div>
  <div style="height: 8px; background-color: #F2F2F2"/>
  <div class="service-date-time">
    <p class="header">Service Date & Time</p>
    <p class="title">Date</p>
    <p class="data">{{ formatDate(orderDetail?.started_at) }}</p>

    <p class="title">Start Time</p>
    <p class="data">{{ formatTime(orderDetail?.started_at) }}</p>

    <p class="title">Status</p>
    <p class="data">
      <el-tag :type="determineType(orderDetail?.status)">{{ orderDetail?.status }}</el-tag>
    </p>
  </div>
  <div style="height: 8px; background-color: #F2F2F2"/>
  <div class="service-address">
    <p class="header">Address</p>
    <p class="title">Address</p>
    <p class="data">{{ orderDetail?.address }}</p>
  </div>
  <div style="height: 8px; background-color: #F2F2F2"/>
  <div class="service-summary">
    <p class="header">Service Summary</p>

    <div
        class="summary-detail"
        v-for="service in orderDetail?.services"
        :key="service.id"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
        "
    >
      <div>
        <p class="service-name">{{ service.name }}</p>
        <el-text style="font-size: 12px">{{ numberFormat(service.price) }}</el-text>
      </div>
      <p class="bold-text">{{ service.pivot.quantity }} items</p>
    </div>
  </div>
  <div style="height: 8px; background-color: #F2F2F2"/>
  <div class="balance-footer-box">
    <div class="balance-button">
      <p>Total</p>
      <p>{{ numberFormat(orderDetail?.total_price) }}</p>
    </div>

    <el-button v-if="buttonText"
               @click="goToBackend"
               type="primary"
               style="
        width: 70%;
        padding: 8px 12px;
        border-radius: 8px;
        background-color: #153051;
        margin-bottom: 10px;
      "
    >{{ buttonText }}
    </el-button>
  </div>

  <el-dialog
      v-if="status === 'ORDERED'"
      v-model="visibleModel"
      :close-on-click-modal="false"
      title="Searching for service provider..."
      width="80%" center>
    <div style="text-align: center">
      <img style="width: 40%;"
           src="/images/order-searching.gif" alt="order-searching">
    </div>
  </el-dialog>
</template>

<script setup>
import useWaveMoneySDK from "~/composables/useWaveMoneySDK";
import {authStore} from "~/stores/authStore";

const route = useRoute()
const {$axios} = useNuxtApp();
const config = useRuntimeConfig();
const axiosHeaders = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  },
};
const items = [
    { type: 'success', label: 'COMPLETED' },
    { type: 'info', label: 'ACCEPTED' },
    { type: 'danger', label: 'PAID' },
    { type: 'warning', label: 'OFFERED' },
  ] 

const determineType = (status) => {
  let obj = items.find(obj => obj.label === status)
  return obj ? obj.type : 'warning'
}
const {makePayment} = useWaveMoneySDK()
const authUser = authStore().getUserData
const orderDetail = ref()
const status = ref()
const visibleModel = ref(true)

const buttonText = ref();
const formValue = ref();

const updateForms = (status) => {
  if (status === "OFFERED") {
    if (orderDetail?.value.employer_id === authUser.id) {
      buttonText.value = "";
      formValue.value = "";
    } else {
      buttonText.value = "ACCEPT OFFER";
      formValue.value = "ACCEPTED"
    }

  } else if (status === "ACCEPTED") {
    if (orderDetail?.value.employer_id === authUser.id) {
      buttonText.value = "PAY WITH WAVE";
      formValue.value = "PAID";
    } else {
      buttonText.value = "";
      formValue.value = ""
    }
  } else if (status === "PAID") {
    if (orderDetail?.value.employer_id === authUser.id) {
      buttonText.value = "FINISH ORDER";
      formValue.value = "COMPLETED";
    } else {
      buttonText.value = "";
      formValue.value = ""
    }
  }
}


const formatDate = (date) => {
  const options = {year: "numeric", month: "short", day: "numeric"};
  return new Date(date).toLocaleDateString("en-US", options);
};

const formatTime = (date) => {
  const options = {hour: "numeric", minute: "numeric"};
  return new Date(date).toLocaleDateString("Rangoon", options);
};

import {reloadNuxtApp} from "nuxt/app";

const getOrderDetail = async () => {
  $axios.get(`${config.public.backendApi}/orders/${route.params.id}`, axiosHeaders)
      .then((response) => {
        orderDetail.value = response.data.data
        status.value = orderDetail?.value.status
        updateForms(orderDetail?.value.status)


        if (status.value === "ORDERED") {
          setTimeout(() => {
            $axios.put(
                `${config.public.backendApi}/orders/${orderDetail?.value.id}/assign`, {status: formValue.value}, axiosHeaders
            ).then((res) => {
              const id = route.params.id
              reloadNuxtApp({
                path: "/orders/" + id,
                ttl: 1000, // default 10000
              });
            })
          }, 5000)

        }
      })
}
const numberFormat = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MMK",
  }).format(value);
}

const goToBackend = async () => {

  if (formValue.value === "PAID") {
    const response = await makePayment(orderDetail?.value.total_price, "9784489866")
    if (response) {
      $axios.put(
          `${config.public.backendApi}/orders/${orderDetail?.value.id}/status`, {status: formValue.value}, axiosHeaders
      ).then((res) => {
        console.log(res)
        orderDetail.value = res.data.data
        const id = route.params.id
        reloadNuxtApp({
          path: "/orders/" + id,
          ttl: 1000, // default 10000
        });
      })

    } else {
      alert("Something went wrong with wave payment")
    }
  } else {
    $axios.put(
        `${config.public.backendApi}/orders/${orderDetail?.value.id}/status`, {status: formValue.value}, axiosHeaders
    ).then((res) => {
      orderDetail.value = res.data.data

      const id = route.params.id
      reloadNuxtApp({
        path: "/orders/" + id,
        ttl: 1000, // default 10000
      });
    })
  }
}

onMounted(async () => {
  await getOrderDetail()
})

</script>

<style scoped lang="scss">

.balance-footer-box {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #000;
  text-align: center;
  max-width: 480px; /* Set the maximum width */
  margin: 0 auto; /* Center the navbar horizontally */
  padding: 10px 0;
  background: #FFF;
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.10);
}

.balance-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;

  p {
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
}

.service-summary {
  padding: 16px 20px;
  margin-bottom: 200px;

  .header {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    margin: 0;
  }

  .summary-detail {
    p {
      margin: 0;
    }
  }

  .service-name {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
}

.service-provider-detail, .service-date-time, .service-address {
  padding: 16px 20px;
  margin-top: 50px;

  .header {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    margin: 0;
  }

  .title {
    color: #787878;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 18px */
    margin-bottom: 0;
  }

  .data {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 21px */
    margin: 0;
  }
}

.service-date-time, .service-address {
  margin-top: 0;
}
</style>
