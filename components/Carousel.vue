<template>
  <div class="block text-center">
    <el-carousel
      height="150px"
      arrow="never"
      class="home-carousel"
      trigger="click"
    >
      <el-carousel-item v-for="item in carouselItems" :key="item">
        <img :src="item" alt="Carousel Image" style="width: 100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup>
import { ref } from "vue";

const carouselItems = ref([
  "/images/caro1.png", // Replace with your image paths or URLs
  "/images/caro2.png",
  "/images/caro3.png",
]);
</script>
<style scoped lang="scss">
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px; 
  margin: 0;
  text-align: center;
}

.home-carousel {
  border-radius: 8px;
}

</style>
