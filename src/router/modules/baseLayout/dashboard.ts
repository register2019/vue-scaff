import { defineRoutes } from "@/utils/route";

export default defineRoutes([
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      title: "Dashboard",
    },
    children: [],
  },
]);
