<template>
  <div class="footer-bar">
    <!-- Navigation content goes here -->
    <div class="navbar">
      <div class="navbar-item" @click="brSharLal('home')">
        <el-image :src="isActive('home')" alt="home-icon"></el-image>
<!--        <img alt="home-icon" :src="isActive('home')" />-->
        <p>Home</p>
      </div>
      <div class="navbar-item" @click="brSharLal('history')">
<!--        <el-icon :color="activeTab === 'history' ? 'blue': 'gray'">-->
<!--          <List />-->
<!--        </el-icon>-->
        <img alt="home-icon" :src="isActive('history')" />
        <p>Orders</p>
      </div>
      <div class="navbar-item" @click="brSharLal('profile')">
<!--        <el-icon :color="activeTab === 'profile' ? 'blue': 'gray'">-->
<!--          <User />-->
<!--        </el-icon>-->
        <img alt="home-icon" :src="isActive('profile')" />
        <p>Profile</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {HomeFilled, List, User} from "@element-plus/icons-vue";

const props = defineProps(['active'])
const activeTab = props.active
const brSharLal = async (route) => {
  navigateTo(route)
}

const isActive = (name) => {
  return activeTab === name ? "/images/" + name + "blue.svg" : "/images/" + name + "gray.svg"
}
</script>

<style scoped lang="scss">
/* Styling for the floating navigation bar */
.footer-bar {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #000;
  text-align: center;
  max-width: 480px; /* Set the maximum width */
  margin: 0 auto; /* Center the navbar horizontally */
  padding: 10px 0;
  background: #FFF;
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.10);
}

.navbar {
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.navbar-item {
  cursor: pointer;
  margin: 0;
  padding: 0;
  p {
    margin: 0;
  }
}

</style>