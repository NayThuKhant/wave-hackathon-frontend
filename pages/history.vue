<template>
  <div class="history-container">
    <p>Orders</p>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="My Offers" name="first">
        <HistoryCard
            v-for="user in users"
            :key="user.id"
            :workerName="user.workerName"
            :service="user.service"
            :price="user.price"
            :date="formatDate(user.date)"
            :image="user.image"
        />
      </el-tab-pane>
      <el-tab-pane label="My Services" name="second">
        <HistoryCard
            v-for="user in users"
            :key="user.id"
            :workerName="user.workerName"
            :service="user.service"
            :price="user.price"
            :date="formatDate(user.date)"
            :image="user.image"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
  <BaseFooter :active="'history'"></BaseFooter>
</template>

<script setup>
import useHistory from "~/composables/useHistory";

const { users, formatDate, activeName, handleClick } = useHistory()
</script>

<style lang="scss" scoped>
.history-container {
  padding: 20px;

  p {
    margin: 0;
    font-size: 20px;
  }
}
</style>
