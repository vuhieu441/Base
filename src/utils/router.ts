import Dashboard from 'src/pages/admin/dashboard/Dashboard';
import PG from 'src/pages/admin/pg/Pg';
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
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'pg',
    component: PG,
    children: [
      {
        index: true,
        path: 'list-pg',
        component: ListPG,
      },
      {
        path: 'update-pg',
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
