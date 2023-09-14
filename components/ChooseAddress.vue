<template>
  <el-drawer
    v-model="isActive"
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
    <el-radio-group v-model="radio" class="radio-card">
      <el-radio label="1" size="large" class="radio-label" border
        ><el-text>No (24), 40th Street, Botahtaung, Yangon</el-text>
        <el-icon><EditPen /></el-icon
      ></el-radio>
      <el-radio label="2" size="large" class="radio-label" border
        ><el-text>No (24), 49 Street, Botahtaung Township, Yangon</el-text
        ><el-icon><EditPen /></el-icon
      ></el-radio>
    </el-radio-group>
    <el-button
      type="primary"
      style="width: 100%; padding: 8px 12px; border-radius: 8px; margin: 0"
      @click="goToAddress"
      >Add New Address
    </el-button>
  </el-drawer>
</template>
<script setup>
import { EditPen } from "@element-plus/icons-vue";
// do not use same name with ref
import useCheckout from "~/composables/useCheckout";

const props = defineProps(['active'])
const isActive = props.active
const goToAddress = () => {};
</script>
<style>
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
