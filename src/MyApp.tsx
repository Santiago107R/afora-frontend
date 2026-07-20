import {
    useQuery,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { type PropsWithChildren } from 'react'
import { RouterProvider } from "react-router"
import { AppRouter } from './app.router'
import { Toaster } from 'sonner'
import { useAuthStore } from './auth/store/auth.store'
import { CustomFullScreenLoading } from './components/CustomFullScreenLoading'

const queryCLient = new QueryClient()

const CheckAuthProvider = ({ children }: PropsWithChildren) => {
    const { checkAuthStatus } = useAuthStore()

    const { isLoading } = useQuery({
        queryKey: ['auth'],
        queryFn: checkAuthStatus,
        refetchOnWindowFocus: true,
        staleTime: Infinity,
        retry: false,
    })

    if (isLoading) return <CustomFullScreenLoading />

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
