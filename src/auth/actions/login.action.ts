import { apiClient } from "@/api/apiClient";
import type { AuthResponse } from "../interfaces/auth.response";

export const loginAction = async (
    username: string,
    password: string
): Promise<AuthResponse> => {
    const aforaAPi = new apiClient(import.meta.env.VITE_API_URL)
    try {
        const resultado = await aforaAPi.post<AuthResponse>('/auth/login', {
            username,
            password,
        })

        return resultado
    } catch (error) {
        console.log(error)
        throw error
    }
}