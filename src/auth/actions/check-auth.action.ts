import { aforaApi } from "@/api/aforaApi"
import type { AuthResponse } from "../interfaces/auth.response"

export const checkAuthAction = async (): Promise<AuthResponse> => {
    try {
        const resultado = await aforaApi.get<AuthResponse>('/auth/check-status')

        return resultado
    } catch (error) {
        throw new Error('Token expired or not valid')
    }
}