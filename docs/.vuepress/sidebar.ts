import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  "/DailyRoutine",
  "/Fitness",
  "/Read",
  "/Test",
  {
    text: "Blog",
    icon: "blog",
    prefix: "/_posts/",
    link: "/blog",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🚀 资料",
    icon: "",
    prefix: "/code/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🧰 工具",
    icon: "",
    prefix: "/apps/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🌐 资源",
    icon: "",
    prefix: "/web/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🏗️ 部署",
    icon: "",
    prefix: "/deploy/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🐋 服务",
    icon: "",
    prefix: "/services/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "导航",
    icon: "check",
    prefix: "/windows/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "生活",
    icon: "check",
    prefix: "/family/",
    link: "",
    collapsable: true,
    children: "structure",
  },

]);
