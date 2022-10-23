import Loadable from 'react-loadable';
import Loading from '@/components/Loading'
import Role from '@/config/userRole';

const Dashboard = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'),loading: Loading});
const Teach = Loadable({loader: () => import(/*webpackChunkName:'Doc'*/'@/views/teach'),loading: Loading});
const Guide = Loadable({loader: () => import(/*webpackChunkName:'Guide'*/'@/views/guide'),loading: Loading});
const Explanation = Loadable({loader: () => import(/*webpackChunkName:'Explanation'*/'@/views/permission'),loading: Loading});
const AdminPage = Loadable({loader: () => import(/*webpackChunkName:'AdminPage'*/'@/views/permission/adminPage'),loading: Loading});
const GuestPage = Loadable({loader: () => import(/*webpackChunkName:'GuestPage'*/'@/views/permission/guestPage'),loading: Loading});
const EditorPage = Loadable({loader: () => import(/*webpackChunkName:'EditorPage'*/'@/views/permission/editorPage'),loading: Loading});
const RichTextEditor = Loadable({loader: () => import(/*webpackChunkName:'RichTextEditor'*/'@/views/components-demo/richTextEditor'),loading: Loading});
const Markdown = Loadable({loader: () => import(/*webpackChunkName:'Markdown'*/'@/views/components-demo/Markdown'),loading: Loading});
const Draggable = Loadable({loader: () => import(/*webpackChunkName:'Draggable'*/'@/views/components-demo/draggable'),loading: Loading});
const KeyboardChart = Loadable({loader: () => import(/*webpackChunkName:'KeyboardChart'*/'@/views/charts/keyboard'),loading: Loading});
const LineChart = Loadable({loader: () => import(/*webpackChunkName:'LineChart'*/'@/views/charts/line'),loading: Loading});
const MixChart = Loadable({loader: () => import(/*webpackChunkName:'MixChart'*/'@/views/charts/mixChart'),loading: Loading});
const Menu1_1 = Loadable({loader: () => import(/*webpackChunkName:'Menu1_1'*/'@/views/nested/menu1/menu1-1'),loading: Loading});
const Menu1_2_1 = Loadable({loader: () => import(/*webpackChunkName:'Menu1_2_1'*/'@/views/nested/menu1/menu1-2/menu1-2-1'),loading: Loading});
const Table = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/table'),loading: Loading});
const ExportExcel = Loadable({loader: () => import(/*webpackChunkName:'ExportExcel'*/'@/views/excel/exportExcel'),loading: Loading});
const UploadExcel = Loadable({ loader: () => import(/*webpackChunkName:'UploadExcel'*/'@/views/excel/uploadExcel'),loading: Loading });
const Zip = Loadable({loader: () => import(/*webpackChunkName:'Zip'*/'@/views/zip'),loading: Loading});
const Clipboard = Loadable({loader: () => import(/*webpackChunkName:'Clipboard'*/'@/views/clipboard'),loading: Loading});
const Error404 = Loadable({loader: () => import(/*webpackChunkName:'Error404'*/'@/views/error/404'),loading: Loading});
const User = Loadable({loader: () => import(/*webpackChunkName:'User'*/'@/views/user'),loading: Loading});
const About = Loadable({loader: () => import(/*webpackChunkName:'About'*/'@/views/about'),loading: Loading});
const Banner = Loadable({loader: () => import(/*webpackChunkName:'About'*/'@/views/banner'),loading: Loading});


export default [
  { path: "/dashboard", component: Dashboard, roles: [Role.User,Role.Admin] },
  { path: "/teach", component: Teach, roles: [Role.User,Role.Admin] },
  { path: "/guide", component: Guide, roles: [Role.User,Role.Admin] },
  { path: "/permission/explanation", component: Explanation, roles: [Role.User,Role.Admin] },
  { path: "/permission/adminPage", component: AdminPage, roles: [Role.User,Role.Admin] },
  { path: "/permission/guestPage", component: GuestPage, roles: [Role.User,Role.Admin] },
  { path: "/permission/editorPage", component: EditorPage, roles: [Role.User,Role.Admin] },
  { path: "/components/richTextEditor", component: RichTextEditor, roles: [Role.User,Role.Admin] },
  { path: "/components/Markdown", component: Markdown, roles: [Role.User,Role.Admin] },
  { path: "/components/draggable", component: Draggable, roles: [Role.User,Role.Admin] },
  { path: "/charts/keyboard", component: KeyboardChart, roles: [Role.User,Role.Admin] },
  { path: "/charts/line", component: LineChart, roles: [Role.User,Role.Admin] },
  { path: "/charts/mix-chart", component: MixChart, roles: [Role.User,Role.Admin] },
  { path: "/nested/menu1/menu1-1", component: Menu1_1, roles: [Role.User,Role.Admin] },
  { path: "/nested/menu1/menu1-2/menu1-2-1", component: Menu1_2_1, roles: [Role.User,Role.Admin] },
  { path: "/table", component: Table, roles: [Role.User,Role.Admin] },
  { path: "/excel/export", component: ExportExcel, roles: [Role.User,Role.Admin] },
  { path: "/excel/upload", component: UploadExcel, roles: [Role.User,Role.Admin] },
  { path: "/zip", component: Zip, roles: [Role.User,Role.Admin] },
  { path: "/clipboard", component: Clipboard, roles: [Role.User,Role.Admin] },
  { path: "/user", component: User, roles: [Role.User,Role.Admin] },
  { path: "/about", component: About, roles: [Role.User,Role.Admin] },
  { path: "/banner", component: Banner, roles: [Role.User,Role.Admin] },
  { path: "/error/404", component: Error404 },
];
