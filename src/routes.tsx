import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import Home from 'src/views/home';
import ExploreMenu from './views/menu';
import Cart from './views/cart';
import ReviewCart from './views/review';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <ExploreMenu /> },
      { path: '/cart', element: <Cart /> },
      { path: '/cart/review', element: <ReviewCart /> },
    ],
  },
];

export default routes;
