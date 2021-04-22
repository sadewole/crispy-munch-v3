import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import Home from 'src/views/home';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
    ]
  }
];

export default routes;
