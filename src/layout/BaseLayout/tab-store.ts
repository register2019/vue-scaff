import { ref } from "vue";

export type Tags = {
  title: string;
  path: string;
};

const sessionTagList = JSON.parse(sessionStorage.getItem("tagList") ?? "[]");

export const tagList = ref<Tags[]>(sessionTagList);

export const setTag = (tags: Tags[]) => {
  sessionStorage.setItem("tagList", JSON.stringify([]));
  sessionStorage.setItem("tagList", JSON.stringify(tags));
  tagList.value = tags;
};

export const currentPath = ref("/");
