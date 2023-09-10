<template>
  <el-card class="card-container" shadow="hover">
    <div style="display: flex; align-items: center">
      <!-- <el-avatar :icon="UserFilled" /> -->
      <!-- <el-avatar>
        <UserFilled size="14"/>
      </el-avatar> -->
      <el-avatar class="card-user"><User /></el-avatar>
      <div style="margin-left: 10px">
        <span style="display: block">{{ UserName }}</span>
        <el-text>{{ serviceName }}</el-text>
      </div>
    </div>
    <el-icon class="card-icon">
      <ArrowRight />
    </el-icon>
  </el-card>
</template>

<script>
import { ArrowRight, User } from "@element-plus/icons-vue";
export default {
  props: {
    UserName: {
      type: String,
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
  },
  components: {
    ArrowRight,
    User,
  },
};
</script>
<style lang="scss">
.card-container {
  width: 100%;
  border-radius: 6px;
  margin: 5px 0;
}
.card-container .el-card__body {
  display: flex;
  justify-content: space-between; /* Distribute content to each edge side */
  align-items: center; /* Vertically center content */
  width: 100%;
  padding: 20px;
}
.card-icon {
  padding-right: 30px;
}
.card-user {
  padding: 8px;
}
</style>
