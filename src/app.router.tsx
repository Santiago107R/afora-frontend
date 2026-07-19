import { createHashRouter, Navigate } from "react-router";
import { lazy } from "react";

import HomePage from './user/pages/home/HomePage';
import ListPage from "@/user/pages/list/ListPage";
import LoginPage from "./auth/pages/login/LoginPage";
import RegisterPage from "./auth/pages/register/RegisterPage";

import { AdminRoute, AuthenticatedRoute, NotAuthenticatedRoute } from "./components/routes/ProtectedRoutes";
import AuthLayout from "./auth/layouts/AuthLayout";
import { RootRedirect } from "./components/routes/RootRedirect";

const UserLayout = lazy(() => import('./user/layouts/UserLayout'));
// const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout')); // Cuando lo tengas

export const AppRouter = createHashRouter([
    {
        path: '/',
        element: <RootRedirect />,
    },

    {
        path: '/user',
        element: (
            <AuthenticatedRoute>
                <UserLayout />
            </AuthenticatedRoute>
        ),
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'lista',
                element: <ListPage />,
            },
        ],
    },

    {
        path: '/admin',
        element: (
            <AdminRoute>
                <div>Próximamente: Admin Layout</div>
            </AdminRoute>
        ),
        children: [
            {
                index: true,
                element: <div>Dashboard de Admin</div>,
            },
        ],
    },

    {
        path: '/auth',
        element: (
            <NotAuthenticatedRoute>
                <AuthLayout />
            </NotAuthenticatedRoute>
        ),
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    },

    {
        path: '*',
        element: <Navigate to="/auth/login" replace />
    }
]);