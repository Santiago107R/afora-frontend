import { apiClient } from "@/api/apiClient";
import type { AuthResponse } from "../interfaces/auth.response";

export const logoutAction = async (): Promise<AuthResponse> => {
    const aforaAPi = new apiClient(import.meta.env.VITE_API_URL)
    try {
        const resultado = await aforaAPi.get<AuthResponse>('/auth/logout')

        return resultado
    } catch (error) {
        console.log(error)
        throw error
    }
}