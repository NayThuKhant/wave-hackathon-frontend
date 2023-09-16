<template>
  <div class="laundry-content">
    <div>
      <el-text class="laundry-text"
        >Select item types that you want to include in the service</el-text
      >
      <el-text class="note-text"
        >Note:Cost for this service is charged per item</el-text
      >
      <div v-for="item in items" :key="item.id">
        <LaundryCard @updateTotal="calculateTotal" :data="item"></LaundryCard>
      </div>
    </div>
  </div>
  <div class="total-foo">
    <div class="text-flex">
      <el-text class="total-text">Total</el-text>
      <el-text class="total-text">MMK {{ totalAmount }}</el-text>
    </div>
    <el-button
      type="primary"
      :disabled="!totalAmount"
      @click="toogleCheckout"
      style="
        width: 100%;
        padding: 8px 12px;
        border-radius: 8px;
        background-color: #153051;
      "
      >Check Out
    </el-button>
  </div>
</template>
<script setup>
import LaundryCard from "~/components/LaundryCard.vue";
import useCheckout from "~/composables/useCheckout";
import {checkoutStore} from "~/stores/checkoutStore"

const emits = defineEmits(['setCheckoutReady'])
const store = checkoutStore()
const { fetchItemList, items } = useCheckout();
const order = ref([])
const totalAmount = ref(0)
const replaceObjectById = (newObject) => {
  let currentData = order.value.find(obj => obj.service_id === newObject.service_id)
  if(currentData !== undefined) {
    order.value = order.value.filter(obj => obj.service_id !== currentData.service_id)
  }
  order.value.push(newObject)
  order.value = order.value.filter(obj => obj.quantity > 0)

  totalAmount.value = order.value.reduce((acc, obj) => acc + (obj.price * obj.quantity), 0);
}
const calculateTotal = (item) => {
  replaceObjectById({
    service_id: item.item.id,
    quantity: item.quantity,
    price: item.item.price,
    service_name: item.item.name
  })
}

const toogleCheckout = () => {
  store.setServices(order.value)
  store.setTotalAmount(totalAmount.value)
  emits('setCheckoutReady')
}

onMounted(async () => {
  await fetchItemList();
});
</script>
<style>
.laundry-content {
  flex: 1;
}
.laundry-text {
  font-size: 16px;
  display: block;
  text-align: left;
  color: black;
  word-break: break-word;
}
.note-text {
  font-size: 14px;
  color: #f44;
  margin: 10px 0;
}
.total-foo {
  padding: 16px;
  background: #fff;
  box-shadow: 0px -4px 20px 0px #0000001a;
  padding: 20px;
  text-align: center;
  position: sticky;
  bottom: 0;
}
.text-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.total-text {
  font-size: 16px;
  color: #212121;
  font-weight: 500;
}
</style>
