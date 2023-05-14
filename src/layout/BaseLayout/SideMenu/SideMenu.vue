<template>
  <div class="header">
    <el-menu :default-active="currentPath">
      <template v-for="route in routes" :key="route.path">
        <SideMenuItem :route="route" basePath="" />
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { routes } from "@/router";
import SideMenuItem from "./SideMenuItem.vue";
import { currentPath } from "../tab-store";
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  background-color: black;
}
</style>
