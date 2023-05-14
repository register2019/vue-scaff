import { defineRoutes } from "@/utils/route";

export default defineRoutes([
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      title: "Dashboard",
      sort: 1,
    },
    children: [
      {
        path: "analysis",
        name: "analysis",
        meta: {
          title: "分析页",
        },
        component: () => import("@/views/dashboard/analysis.vue"),
        children: [],
      },
      {
        path: "workbench",
        name: "workbench",
        meta: {
          title: "工作台",
        },
        component: () => import("@/views/dashboard/workbench.vue"),
        children: [],
      },
    ],
  },
]);
