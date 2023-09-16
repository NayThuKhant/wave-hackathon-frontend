<template>
  <div class="history-card">
    <img :src="determineImage(props.order.category.id)" alt="" />
    <div class="text-section">
      <div class="history-card-block">
        <el-text style="font-size: 14px">{{
          props.order.category.name
        }}</el-text>
        <!-- <div style="font-size: 14px;">{{ props.order.status }}</div> -->
        <el-tag type="warning">{{ props.order.status }}</el-tag>
      </div>
      <div class="history-card-block">
        <div class="prize">{{ totalPrice }}</div>
        <div class="start-time">{{ formatDate(props.order.started_at) }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Right } from "@element-plus/icons-vue";

const { determineImage, formatDate } = useHistory();

const props = defineProps({
  order: {
    type: Object,
    required: true,
  },
});

const totalPrice = computed(() =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MMK",
  }).format(props.order.total_price)
);
</script>

<style lang="scss">
.history-card {
  border-bottom: 1px solid #ccc;
  gap: 20px;
  display: flex;
  align-items: center;
  padding: 15px 10px;
}

.text-section {
  flex: 1;
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.history-card-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  text-align: right;

  .prize {
    color: var(--grayscale-gray-900, #212121);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
  }
  .start-time {
    color: var(--grayscale-gray-500, #787878);
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 18px */
  }
}

.history-row {
  border-bottom: 1px solid #cccccc;
  padding: 12px 0;
}

.user-name {
  color: black;
  font-size: 14px;
  margin-bottom: 3px;
}

.service-name {
  margin-bottom: 12px;
  font-size: 12px;
}

.user-name,
.service-name {
  font-weight: 600;
  display: block;
  text-align: left;
}

.hire-link,
.hire-icon {
  color: #3188e1;
  font-size: 12px;
  font-weight: 700;
}

.hire-icon {
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #eaf4ff;
  margin-left: 8px;
}

.center-items {
  display: flex;
  justify-content: center;
  align-items: center;
}

.price,
.date {
  font-weight: 600;
  display: block;
  text-align: right;
  margin: 5px 0;
}

.price {
  font-size: 16px;
}

.date {
  font-size: 10px;
}
</style>
