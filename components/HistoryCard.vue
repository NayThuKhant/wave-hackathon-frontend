<template>
  <div class="history-card">
    <el-row class="history-row">
      <el-col :span="3" class="center-items">
        <el-image :src="image" alt="" style="margin: auto"></el-image>
      </el-col>
      <el-col :span="9">
        <div>
          <el-text class="user-name">{{ workerName }}</el-text>
          <el-text class="service-name">{{ service }}</el-text>
          <el-link :underline="false" class="hire-link">
            Hire Again
            <el-icon class="hire-icon">
              <Right />
            </el-icon>
          </el-link>
        </div>
      </el-col>
      <el-col
        :span="12"
        style="display: flex; align-items: center; justify-content: end"
      >
        <div>
          <el-text class="price">Ks {{ price }} </el-text>
          <el-text class="date">{{ date }}</el-text>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { Right } from "@element-plus/icons-vue";
const props = defineProps({
  workerName: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Add this prop for the image URL
    required: true,
  },
});
</script>

<style lang="scss">
.history-card {
  width: 100%;
  margin: 0 auto;
  // padding: 15px 10px;
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
