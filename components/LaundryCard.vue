<template>
  <div class="laundry-card" shadow="hover">
    <div style="display: flex; align-items: center">
      <div>
        <span class="item-name">T-shirt</span>
        <el-text style="font-size: 12px">MMK 300</el-text>
      </div>
    </div>
    <el-input-number
      v-model="num"
      :min="0"
      :max="10"
      @change="handleChange"
      class="item-count"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const num = ref(1);
const handleChange = () => {
  console.log(num);
};
</script>

<style lang="scss">
.laundry-card {
  width: 100%;
  margin: 5px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
}
.item-name {
  display: block;
  line-height: 21px;
  font-size: 14px;
}
.item-count {
  width: 100px;
  background-color: transparent;
}
.item-count .el-input-number__decrease,
.el-input-number__increase {
  background: #f0f8ff;
  color: #3188e1;
  border: #3188e1;
}
.item-count .el-input__wrapper {
  border: none;
  background-color: transparent;
}
</style>
