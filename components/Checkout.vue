<template>
  <div class="checkout-content">
    <div>
      <el-text class="checkout-text">Service Date & Time</el-text>
      <el-form :model="dateForm">
        <el-form-item label="Date" style="display: block">
          <el-date-picker
            v-model="dateForm.date"
            :editable="false"
            placeholder="Pick a date"
            class="datetime-input"
            :disabled-date="disableDates"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
        <el-form-item label="Start Time" style="display: block">
          <el-time-picker
              :editable="false"
            v-model="dateForm.time"
            placeholder="Pick time slot"
            class="datetime-input"
            :disabled-hours="disabledHours"
            value-format="HH:mm:ss"
          />
        </el-form-item>
      </el-form>
    </div>

    <p v-if="employee" style="margin-bottom: 0">Service Offered To:</p>
    <BtnCard v-if="employee" :Employee="employee" />
    <!-- <div
      class="ep-bg-purple-dark"
      style="padding: 4px; background-color: #f2f2f2; margin: 16px 0"
    /> -->
    <el-divider class="divider-one" />
    <el-text class="checkout-text">Address</el-text>
    <el-button class="addr-btn" @click="toggleDrawer"
      ><el-text>{{ address }}</el-text>
      <el-icon class="el-icon--right"><ArrowDownBold /></el-icon
    ></el-button>
    <el-divider />
    <!-- <div
      class="ep-bg-purple-dark"
      style="padding: 4px; background-color: #f2f2f2; margin: 16px 0"
    /> -->
    <div style="padding-bottom: 20px">
      <el-text class="checkout-text">Service Summary</el-text>
      <div
        v-for="service in checkoutReadyServices"
        :key="service.service_id"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
        "
      >
        <div>
          <span class="bold-text">{{ service.service_name }}</span>
          <el-text style="font-size: 12px">MMK {{ service.price }}</el-text>
        </div>
        <span class="bold-text">{{ service.quantity }} items</span>
      </div>
    </div>
  </div>
  <div class="checkout-foo">
    <div class="text-flex">
      <el-text class="checkout-text">Total</el-text>
      <el-text class="checkout-text">MMK {{ totalAmount }}</el-text>
    </div>
    <el-button
      @click="startBooking"
      type="primary"
      style="
        width: 100%;
        padding: 8px 12px;
        border-radius: 8px;
        background-color: #153051;
      "
      >Start Booking
    </el-button>
  </div>
  <el-drawer
    v-model="drawer"
    direction="btt"
    class="bottom-sheet"
    :with-header="false"
  >
    <el-divider
      class="thick-line"
      content-position="center"
      :height="6"
    ></el-divider>
    <div>
      <el-text class="bottom-sheet-header">Choose address</el-text>
    </div>
    <div @click="setCurrentLocation" class="location-pin-conatiner">
      <img src="/images/map-pin.svg" alt="map-pin">
      <p>Use Current Location</p>
    </div>
    <el-radio-group v-if="addresses.length" v-model="selectedRadio" class="radio-card">
      <el-radio
        v-for="address in addresses"
        :label="address.id"
        :key="address.id"
        size="large"
        class="radio-label"
        border
      >
        <el-text>{{ address.full_address }}</el-text>
        <el-icon><EditPen /></el-icon>
      </el-radio>
    </el-radio-group>
<!--    <el-button-->
<!--      type="primary"-->
<!--      style="width: 100%; padding: 12px; border-radius: 8px; margin: 0"-->
<!--      >Add New Address-->
<!--    </el-button>-->
  </el-drawer>
</template>
<script setup lang="ts">
import { ArrowDownBold, EditPen } from "@element-plus/icons-vue";
import useCheckout from "~/composables/useCheckout";
import useWaveMoneySDK from "~/composables/useWaveMoneySDK";
import {isInteger} from "lodash-es";

const { getWaveUserLocation } = useWaveMoneySDK()
const route = useRoute()
const realAddress = ref()
const employee = ref()
const {
  toggleDrawer,
  drawer,
  address,
  selectedRadio,
  dateForm,
  disableDates,
  checkoutReadyServices,
  totalAmount,
  addresses,
  fetchAddressList,
  checkout,
  getEmployee
} = useCheckout();

