<template>
  <div class="laundry-content">
    <div>
      <el-text class="laundry-text"
        >Select item types that you want to include in the service</el-text
      >
      <el-text class="note-text"
        >Note:Cost for this service is charged per item</el-text
      >
      <LaundryCard v-for="item in 5"></LaundryCard>
    </div>
  </div>
  <div class="total-foo">
    <div class="text-flex">
      <el-text class="total-text">Total</el-text>
      <el-text class="total-text">MMK 0</el-text>
    </div>
    <el-button
      type="primary"
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
