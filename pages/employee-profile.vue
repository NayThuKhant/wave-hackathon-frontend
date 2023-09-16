<template>
  <TopHeader :to="'profile'"></TopHeader>
  <div class="emp-profile-container">
    <div style="flex: 1">

      <el-text class="emp-header">Setup your employee profile</el-text>
      <el-text class="note-text"
        >Note: We will be using personal & KYC information directly from the
        WaveApp</el-text
      >
      <el-text class="emp-sub-header"> Choose your prefer service</el-text>
      <el-checkbox-group v-model="checkedServices" class="to-check-services">
        <el-checkbox v-for="category in categories" :label="category.label" class="check-service" :key="category.key"
          ><div style="display: flex; align-items: center">
            {{ category.text  }}
            <img src="@/assets/images/cleaning.svg" />
          </div>
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
  <div class="profile-foo">
    <el-button
    @click="updateCategories"
    style="
      width: 100%;
      padding: 8px 12px;
      border-radius: 8px;"
      type="primary"
      :disabled="isDisabled"
      color="#153051"
      >Register Now
    </el-button>
  </div>
</template>

<script setup>
import useProfile from "~/composables/useProfile";

const checkedServices = ref([]);
const categories = ref([
  {
    text: "Laundry",
    label: 1,
    key: 1,
    id: 1
  },
  {
    text: "Household",
    label: 2,
    key: 2,
    id: 1
  }
])


const isDisabled = computed(() => checkedServices.value.length ? false : true)
const { subscribeCategories } = useProfile();

const updateCategories = () => {
  subscribeCategories({category_ids: checkedServices.value})
}
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
  margin: 16px 0;
  display: block;
  word-break: break-word;
}
.to-check-services {
  display: flex;
  gap: 16px;
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
  margin-right: 0;
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
