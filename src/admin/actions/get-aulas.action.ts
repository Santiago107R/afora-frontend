import { aforaApi } from "@/api/aforaApi"
import type { AulaResponse } from "@/interfaces/aula.response"

const getAulas = async (): Promise<AulaResponse> => {
    try {
        const resultado = await aforaApi.get<AulaResponse>('/aula')

        return resultado
    } catch (error) {
        throw new Error(`Error, details: ${error}`)
    }
}

export default getAulas