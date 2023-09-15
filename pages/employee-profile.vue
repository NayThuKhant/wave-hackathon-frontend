<template>
  <TopHeader :to="profile"></TopHeader>
  <div class="emp-profile-container">
    <div style="flex: 1">
      <el-text class="emp-header">Setup your employee profile</el-text>
      <el-text class="note-text"
        >Note: We will be using personal & KYC information directly from the
        WaveApp</el-text
      >
      <el-text class="emp-sub-header"> Choose your prefer service</el-text>
      <el-checkbox-group v-model="checkedServices" class="to-check-services">
        <el-checkbox label="laundry" class="check-service"
          ><div style="display: flex; align-items: center">
            Laundry Services
            <img src="@/assets/images/laundry.svg" style="margin-left: 16px" />
          </div>
        </el-checkbox>
        <el-checkbox label="cleaning" class="check-service"
          ><div style="display: flex; align-items: center">
            Cleaning Services
            <img src="@/assets/images/cleaning.svg" style="margin-left: 16px" />
          </div>
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
  <div class="profile-foo">
    <el-button
      type="primary"
      style="
        width: 100%;
        padding: 8px 12px;
        border-radius: 8px;
        background-color: #153051;
      "
      >Register Now
    </el-button>
  </div>
</template>

<script setup scoped>
import useProfile from "~/composables/useProfile";
import { ref } from "vue";

const checkedServices = ref([]);

const { userProfile } = useProfile();
</script>
<style lang="scss">
.emp-profile-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 50px 20px 0px 20px;
}
.emp-header,
.emp-sub-header {
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  color: black;
  display: block;
}
.emp-sub-header {
  font-size: 14px;
  margin-bottom: 16px;
}
.note-text {
  font-size: 14px;
  font-weight: 500;
  color: #f44;
  margin: 8px 0 16px 0;
  display: block;
  word-break: break-word;
}
.to-check-services {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.check-service {
  border-radius: 8px;
  border: 0.5px solid var(--grayscale-gray-300, #ccc);
  background: #fff;
  display: flex;
  padding: 24px 16px;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  width: 40%;
}
.check-service .el-checkbox__label {
  padding: 0;
}
.profile-foo {
  padding: 20px;
  text-align: center;
  position: sticky;
  bottom: 0;
  padding: 16px 20px;
}
</style>
