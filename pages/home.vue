<template>
  <!-- <TopHeader></TopHeader> -->
  <div style="background-color: #f7f7f7">
    <div class="top-header" :style="{ height: dynamicHeight }">
      <div class="header">
        <div style="flex: 1">
          <!-- <el-image class="header-image" src="/images/ourlogo.png"></el-image> -->
          <p
              style="
              color: #fff;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin: 0;
            "
          >
            Welcome,
          </p>
          <p style="
              color: #fff;
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              margin-top: 4px;
            ">{{ userProfile.name }}</p>
        </div>
        <div>
          <el-image
              @click="goToProviders"
              src="/images/SearchProvidersIcon.svg"
          ></el-image>
          <WaveCloseButton/>
        </div>
      </div>
      <div class="wave-balance-box">
        <div class="balance-box" style="padding: 4px 0">
          <div>
            <p class="balance-title">WavePay Balance</p>
            <p class="balance-data">{{ balance }}</p>
          </div>
          <el-image src="/images/WaveMoneyLogoV2.svg"></el-image>
        </div>
        <div v-if="userProfile.employee">
          <el-divider style="margin: 0 auto"></el-divider>
          <div style="padding: 4px 0">
            <p class="balance-title">OnHold Balance</p>
            <p class="balance-data">{{ onHoldBalance }}</p>
          </div>
        </div>
      </div>
    </div>
    <div :style="{ margin: dynamicMargin }">
      <!--      <SearchBar></SearchBar>-->
      <Carousel></Carousel>
      <Services :providers="providers"></Services>
    </div>
  </div>
  <BaseFooter :active="'home'"></BaseFooter>
</template>

<script setup>
import {EditPen} from "@element-plus/icons-vue";
import useHome from "~/composables/useHome";
import useProvider from "~/composables/useProvider";
import useProfile from "~/composables/useProfile";
import useWaveMoneySDK from "~/composables/useWaveMoneySDK";


const balance = ref();
const onHoldBalance = ref(0);
const {providers, fetchProviders} = useProvider();
const {goToProviders} = useHome();
const {userProfile, fetchMe} = useProfile()


onMounted(async () => {
  const value = await useWaveMoneySDK().getWaveUserWalletBalance();
  balance.value = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MMK",
  }).format(value);

  await fetchMe();

  onHoldBalance.value = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MMK",
  }).format(userProfile.on_hold_balance);

  await fetchProviders();
});


const dynamicHeight = computed(() => {
  if (userProfile.employee) {
    return "90px";
  } else {
    return "105px";
  }
});

const dynamicMargin = computed(() => {
  if (userProfile.employee) {
    return "115px 20px 70px 20px";
  } else {
    return "50px 20px 70px 20px";
  }
});
</script>

<style lang="scss">
.home {
  margin: 50px 20px 50px 20px;
}

.balance {
  font-weight: 900;
}

.top-header {
  background-color: #153051;
  padding: 12px 16px;
}

.header {
  display: flex;
  align-items: center;
}

.wave-balance-box {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.05);
  position: absolute;
  right: 50%;
  transform: translate(50%);
  width: 85%;
  max-width: 340px;
  z-index: 1000;
  margin: 10px 0;
  padding: 12px 16px;
}

.balance-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-name {
  line-height: 150%; /* 18px */
  color: var(--grayscale-gray-50, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  margin: 5px 0;
}

.user-balance {
  color: #3188e1;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
}

.balance-title {
  color: var(--grayscale-gray-500, #787878);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 18px */
  margin: 0;
}

.balance-data {
  color: var(--Light-Blue, #3188e1);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  margin: 0;
}

.header-image {
  margin-right: 16px;
  height: 48px;
  width: auto;
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
  border: 0.5px solid #cccccc;
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
