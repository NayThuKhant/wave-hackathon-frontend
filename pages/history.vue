<template>
  <div class="history-container">
    <p>Orders</p>
    <el-tabs v-model="activeName" stretch class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="My Offers" name="first">
        <template v-if="orders">
          <HistoryCard
              v-for="order in orders"
              :key="order.id"
              :workerName="order.employee.name"
              :service="order.category.name"
              :price="'10000'"
              :date="formatDate(order.created_at)"
              :image="determineImage(order.category.id)"
          />
        </template>
        <el-empty v-else description="description" />
      </el-tab-pane>
      <el-tab-pane label="My Services" name="second">
        <HistoryCard
            v-if="offers"
            v-for="offer in offers"
            :key="offer.id"
            :workerName="offer.employer.name"
            :service="offer.category.name"
            :price="'13000'"
            :date="formatDate(offer.created_at)"
            :image="determineImage(offer.category.id)"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
  <BaseFooter :active="'history'"></BaseFooter>
</template>

<script setup>
import useHistory from "~/composables/useHistory";

const { users, formatDate, activeName, handleClick, orders, fetOrderList, offers, determineImage } = useHistory()

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
