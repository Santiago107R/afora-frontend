import { apiClient } from "@/api/apiClient";
import type { AuthResponse } from "../interfaces/auth.response";

export const loginAction = async (
    name: string,
    password: string
): Promise<AuthResponse> => {
    const aforaAPi = new apiClient(import.meta.env.VITE_API_URL)
    try {
        const resultado = await aforaAPi.post<AuthResponse>('/auth/login', {
            name,
            password,
        })

        return resultado
    } catch (error) {
        console.log(error)
        throw error
    }
}