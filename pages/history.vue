<template>
  <div class="history-container">
    <div style="display: flex;">
      <p style="flex: 1">Orders</p>
      <WaveCloseButton />
    </div>
    <el-tabs v-model="activeName" stretch class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="My Offers" name="first">
        <template v-if="offers.length">
         <HistoryCard
              v-for="order in offers"
              :order="order"
              :key="order.id"
          />
        </template>
        <el-empty v-else image="/images/empty.svg" description="There is nothing to show yet !" />
      </el-tab-pane>
      <el-tab-pane label="My Services" name="second">
        <template v-if="services.length">
          <HistoryCard
              v-for="order in services"
              :order="order"
              :key="order.id"
          />
        </template>
        <el-empty v-else image="/images/empty.svg" description="There is nothing to show yet !" >
          <el-button v-if="!user.employee" type="primary">
            Join Now !
          </el-button>
        </el-empty>
      </el-tab-pane>
    </el-tabs>
  </div>
  <BaseFooter :active="'history'"></BaseFooter>
</template>

<script setup>
import useHistory from "~/composables/useHistory";

const { user, formatDate, activeName, handleClick, services, fetOrderList, offers } = useHistory()

onMounted(async () => {
  await fetOrderList()
})
</script>

<style lang="scss" scoped>
.history-container {
  padding: 20px;

  p {
    margin: 0;
    font-size: 23px;
  }

  .demo-tabs {
    margin-top: 10px;
  }
}
</style>
