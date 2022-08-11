import Dashboard from 'src/pages/admin/dashboard/Dashboard';
import DashboardContent from 'src/pages/admin/dashboard/component/dashboardContent/DashboardContent';
import PG from 'src/pages/admin/pg/Pg';
import CreatePG from 'src/pages/admin/pg/component/CreatePG/CreatePg';
import ListPG from 'src/pages/admin/pg/component/listPG/ListPg';
import Login from 'src/pages/auth/login/Login';
import Register from 'src/pages/auth/register/Register';
import ForgotPassword from 'src/pages/auth/forgotPassword/ForgotPassword';

export const authRouter = [
  {
    index: true,
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'forgot-password',
    component: ForgotPassword,
  },
];

export const adminRouter = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        index: true,
        path: 'dashboard',
        component: DashboardContent,
      },
    ],
  },
  {
    path: 'pg',
    component: PG,
    children: [
      {
        path: 'create-pg',
        component: CreatePG,
      },
      {
        index: true,
        path: 'list-pg',
        component: ListPG,
      },
    ],
  },
];

export const sideBarRouter = [
  {
    label: 'dashboard',
    path: '/admin/dashboard',
    icon: '',
  },
  {
    label: 'pg',
    path: '/admin/pg/list-pg',
    icon: '',
  },
];
export {};
