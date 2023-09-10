<template>
  <el-input
    v-model="searchQuery"
    class="search-bar"
    size="large"
    placeholder="Search for service providers"
    clearable
    @clear="clearSearch"
  >
    <template #prefix>
      <el-icon class="el-input__icon" :size="24"><Search /></el-icon>
    </template>
  </el-input>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
export default {
  components: {
    Search,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    clearSearch() {
      this.searchQuery = "";
    },
  },
};
</script>
<style lang="scss">
.search-bar .el-input__wrapper {
  border-radius: 8px;
  border: 1px solid #3188e1;
  margin: 10px 0;
}
</style>
