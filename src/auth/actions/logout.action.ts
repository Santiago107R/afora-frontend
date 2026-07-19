import { apiClient } from "@/api/apiClient";
import type { AuthResponse } from "../interfaces/auth.response";

export const logoutAction = async (): Promise<AuthResponse | null> => {
    const aforaAPi = new apiClient(import.meta.env.VITE_API_URL)

    try {
        return await aforaAPi.post<AuthResponse>('/auth/logout', {})
    } catch (error) {
        console.warn('Logout falló, se limpiará el estado local:', error)
        return null
    }
}