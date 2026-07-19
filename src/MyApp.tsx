import {
    useQuery,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { type PropsWithChildren } from 'react';
import { RouterProvider } from "react-router"
import { AppRouter } from './app.router';
import { Toaster } from 'sonner';
import { useAuthStore } from './auth/store/auth.store';
import { CustomFullScreenLoading } from './components/CustomFullScreenLoading';

const queryCLient = new QueryClient()

const CheckAuthProvider = ({ children }: PropsWithChildren) => {
    const { checkAuthStatus, authStatus } = useAuthStore()

    useQuery({
        queryKey: ['auth'],
        queryFn: checkAuthStatus,
        refetchInterval: 1000 * 60 * 1.5,
        refetchOnWindowFocus: true,
        retry: false,
    })
    // const { isLoading } = useQuery({
    //     queryKey: ['auth'],
    //     queryFn: checkAuthStatus,
    //     refetchInterval: 1000 * 60 * 1.5,
    //     refetchOnWindowFocus: true,
    // })

    // if (isLoading) return <CustomFullScreenLoading />
    if (authStatus === 'checking') {
        return <CustomFullScreenLoading />
    }

    return children
}

const MyApp = () => {
    return (
        <>
            <QueryClientProvider client={queryCLient}>
                <Toaster />

                <CheckAuthProvider>
                    <RouterProvider router={AppRouter} />
                </CheckAuthProvider>
            </QueryClientProvider>
        </>
    )
}

export default MyApp