const startBooking = async () => {
  let data = {
    started_at: dateForm.value.date + ' ' + dateForm.value.time,
    category_id: route.query.category,
    address_id: null,
    address: null,
    services: checkoutReadyServices,
    employee_id: null
  }

  if (isInteger(realAddress.value)) {
    data.address_id= realAddress.value
  } else {
    data.address = realAddress.value
  }

  if(employee.value) {
    data.employee_id = employee.value.id
  }
  await checkout(data)
}

const setCurrentLocation = async () => {
  let add = await getWaveUserLocation()
  address.value = "Dulwich, Pun Hlaing Estate Avenue"
  realAddress.value = add
  toggleDrawer()
}

watch(selectedRadio, (newValue) => {
  const selectedRadioItem = addresses.value.find((item) => item.id === newValue);
  if (selectedRadioItem) {
    address.value = selectedRadioItem.full_address;
    realAddress.value = selectedRadioItem.id
  }
  toggleDrawer();
});
const makeRange = (start: number, end: number) => {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
const disabledHours = () => {
  return makeRange(0, 8).concat(makeRange(19, 23));
};

onMounted(async () => {
  await fetchAddressList()
  if(route.query.employee_id) {
    employee.value = await getEmployee(route.query.employee_id)
  }
});
</script>
<style lang="scss">
.checkout-content {
  flex: 1;
}
.checkout-text {
  font-size: 16px;
  display: block;
  text-align: left;
  color: black;
  word-break: break-word;
  margin-bottom: 12px;
}
.datetime-input .el-input__wrapper,
.addr-btn {
  padding: 20px 12px;
  border-radius: 8px;
}
.datetime-input {
  width: 100% !important;
}
.bold-text {
  font-weight: 500;
  font-size: 14px;
  display: block;
}
.note-text {
  font-size: 14px;
  color: #f44;
  margin: 10px 0;
}
.checkout-foo {
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
.checkout-text {
  font-size: 16px;
  color: #212121;
  font-weight: 500;
}
.addr-btn {
  width: 100%;
  border: none;
}
.addr-btn > span {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.addr-btn:hover,
.addr-btn:focus {
  border-color: transparent !important;
  background-color: transparent !important;
  outline: 0;
}

.divider-one {
  margin-top: 34px;
}
.bottom-sheet-header {
  font-size: 16px;
  margin-bottom: 10px;
  display: block;
  font-weight: 600;
  text-align: center;
  color: #212121;
  font-style: normal;
  line-height: 150%; /* 24px */
}
.bottom-sheet {
  max-width: 440px;
  margin: auto;
  display: flex;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 8px 16px 16px;
  height: auto !important;
}
.bottom-sheet .el-drawer__body {
  padding: 0 10px 10px;
}
.radio-label {
  margin-bottom: 15px;
}
.radio-label .el-text {
  line-height: 20px;
  word-break: break-word;
  font-size: 14px;
}
.thick-line {
  border-top: 4px solid #787878;
  width: 100px;
  margin: 0 auto 10px;
}
.location-pin-conatiner {
  display: flex;
  padding: 12px 16px;
  border-radius: 8px;
  border: 0.5px solid #CCC;
  margin-bottom: 9px;

  p {
    margin: 0 5px;
  }
}
.radio-card {
  display: flex-start;
  flex-direction: column;
  margin-bottom: 10px;
}
.radio-card .el-radio {
  margin: 0 0 10px 0;
  width: 100%;
  white-space: normal;
}
.el-radio.is-bordered.el-radio--large {
  padding: 30px 10px !important;
}
.radio-text {
  white-space: normal; /* Allow text to wrap to the next line */
  word-wrap: break-word;
  width: 100%;
  overflow: hidden; /* Hide any overflowing content */
  text-overflow: ellipsis; /* Show an ellipsis (...) for text that overflows */
}
.radio-label .el-radio__label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  margin-left: 16px;
}
.radio-label .el-icon {
  margin-left: 16px; /* Add spacing between text and icon */
  font-size: 24px;
  color: #3188e1;
}
</style>
