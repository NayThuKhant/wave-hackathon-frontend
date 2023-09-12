<template>
  <TopHeader :to="'home'"></TopHeader>
  <div style="margin-top: 50px">
    <HistoryCard
      v-for="user in users"
      :key="user.id"
      :workerName="user.workerName"
      :service="user.service"
      :price="user.price"
      :date="formatDate(user.date)"
      :image="user.image"
    />
  </div>
  <BaseFooter :active="'history'"></BaseFooter>
</template>

<script setup>
import { ref } from "vue";

const users = ref([
  {
    id: 1,
    workerName: "John Doe",
    service: "Laundry Service",
    price: "10,000",
    date: "9 Oct 2023",
    image: "/images/laundry.svg",
  },
  {
    id: 2,
    workerName: "Alice Smith",
    service: "Cleaning Service",
    price: "7,500",
    date: "9 Sep 2023",
    image: "/images/cleaning.svg",
  },
  {
    id: 3,
    workerName: "Bob Johnson",
    service: "Gardening Service",
    price: "12,000",
    date: "9 Nov 2023",
    image: "/images/laundry.svg",
  },
]);

const formatDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};
</script>
