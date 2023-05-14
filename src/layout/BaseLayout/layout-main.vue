<template>
  <div class="main">
    <div class="main-tag-bar">
      <tag-bar />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TagBar from "./tag-bar.vue";
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  background-color: beige;
  &-tag-bar {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
  }
}
</style>
