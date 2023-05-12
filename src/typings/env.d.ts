/// <reference types="vite/client" />

import "vue-router";
import "vue";

declare module "vue-router" {
  interface RouteMeta {
    /** 菜单标题 */
    title: string;
    /** 是否需要登录查看 */
    requiresAuth?: boolean;
    /** 菜单 icon */
    icon?: string;
    /** 是否在菜单隐藏 */
    hidden?: boolean;
    /** 是否显示左侧菜单栏 */
    showSideBar?: boolean;
    /** 是否显示顶栏 */
    showHeader?: boolean;
    /** 是否显示全局组织选择 */
    showHeaderOrganization?: boolean;
    /** 菜单排序 */
    sort?: number;
    /** 全局 loading */
    showLoading?: boolean;
    /** 路由跳转时是否取消请求 */
    clearPendingRequest?: boolean;

    /** 是否固定头部，默认固定 */
    fixedHeader?: boolean;
  }
}
