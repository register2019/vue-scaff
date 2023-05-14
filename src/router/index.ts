import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import BaseLayout from "@/layout/BaseLayout/layout-index.vue";

const getRoutes = () => {
  console.log();
  const routes = import.meta.glob("./modules/**/*.ts", {
    eager: true,
    import: "default",
  });
  const routesCat: Record<string, RouteRecordRaw[]> = {};

  for (const key in routes) {
    const current = routes[key] as RouteRecordRaw[];
    const layoutType = key.split("/")[2];
    routesCat[layoutType] = routesCat[layoutType] || [];
    routesCat[layoutType] = routesCat[layoutType].concat(current);
  }

  return routesCat;
};

const routesCat = getRoutes();

export const routes = Object.values(routesCat)
  .reduce((prev, curr) => {
    return prev.concat(curr);
  }, [])
  .sort((a, b) => {
    if (a.meta?.sort && b.meta?.sort) {
      return a.meta?.sort - b.meta?.sort;
    }
    return 0;
  });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/dashboard/analysis",
    },
    {
      path: "/baseLayout",
      name: "baseLayout",
      component: BaseLayout,
      children: routesCat.baseLayout,
    },
  ],
});

export default router;
