import { useAuthStore } from "@/auth/store/auth.store"
import { Navigate } from "react-router"

export const RootRedirect = () => {
    const { authStatus, isAdmin } = useAuthStore()

    if (authStatus === 'checking') return null

    if (authStatus === 'not-authenticated') {
        return <Navigate to="/auth/logindev" replace />
    }

    if (isAdmin()) {
        return <Navigate to="/admin" replace />
    }

    return <Navigate to="/user" replace />
}