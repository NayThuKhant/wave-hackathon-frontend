<template>
  <div class="services">
    <el-text class="service-text">Categories</el-text>
    <div class="service-btns">
      <el-card
          class="service-card"
          shadow="hover"
          @click="goToService('order?category=2')"
      >
        <div style="display: flex; align-items: center">
          <img alt="" src="@/assets/images/laundry.svg"/>
          <span style="margin-left: 10px; font-size: 14px">Laundry</span>
        </div>
        <el-icon class="service-icon">
          <ArrowRight/>
        </el-icon>
      </el-card>
      <el-card
          class="service-card"
          shadow="hover"
          style="background-color: #fce9ff"
          @click="goToService('order?category=1')"
      >
        <div style="display: flex; align-items: center">
          <img src="@/assets/images/cleaning.svg"/>
          <span style="margin-left: 10px; font-size: 14px">Household</span>
        </div>
        <el-icon class="service-icon">
          <ArrowRight/>
        </el-icon>
      </el-card>
    </div>
    <div class="service-provider">
      <div style="display: flex; justify-content: space-between">
        <el-text class="service-text">Best Service Providers</el-text>
        <el-link type="primary" :underline="false" @click="goToProviders">See All</el-link>
      </div>
      <div v-loading="!firstThreeProviders.length" v-for="employee in firstThreeProviders" :key="employee.id">
        <BtnCard :Employee="employee"></BtnCard>
      </div>
    </div>
    <el-text class="service-text">Are You Interested?</el-text>
    <el-image 
        style="cursor: pointer;"
        src="/images/career-banner.png" @click="goToService('profile')" />
<!--    <el-card-->
<!--        shadow="never"-->
<!--        class="join-card"-->
<!--        style="-->
<!--        background: linear-gradient(98.72deg, #153660 32.37%, #45a1ff 87.71%);-->
<!--      "-->
<!--    >-->
<!--      <div style="display: flex; justify-content: center">-->
<!--        <div class="text-gp">-->
<!--          <el-text style="font-weight: 600">Start your career!</el-text>-->
<!--          <el-text-->
<!--          >There are varieties of part time jobs available. Start-->
<!--            now!-->
<!--          </el-text>-->
<!--          <el-link :underline="false" style="color: #ffffff">-->
<!--            Join Now-->
<!--            <el-icon>-->
<!--              <Position/>-->
<!--            </el-icon>-->
<!--          </el-link>-->
<!--        </div>-->
<!--        <img src="@/assets/images/service-girl.svg" alt=""/>-->
<!--      </div>-->
<!--    </el-card>-->
  </div>
</template>
<script setup>
import {ArrowRight, Position} from "@element-plus/icons-vue"
import useHome from "~/composables/useHome";

const props = defineProps(["providers"]);
const {goToProviders} = useHome()

const firstThreeProviders = computed(() => {
  return props.providers.slice(0, 3)
})

const goToService = async (route) => {
  navigateTo(route)
};
</script>

<style lang="scss">
.services {
  margin-top: 16px;
}

.service-text {
  font-size: 16px;
  margin-bottom: 10px;
  display: block;
  font-weight: 600;
  text-align: left;
  color: black;
}

.service-btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.service-card {
  flex: 1;
  padding: 25px 10px;
  border-radius: 6px;
  background: #e9f2ff;
}

.service-card .el-card__body {
  display: flex;
  justify-content: space-between; /* Distribute content to each edge side */
  align-items: center; /* Vertically center content */
  width: 100%;
  padding: 0;
}

.service-icon {
  padding-right: 10px;
}

.service-provider {
  margin: 20px 0;
}

.join-card {
  background-color: linear-gradient(98.72deg, #153660 32.37%, #45a1ff 87.71%);
}

.text-gp .el-text {
  color: #ffffff;
  display: block;
  margin: 10px 0;
  line-height: 18px;
}

.text-gp .el-icon {
  margin-left: 10px;
}
</style>
