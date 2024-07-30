import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Xaa = ({ children }: React.PropsWithChildren) => {
  return <>{children}</>;
};

const Yaa = () => {
  return 'use client1212';
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Xaa />,
    // loader: rootLoader,
    children: [
      {
        path: 'team',
        element: <Yaa />,
        // loader: teamLoader,
      },
    ],
  },
]);
