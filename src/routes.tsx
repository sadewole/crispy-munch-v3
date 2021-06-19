import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import Home from 'src/views/home';
import ExploreMenu from './views/menu';
import Cart from './views/cart';
import ReviewCart from './views/review';
import Account from './layouts/MainLayout/account';
import Customer from './views/customer';
import Error from './views/error';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <ExploreMenu /> },
      { path: '/cart', element: <Cart /> },
      { path: '/cart/review', element: <ReviewCart /> },
      {
        path: '/customer',
        element: <Account />,
        children: [
          { path: '/account', element: <Customer.Account /> },
          {
            path: '/order/:labelId',
            element: <Customer.Order />,
          },
          {
            path: '/order',
            element: <Navigate to='/customer/order/order-history' />,
          },
          { path: '/', element: <Navigate to='/customer/account' /> },
          { path: '*', element: <Navigate to='/404' /> },
        ],
      },
      { path: '404', element: <Error.NotFoundView /> },
      { path: '*', element: <Navigate to='/404' /> },
    ],
  },
];

export default routes;
