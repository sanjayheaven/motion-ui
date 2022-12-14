import { defineConfig } from "dumi";
import { IConfig } from "@umijs/types";
import { menus } from "./components";

export default defineConfig({
  logo: "/logo.png",
  favicon: "/logo.png",
  title: "Headless Motion",
  mode: "site",
  locales: [["en-US", "English"]],

  // here tailwind only for documents
  scripts: [
    `https://cdn.tailwindcss.com`,
    `
      tailwind.config = {
        corePlugins: {
          preflight: false,
        },
      }
    `,
  ],

  navs: {
    "zh-CN": [
      { title: "指南", path: "/zh-CN/guide" },
      { title: "组件", path: "/zh-CN/components" },
      { title: "GitHub", path: "https://github.com/sanjayheaven/motion-ui" },
    ],
    "en-US": [
      { title: "Guide", path: "/guide" },
      { title: "Components", path: "/components" },
      { title: "GitHub", path: "https://github.com/sanjayheaven/motion-ui" },
    ],
  },
  menus: {
    "/": [{ title: "Home", path: "index" }],
    "/zh-CN": [{ title: "首页", path: "index" }],
    "/components": menus,
    "/zh-CN/components": menus,
  },
  chainWebpack: (config) => {
    config.module
      .rule("mjs$")
      .test(/.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type("javascript/auto");
  },
} as IConfig);
