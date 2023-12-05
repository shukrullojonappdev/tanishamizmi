import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "chats",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "chats/:chatId",
        name: "chat",
        component: () => import("pages/ChatPage.vue"),
      },
      {
        path: "explore",
        name: "explore",
        component: () => import("pages/ExplorePage.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("pages/SettingsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
