import { ProtectedRoute } from '@/shared/lib/isAuthenticated';
import React from 'react';
import { createBrowserRouter } from 'react-router';
import { Layout } from '../layout';

const DevicePage = React.lazy(() => import('@/pages/DevicePage'));
const ArchiveOfItems = React.lazy(() => import('@/pages/ArchiveOfItems'));
const DeviceSetting = React.lazy(() => import('@/pages/DeviceSetting'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <DevicePage /> },
      {
        path: '/settings',
        element: (
          <ProtectedRoute>
            <DeviceSetting />
          </ProtectedRoute>
        ),
      },
      {
        path: '/archive',
        element: (
          <ProtectedRoute>
            <ArchiveOfItems />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
