<template>
  <div class="header-style">
    <el-page-header @back="goBack">
      <template #content>
        <span class="text-large font-600 mr-2"> Laundry </span>
      </template>
    </el-page-header>
  </div>
</template>
<script setup>
const props = defineProps(['to'])
const goBack = () => {
  navigateTo(props.to)
}
</script>

<style scoped>
.header-style {
  padding: 8px;
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  color: #000;
  text-align: center;
  max-width: 480px; /* Set the maximum width */
  margin: 0 auto; /* Center the navbar horizontally */
  background: #FFF;
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.10);
}
</style>