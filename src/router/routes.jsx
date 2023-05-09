import Books from "../components/Pages/Books";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Users from "../components/Pages/Users";

export default [
    {
      path: '/',
      exact: true,
      component: Home,
      loading: 'Custom loading for home page...',
      error: 'Custom error for home page',
      meta: {
        auth: true,
      },
    },
    {
      path: '/users',
      exact: true,
      component: Users,
      meta: {
        auth: true,
      },
    },
    {
      path: '/books',
      exact: true,
      component: Books,
    },
    {
      path: '/login',
      exact: true,
      component: Login,
    },
    // {
    //   path: '*',
    //   component: NotFound,
    //   ignoreGlobal: true,
    // },
];