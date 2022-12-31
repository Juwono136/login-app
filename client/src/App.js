import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import all components
import Username from './components/Username';
import Reset from './components/Reset';
import Register from './components/Register';
import Recorvery from './components/Recorvery';
import Profile from './components/Profile';
import Password from './components/Password';
import PageNotFound from './components/PageNotFound';


// root routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <Username />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/password',
        element: <Password />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/recorvery',
        element: <Recorvery />
    },
    {
        path: '/reset',
        element: <Reset />
    },
    {
        path: '*',
        element: <PageNotFound />
    }
])

export default function App() {
    return (
        <main>
            <RouterProvider router={router}>
            </RouterProvider>
        </main>
    )
}
