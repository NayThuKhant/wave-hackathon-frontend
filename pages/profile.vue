<template>
  <div class="profile-container">
    <div style="display: flex">
      <p class="profile-header">Profile</p>
      <WaveCloseButton />
    </div>
    <div class="profile-card" style="display: flex; align-items: center">
      <el-avatar class="card-user">
        <ElIconUser />
      </el-avatar>
      <div style="margin-left: 20px">
        <span
          style="
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
            font-weight: 600;
          "
          >{{ userProfile.name }}</span
        >
        <el-text style="font-size: 12px">{{
          userProfile.mobile_number
        }}</el-text>
      </div>
    </div>

    <!-- User Information -->
    <div class="profile-card">
      <el-text
        style="
          font-size: 16px;
          margin-bottom: 10px;
          display: block;
          font-weight: 600;
          text-align: left;
          color: black;
        "
        >Settings
      </el-text>

      <div class="setting" @click="startWorking">
        <el-text class="des-title">
          <el-icon class="setting-icon">
            <el-image src="/images/briefcase.svg" />
          </el-icon>
          Employee Profile
        </el-text>
        <el-tag
          v-if="isActive"
          :type="'success'"
          class="mx-1"
          effect="dark"
          round
        >
          ACTIVATED
        </el-tag>
        <el-link
          v-else
          :underline="false"
          style="
            font-size: 14px;
            font-weight: 500;
            text-align: right;
            color: #3188e1;
          "
        >
          JOIN
        </el-link>
      </div>
      <div class="setting">
        <el-text class="des-title">
          <el-icon class="setting-icon">
            <el-image src="/images/terms.svg" />
          </el-icon>
          Terms & Conditions
        </el-text>
        <el-icon>
          <arrow-right-bold />
        </el-icon>
      </div>
      <div class="setting">
        <el-text class="des-title">
          <el-icon class="setting-icon">
            <el-image src="/images/faqs.svg" />
          </el-icon>
          FAQs
        </el-text>
        <el-icon>
          <arrow-right-bold />
        </el-icon>
      </div>
      <div class="setting">
        <el-text class="des-title" style="flex: 1">
          <el-icon class="setting-icon">
            <el-image src="/images/globe.svg" />
          </el-icon>
          Languages
        </el-text>
        <el-link
          :underline="false"
          style="font-size: 14px; font-weight: 500; text-align: right"
          >English
        </el-link>
        <el-icon style="margin-left: 5px">
          <arrow-right-bold />
        </el-icon>
      </div>
    </div>
    <div class="device-card">
      <el-text
        style="
          font-size: 16px;
          margin-bottom: 16px;
          display: block;
          font-weight: 600;
          text-align: left;
          color: black;
        "
        >Active Device
      </el-text>
      <div
        style="display: flex; justify-content: flex-start; align-items: center"
      >
        <el-icon style="margin-right: 16px; font-size: 24px"
          ><Iphone
        /></el-icon>
        <div>
          <span
            style="
              display: block;
              font-size: 14px;
              font-weight: bold;
              color: var(--grayscale-gray-900, #212121);
            "
          >
            {{ device }}
          </span>
          <el-text style="padding-right: 5px; font-size: 10px">
            Yangon, Myanmar
          </el-text>
        </div>
      </div>
    </div>
  </div>
  <BaseFooter :active="'profile'"></BaseFooter>
</template>

<script setup>
import useProfile from "~/composables/useProfile";
import { ArrowRightBold, Iphone } from "@element-plus/icons-vue";
import useWaveMoneySDK from "~/composables/useWaveMoneySDK";

const { userProfile, startWorking, isActive } = useProfile();
const device = ref("");

onMounted(async () => {
  const deviceFromSDK = await useWaveMoneySDK().getWaveUserDevice();
  device.value = deviceFromSDK.brand + " " + deviceFromSDK.model;
});
</script>
<style lang="scss">
.profile-container {
  margin: 0 20px 70px 20px;

  .profile-header {
    font-size: 24px;
    flex: 1;
  }
}

.device-card {
  border-radius: 8px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
}

.profile-card {
  border-radius: 8px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
}

.cell-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
}

.setting-icon {
  margin-right: 8px;
  font-size: 18px;
}

.des-title {
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: black;
  display: flex;
}
</style>
