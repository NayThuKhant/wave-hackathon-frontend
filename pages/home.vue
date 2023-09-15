<template>
  <!-- <TopHeader></TopHeader> -->
  <div style="margin: 20px 20px 70px 20px">
    <div class="addr-container">
      <el-text size="small">Welcome, {{ user.name }}</el-text>
      <el-text size="large" class="addr-link balance" :underline="false" type="primary">{{ balance }} MMK</el-text>
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

      <el-container class="radio-card">
        <el-text class="address-text">No (24), 40th Street, Botahtaung, Yangon, Somewhere on the earth, someone on the
          earth
        </el-text>
        <el-icon>
          <edit-pen/>
        </el-icon>
      </el-container>

      <el-container class="radio-card">
        <el-text class="address-text">No (24), 40th Street, Botahtaung, Yangon, Somewhere on the earth, someone on the
          earth
        </el-text>
        <el-icon>
          <edit-pen/>
        </el-icon>
      </el-container>

      <el-button
          type="primary"
          style="width: 100%; padding: 8px 12px; border-radius: 8px"
      >Add New Address
      </el-button
      >
    </el-drawer>
  </div>
  <BaseFooter :active="'home'"></BaseFooter>
</template>

<script setup>
import {EditPen} from "@element-plus/icons-vue";
import useHome from "~/composables/useHome";
import useWaveMoneySDK from "~/composables/useWaveMoneySDK"

const {user, drawer } = useHome()
const balance = ref(0);

onMounted(async () =>{
  balance.value = await useWaveMoneySDK().getWaveUserWalletBalance()
});


</script>

<style lang="scss">
.home {
  margin: 50px 20px 50px 20px;
}

.balance {
  font-weight: 900;
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
}

.thick-line {
  border-top: 4px solid #787878;
  width: 100px;
  margin: 0 auto 20px;

}

.radio-card {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 12px;
  border: 0.5px solid #CCCCCC;
  border-radius: 8px;
}

.address-text {
  flex: 1;
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
