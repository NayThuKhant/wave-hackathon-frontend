<template>
  <TopHeader :to="'home'"></TopHeader>
  <div style="margin: 50px 20px 0px 20px">
    <SearchBar></SearchBar>
    <div v-loading="!providers.length">
      <template v-for="emp in providers" :key="emp.id">
        <BtnCard :Employee="emp"></BtnCard>
      </template>
    </div>
  </div>
</template>

<script setup scoped>
import useProvider from "~/composables/useProvider";

const { providers, fetchProviders } = useProvider();

onMounted(async () => {
  await fetchProviders();
});
</script>
<style lang="scss">
.emp-profile-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 50px 20px 0px 20px;
}
.emp-header,
.emp-sub-header {
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  color: black;
  display: block;
}
.emp-sub-header {
  font-size: 14px;
  margin-bottom: 16px;
}
.note-text {
  font-size: 14px;
  font-weight: 500;
  color: #f44;
  margin: 8px 0 16px 0;
  display: block;
  word-break: break-word;
}
.to-check-services {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.check-service {
  border-radius: 8px;
  border: 0.5px solid var(--grayscale-gray-300, #ccc);
  background: #fff;
  display: flex;
  padding: 24px 16px;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  width: 40%;
}
.check-service .el-checkbox__label {
  padding: 0;
}
.profile-foo {
  padding: 20px;
  text-align: center;
  position: sticky;
  bottom: 0;
  padding: 16px 20px;
}
</style>
