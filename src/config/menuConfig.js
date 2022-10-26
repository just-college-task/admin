import Role from "@/config/userRole";

/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/dashboard",
    icon: "home",
    roles: [Role.User, Role.Admin],
  },
  {
    title: "我的信息",
    path: "/about",
    icon: "user",
    roles: [Role.User, Role.Admin],
  },
  {
    title: "用户",
    path: "/user",
    icon: "usergroup-add",
    roles: [Role.Admin],
  },
  {
    title: "轮播图",
    path: "/banner",
    icon: "usergroup-add",
    roles: [Role.Admin],
  },
  // {
  //   title: "任教的课",
  //   path: "/teach",
  //   icon: "file",
  //   roles:[Role.User,Role.Admin]
  // },
  // {
  //   title: "引导页",
  //   path: "/guide",
  //   icon: "key",
  //   roles:[Role.User,Role.Admin]
  // },
  // {
  //   title: "权限测试",
  //   path: "/permission",
  //   icon: "lock",
  //   children: [
  //     {
  //       title: "权限说明",
  //       path: "/permission/explanation",
  //       roles:[Role.User,Role.Admin]
  //     },
  //     {
  //       title: "admin页面",
  //       path: "/permission/adminPage",
  //       roles:[Role.User,Role.Admin]
  //     },
  //     {
  //       title: "guest页面",
  //       path: "/permission/guestPage",
  //       roles:[Role.User,Role.Admin]
  //     },
  //     {
  //       title: "editor页面",
  //       path: "/permission/editorPage",
  //       roles:[Role.User,Role.Admin]
  //     },
  //   ],
  // },
  // {
  //   title: "组件",
  //   path: "/components",
  //   icon: "appstore",
  //   roles:[Role.User,Role.Admin],
  //   children: [
  //     {
  //       title: "富文本",
  //       path: "/components/richTextEditor",
  //       roles:[Role.User,Role.Admin],
  //     },
  //     {
  //       title: "Markdown",
  //       path: "/components/Markdown",
  //       roles:[Role.User,Role.Admin],
  //     },
  //     {
  //       title: "拖拽列表",
  //       path: "/components/draggable",
  //       roles:[Role.User,Role.Admin],
  //     },
  //   ],
  // },
  // {
  //   title: "图表",
  //   path: "/charts",
  //   icon: "area-chart",
  //   roles:[Role.User,Role.Admin],
  //   children: [
  //     {
  //       title: "键盘图表",
  //       path: "/charts/keyboard",
  //       roles:[Role.User,Role.Admin],
  //     },
  //     {
  //       title: "折线图",
  //       path: "/charts/line",
  //       roles:[Role.User,Role.Admin],
  //     },
  //     {
  //       title: "混合图表",
  //       path: "/charts/mix-chart",
  //       roles:[Role.User,Role.Admin],
  //     },
  //   ],
  // },
  // {
  //   title: "路由嵌套",
  //   path: "/nested",
  //   icon: "cluster",
  //   roles:[Role.User,Role.Admin],
  //   children: [
  //     {
  //       title: "菜单1",
  //       path: "/nested/menu1",
  //       children: [
  //         {
  //           title: "菜单1-1",
  //           path: "/nested/menu1/menu1-1",
  //           roles:[Role.User,Role.Admin],
  //         },
  //         {
  //           title: "菜单1-2",
  //           path: "/nested/menu1/menu1-2",
  //           children: [
  //             {
  //               title: "菜单1-2-1",
  //               path: "/nested/menu1/menu1-2/menu1-2-1",
  //               roles:[Role.User,Role.Admin],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "表格",
  //   path: "/table",
  //   icon: "table",
  //   roles:[Role.User,Role.Admin]
  // },
  // {
  //   title: "Excel",
  //   path: "/excel",
  //   icon: "file-excel",
  //   roles:[Role.User,Role.Admin],
  //   children: [
  //     {
  //       title: "导出Excel",
  //       path: "/excel/export",
  //       roles:[Role.User,Role.Admin]
  //     },
  //     {
  //       title: "上传Excel",
  //       path: "/excel/upload",
  //       roles:[Role.User,Role.Admin]
  //     }
  //   ],
  // },
  // {
  //   title: "Zip",
  //   path: "/zip",
  //   icon: "file-zip",
  //   roles:[Role.User,Role.Admin]
  // },
  // {
  //   title: "剪贴板",
  //   path: "/clipboard",
  //   icon: "copy",
  //   roles:[Role.User,Role.Admin]
  // }
];
export default menuList;
