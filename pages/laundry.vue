<template>
  <TopHeader :to="'home'"></TopHeader>
  <div class="laundry-container">
    <div class="laundry-content">
      <div v-show="false">
        <el-text class="laundry-text"
          >Select item types that you want to include in the service</el-text
        >
        <LaundryCard v-for="item in 5"></LaundryCard>
      </div>
      <Checkout></Checkout>
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
  </div>
</template>
<script>
import LaundryCard from "~/components/LaundryCard.vue";
import Checkout from "~/components/Checkout.vue";
</script>
<style lang="scss">
.laundry-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 60px 20px 0px 20px;
}
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
