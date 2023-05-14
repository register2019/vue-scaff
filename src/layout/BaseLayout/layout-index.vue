<template>
  <el-container>
    <el-header class="header" height="80px">
      <layout-header />
    </el-header>
    <el-container class="container">
      <el-aside class="aside" width="200px">
        <layout-sider />
      </el-aside>
      <el-main class="main">
        <layout-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import LayoutSider from "./SideMenu/SideMenu.vue";
import LayoutHeader from "./layout-header.vue";
import LayoutMain from "./layout-main.vue";
</script>

<style lang="scss" scoped>
.header,
.aside,
.main {
  padding: 0;
}

.container {
  height: calc(100vh - 80px);
}
</style>
