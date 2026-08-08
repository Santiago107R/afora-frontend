import { aforaApi } from "@/api/aforaApi"
import type { EstadoResponse } from "@/interfaces/estado.response"

const getEstados = async (): Promise<EstadoResponse> => {
    try {
        const resultado = await aforaApi.get<EstadoResponse>('/estado')

        return resultado
    } catch (error) {
        throw new Error(`Error, details: ${error}`)
    }
}

export default getEstados