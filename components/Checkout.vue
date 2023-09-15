<template>
  <div class="checkout-content">
    <div>
      <el-text class="checkout-text">Service Date & Time</el-text>
      <el-form :model="dateForm">
        <el-form-item label="Date" style="display: block">
          <el-date-picker
            v-model="dateForm.date"
            placeholder="Pick a date"
            class="datetime-input"
            :disabled-date="disableDates"
          />
        </el-form-item>
        <el-form-item label="Start Time" style="display: block">
          <el-time-picker
            v-model="dateForm.time"
            placeholder="Pick time slot"
            class="datetime-input"
            :disabled-hours="disabledHours"
          />
        </el-form-item>
      </el-form>
    </div>
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
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <div>
          <span class="bold-text">T-shirt</span>
          <el-text style="font-size: 12px">MMK 300</el-text>
        </div>
        <span class="bold-text">10 items</span>
      </div>
    </div>
  </div>
  <div class="checkout-foo">
    <div class="text-flex">
      <el-text class="checkout-text">Total</el-text>
      <el-text class="checkout-text">MMK 0</el-text>
    </div>
    <el-button
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
    <el-radio-group v-model="selectedRadio" class="radio-card">
      <el-radio
        v-for="item in radio"
        :label="item.value"
        size="large"
        class="radio-label"
        border
      >
        <el-text>{{ item.label }}</el-text>
        <el-icon><EditPen /></el-icon>
      </el-radio>
    </el-radio-group>
    <el-button
      type="primary"
      style="width: 100%; padding: 12px; border-radius: 8px; margin: 0"
      >Add New Address
    </el-button>
  </el-drawer>
</template>
<script setup lang="ts">
import { ArrowDownBold, EditPen } from "@element-plus/icons-vue";
import useCheckout from "~/composables/useCheckout";

const {
  toggleDrawer,
  drawer,
  radio,
  address,
  selectedRadio,
  dateForm,
  disableDates,
} = useCheckout();

watch(selectedRadio, (newValue) => {
  const selectedRadioItem = radio.value.find((item) => item.value === newValue);
  if (selectedRadioItem) {
    address.value = selectedRadioItem.label;
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
</script>
<style>
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
  color: black;
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
