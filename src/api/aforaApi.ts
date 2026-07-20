import { useAuthStore } from "@/auth/store/auth.store"
import { apiClient } from "./apiClient"

export const aforaApi = new apiClient(import.meta.env.VITE_API_URL)

aforaApi.useResponseInterceptor(async (response) => {
    if (response.status === 401) {
        console.warn("Sesión inválida o expirada (Cookie no válida).")

        useAuthStore.getState().clear()

        // window.location.href = '/#/auth/login'
        window.location.hash = '/auth/login'
    }

    return response
})