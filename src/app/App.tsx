import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './providers/routes';

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}

export default App;
