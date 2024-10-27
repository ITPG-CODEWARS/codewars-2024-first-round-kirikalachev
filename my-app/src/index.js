import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import MainContent from './MainContent';


import Trains from './secondary-pages/Trains';
import Train from './secondary-pages/Train';
import Blog from './secondary-pages/Blog';
import Contacts from './secondary-pages/Contacts';
import History from './secondary-pages/History';
import Article from './secondary-pages/Article';

import Layout from './layout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Layout />, // Use Layout as the parent element
    children: [
      { path: '/', element: <MainContent /> },
      { path: '/trains', element: <Trains /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/history', element: <History /> },
      { path: '/article', element: <Article /> },
      { path: '/train', element: <Train /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
