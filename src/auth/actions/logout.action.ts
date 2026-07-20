import { aforaApi } from "@/api/aforaApi"
import type { AuthResponse } from "../interfaces/auth.response"

export const logoutAction = async (): Promise<AuthResponse | null> => {
    try {
        return await aforaApi.post<AuthResponse>('/auth/logout', {})
    } catch (error) {
        console.warn('Logout falló, se limpiará el estado local:', error)
        return null
    }
}