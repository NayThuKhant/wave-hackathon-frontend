<template>
  <div>
    <el-text class="checkout-text">Service Date & Time</el-text>
    <el-form :model="dateForm">
      <el-form-item label="Date" style="display: block">
        <el-date-picker
          v-model="dateForm.date"
          placeholder="Pick a date"
          class="datetime-input"
        />
      </el-form-item>
      <el-form-item label="Start Time" style="display: block">
        <el-time-picker
          v-model="dateForm.time"
          placeholder="Pick time slot"
          class="datetime-input"
        />
      </el-form-item>
    </el-form>
  </div>
  <div
    class="ep-bg-purple-dark"
    style="padding: 4px; background-color: #f2f2f2; margin-top: 8px"
  />
  <div style="margin: 16px 0; padding-bottom: 20px">
    <el-text class="checkout-text">Service Summary</el-text>
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <div>
        <span class="bold-text">T-shirt</span>
        <el-text style="font-size: 12px">MMK 300</el-text>
      </div>
      <span class="bold-text">10 items</span>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const dateForm = reactive({
  date: "",
  time: "",
});
</script>
<style>
.checkout-text {
  font-size: 16px;
  display: block;
  text-align: left;
  color: black;
  word-break: break-word;
  margin-bottom: 12px;
}
.datetime-input .el-input__wrapper {
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
</style>
