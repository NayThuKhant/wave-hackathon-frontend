<template>
  <TopHeader :to="'home'"></TopHeader>
  <div style="margin-top: 50px">
    <el-text class="address-text"
      >Please fill your address details to start finding services.</el-text
    >
    <el-form :model="form">
      <el-form-item label="Floor/Unit" class="form-lable-text">
        <el-input
          v-model="form.floor"
          class="form-input"
          placeholder="Enter Floor/Unit"
        />
      </el-form-item>
      <el-form-item label="Street" style="display: block">
        <el-input
          v-model="form.street"
          class="form-input"
          placeholder="Enter Street"
        />
      </el-form-item>
      <el-form-item label="City" style="display: block">
        <el-select
          v-model="form.city"
          class="form-input"
          placeholder="Select City"
          size="large"
        >
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Township" style="display: block">
        <el-select
          v-model="form.township"
          class="form-input"
          placeholder="Select Township"
          size="large"
        >
          <el-option
            v-for="item in townships"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  floor: "",
  street: "",
  city: "",
  township: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const cities = [
  {
    value: "Yangon",
    label: "Yangon",
  },
  {
    value: "Bago",
    label: "Bago",
  },
  {
    value: "Mandalay",
    label: "Mandalay",
  },
];
const townships= [
  {
    value: "Yangon",
    label: "Yangon",
  },
  {
    value: "Bago",
    label: "Bago",
  },
  {
    value: "Mandalay",
    label: "Mandalay",
  },
];
const onSubmit = () => {
  console.log("submit!");
};
</script>
<style lang="scss">
.address-text {
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 24px;
  display: block;
  font-weight: 600;
  text-align: left;
  color: black;
}
.form-lable-text {
  display: block;
  font-size: 12px;
}
.form-input .el-input__wrapper {
  padding: 8px 12px;
  border-radius: 8px;
}
.form-input {
  width: 100%;
}
</style>
