import { aforaApi } from "@/api/aforaApi"
import type { AuthResponse } from "../interfaces/auth.response"

export const loginAction = async (
    name: string,
    password: string
): Promise<AuthResponse> => {
    try {
        const resultado = await aforaApi.post<AuthResponse>('/auth/login', {
            name,
            password,
        })

        return resultado
    } catch (error) {
        console.log(error)
        throw error
    }
}