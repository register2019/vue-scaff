<template>
  <el-sub-menu v-if="menus.children.length > 0" :index="fullPath">
    <template #title>
      <span>
        {{ menus.name }}
      </span>
    </template>
    <template v-for="menu in menus.children" :key="menu.path">
      <SideMenuItem :route="menu" :basePath="fullPath" />
    </template>
  </el-sub-menu>
  <el-menu-item
    v-else
    :index="fullPath"
    @click="toPage(fullPath, menus.meta!.title)"
  >
    {{ menus.name }}
  </el-menu-item>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { useRouter } from "vue-router";
import { currentPath, setTag, tagList } from "../tab-store";

const props = defineProps<{
  route: RouteRecordRaw;
  basePath: "";
}>();
const router = useRouter();

const fullPath = computed(() => {
  const {
    route: { path },
    basePath,
  } = props;

  if (path.indexOf("/") === 0) {
    return path;
  }

  return `${basePath}/${path}`.replace("//", "/");
});

const menus = computed(() => {
  const { route } = props;
  return {
    children: route.children ?? [],
    path: route.path,
    name: route.name ?? "",
    meta: route.meta,
  };
});

const toPage = (path: string, title: string) => {
  currentPath.value = path;
  router.push(path);
  if (tagList.value.find((tag) => tag.path === path)) return;
  tagList.value.push({
    title,
    path,
  });
  setTag(tagList.value);
};
</script>

<style lang="scss" scoped></style>
