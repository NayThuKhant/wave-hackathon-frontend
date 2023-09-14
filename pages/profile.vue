<template>
  <div class="profile-container">
    <p class="profile-header">Profile</p>
    <div class="profile-card" style="display: flex; align-items: center">
      <el-avatar class="card-user"><ElIconUser /></el-avatar>
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
        <el-text style="font-size: 12px">{{ userProfile.mobile_number }}</el-text>
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
        >Settings</el-text
      >
      <div class="setting">
        <el-text class="des-title"
          ><el-icon class="setting-icon"
            ><el-image src="/images/briefcase.svg" /></el-icon
          >Employee Profile</el-text
        >
        <el-tag v-if="isActive" :type="'success'" class="mx-1" effect="dark" round>
          ACTIVATED
        </el-tag>
        <el-link v-else :underline="false" style="
            font-size: 14px;
            font-weight: 500;
            text-align: right;
            color: #3188e1;
          " @click="startWorking">
          JOIN
        </el-link
        >
      </div>
      <div class="setting">
        <el-text class="des-title"
          ><el-icon class="setting-icon"
            ><el-image src="/images/terms.svg" /></el-icon
          >Terms & Conditions</el-text
        >
        <el-icon><arrow-right-bold /></el-icon>
      </div>
      <div class="setting">
        <el-text class="des-title"
          ><el-icon class="setting-icon"
            ><el-image src="/images/faqs.svg" /></el-icon
          >FAQs</el-text
        >
        <el-icon><arrow-right-bold /></el-icon>
      </div>
      <div class="setting">
        <el-text class="des-title" style="flex: 1"
          ><el-icon class="setting-icon"
            ><el-image src="/images/globe.svg"
          /></el-icon>
          Languages</el-text
        >
        <el-link
          :underline="false"
          style="font-size: 14px; font-weight: 500; text-align: right"
          >English</el-link
        >
        <el-icon style="margin-left: 5px"><arrow-right-bold /></el-icon>
      </div>
    </div>
  </div>
  <BaseFooter :active="'profile'"></BaseFooter>
</template>

<script setup>
import useProfile from "~/composables/useProfile";
import {ArrowRightBold} from "@element-plus/icons-vue";

const { userProfile, startWorking, isActive } = useProfile()
</script>
<style lang="scss">
.profile-container {
  margin: 0 20px 70px 20px;

  .profile-header {
    font-size: 24px;
  }
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
