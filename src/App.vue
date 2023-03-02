<template>
  <div>App</div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import request from "./config/request";

const getRunGraphData = () => {
  return request.get("/getRunGraphData");
};

onMounted(() => {
  testAxios();
});

const testAxios = async () => {
  const data = await getRunGraphData();
  console.log(data);
};
</script>

<style lang="scss" scoped></style>
