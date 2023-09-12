<template>
  <!-- <TopHeader></TopHeader> -->
  <div style="margin: 20px 20px 70px 20px">
    <div class="addr-container">
      <el-text size="large">Welcome, {{ user.name }}</el-text>
      <el-link size="small" type="primary" class="addr-link" :underline="false"
        >Add New Address</el-link
      >
      <SearchBar></SearchBar>
      <Carousel></Carousel>
      <Services></Services>
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
      <el-radio-group v-model="radio" class="radio-card">
        <el-radio label="1" size="large" class="radio-lable" border
          ><el-text>No (24), 40th Street, Botahtaung, Yangon</el-text>
          <el-icon><EditPen /></el-icon
        ></el-radio>
        <el-radio label="2" size="large" class="radio-lable" border
          ><el-text style="word-wrap: break-word"
            >No (24), 49 Street, Botahtaung Township, Yangon</el-text
          ><el-icon><EditPen /></el-icon
        ></el-radio>
      </el-radio-group>
      <el-button
        type="primary"
        style="width: 100%; padding: 8px 12px; border-radius: 8px"
        >Add New Address</el-button
      >
    </el-drawer>
  </div>
  <BaseFooter :active="'home'"></BaseFooter>
</template>

<script setup>
import { authStore } from "~/stores/authStore";
const store = authStore();

const user = store.getUserData;
</script>

<style scoped lang="scss">
.home {
  margin: 50px 20px 50px 20px;
}
.addr-link {
  display: block;
  padding: 5px 0;
  list-style-type: none;
}
.bottom-sheet {
  max-width: 440px;
  margin: auto;
  display: flex;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px 20px;
  height: auto !important;
}
.radio-lable {
  margin-bottom: 15px;
}
.radio-lable .el-text {
  line-height: 20px;
  word-break: break-word;
}
.thick-line {
  border-top: 4px solid #787878;
  border-top-width: 4px;
  border-top-style: solid;
  width: 100px;
  margin: auto;
  margin-bottom: 20px;
}
.radio-card {
  display: flex-start;
  flex-direction: column;
  margin-bottom: 10px;
}
.el-radio {
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

.el-radio__label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.el-icon {
  margin-left: 10px; /* Add spacing between text and icon */
}
</style>
