import { apiClient } from "@/api/apiClient";
import type { AuthResponse } from "../interfaces/auth.response";

export const checkAuthAction = async (): Promise<AuthResponse> => {
    const aforaApi = new apiClient(import.meta.env.VITE_API_URL)
    try {
        const resultado = await aforaApi.get<AuthResponse>('/auth/check-status')

        return resultado
    } catch (error) {
        throw new Error('Token expired or not valid')
    }
}