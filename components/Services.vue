<template>
  <div class="services">
    <el-text class="service-text">Services</el-text>
    <div class="service-btns">
      <el-card class="service-card" shadow="hover">
        <div style="display: flex; align-items: center">
          <img src="@/assets/images/laundry.svg" />
          <span style="margin-left: 10px">Laundry</span>
        </div>
        <el-icon class="service-icon">
          <ArrowRight />
        </el-icon>
      </el-card>
      <el-card
        class="service-card"
        shadow="hover"
        style="background-color: #fce9ff"
      >
        <div style="display: flex; align-items: center">
          <img src="@/assets/images/cleaning.svg" />
          <span style="margin-left: 10px">Cleaning</span>
        </div>
        <el-icon class="service-icon">
          <ArrowRight />
        </el-icon>
      </el-card>
    </div>
    <div class="service-provider">
      <div style="display: flex; justify-content: space-between">
        <el-text class="service-text">Best Service Providers</el-text>
        <el-link type="primary" :underline="false">See All</el-link>
      </div>
      <div v-for="user in users" :key="user">
        <BtnCard :UserName="user.name" :serviceName="user.service"></BtnCard>
      </div>
    </div>
    <el-text class="service-text">Are You Interested?</el-text>
    <el-card
      shadow="never"
      class="join-card"
      style="
        background: linear-gradient(98.72deg, #153660 32.37%, #45a1ff 87.71%);
      "
    >
      <div style="display: flex; justify-content: center">
        <div class="text-gp">
          <el-text>Start your career! </el-text>
          <el-text
            >There are varieties of part time jobs available. Start
            now!</el-text
          >
          <div style="display: flex; align-items: center">
            <el-text style="display: inline-flex">Join Now</el-text
            ><el-icon style="display: inline-flex; color: #ffffff"
              ><Position
            /></el-icon>
          </div>
        </div>
        <img src="@/assets/images/service-girl.svg" alt="" />
      </div>
    </el-card>
  </div>
</template>
<script>
import { ArrowRight, Position } from "@element-plus/icons-vue";
export default {
  components: {
    ArrowRight,
    Position,
  },
  data() {
    return {
      users: [
        { name: "John Doe", service: "Laundry" },
        { name: "Jane Smith", service: "Cleaning" },
        { name: "Bob Johnson", service: "Laundry" },
      ],
    };
  },
};
</script>

<style lang="scss">
.services {
  margin-top: 20px;
}
.service-text {
  font-size: 18px;
  margin-bottom: 10px;
  display: block;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #212121;
}
.service-btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.service-card {
  width: 40%;
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
.text-gp .el-text,
.text-gp .el-icon {
  color: #ffffff;
  display: block;
  margin: 10px;
}
</style>
