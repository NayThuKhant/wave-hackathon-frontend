<template>
  <el-card class="card-container" shadow="hover">
    <el-avatar class="card-user"><User /></el-avatar>
    <div style="margin-left: 10px">
      <span style="display: block">{{ Employee.name }}</span>
      <el-text
          style="font-size: 10px; padding-right: 5px"
          v-for="category in Employee.categories"
          :key="category.id"
      >{{ category.name }}
        <span v-if="category.id < Employee.categories.length - 1">|</span>
      </el-text>
    </div>
    <div>
      <el-text class="card-text">
        <el-icon class="card-icon"><StarFilled /></el-icon>
        4.5
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
});
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-user {
  padding: 8px;
}
</style>
