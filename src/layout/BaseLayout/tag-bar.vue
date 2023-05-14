<template>
  <div class="tag">
    <el-tag
      v-for="tag in tagList"
      :key="tag.path"
      closable
      class="tag-item"
      :color="color(tag.path)"
      @click="toPage(tag.path)"
      @close="closePage(tag.path)"
    >
      {{ tag.title }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { tagList, setTag, currentPath } from "./tab-store";
import { useRouter } from "vue-router";

const router = useRouter();

const toPage = (path: string) => {
  currentPath.value = path;
  router.push(path);
};

const color = (path: string) => {
  return path === currentPath.value ? "rgba(29, 119, 255, 0.5)" : "#FFFFFF";
};

const closePage = (path: string) => {
  console.log(path);

  const filterTagList = tagList.value.filter((item) => item.path !== path);
  if (currentPath.value === path) {
    const target = filterTagList[filterTagList.length - 1];
    currentPath.value = target ? target.path : "";
  }
  setTag(filterTagList);
};
</script>

<style lang="scss" scoped>
.tag {
  padding: 0 10px;
  &-item {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
