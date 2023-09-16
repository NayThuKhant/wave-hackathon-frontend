<template>
  <el-card class="card-container" shadow="hover">
    <el-avatar :src="determineAvatar(Employee.gender)" class="card-user" />
    <div style="margin-left: 16px">
      <span style="display: block; font-size: 13px; font-weight: bold">{{ Employee.name }}</span>
      <el-text
          style="font-size: 10px; padding-right: 5px"
          v-for="category in Employee.categories"
          :key="category.id"
      >{{ category.name }}
        <span v-if="category.id < Employee.categories.length - 1">|</span>
      </el-text>
    </div>
    <div style="flex: 1; text-align: right">
      <el-text class="card-text">
        <el-icon class="card-icon"><StarFilled /></el-icon>
        {{Employee.rating}}
      </el-text>
    </div>
  </el-card>
</template>

<script setup>
import { StarFilled, User } from "@element-plus/icons-vue";

const props = defineProps({
  Employee: {
    type: Object,
    required: true,
  },
})

const determineAvatar = (gender) => {
  return gender == 'MALE' ? '/images/male-avatar.png' : '/images/female-avatar.png';
}
</script>

<style lang="scss">
.card-container {
  width: 100%;
  border-radius: 6px;
  margin: 5px 0;
}
.card-container .el-card__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.card-icon {
  color: #3188e1;
  font-size: 18px;
  margin-right: 6px;
}
.card-text {
  justify-content: center;
  align-items: center;
}
.card-user {
  padding: 8px;
}
</style>
