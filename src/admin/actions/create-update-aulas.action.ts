import { aforaApi } from "@/api/aforaApi";
import type { Aula } from "@/interfaces/aula.response";

export const createUpdateAula = async (aulaLike: Partial<Aula>): Promise<Aula> => {
    const { id, ...rest } = aulaLike

    const isCreating = id === 'new'

    let resultado

    if (isCreating) {
        resultado = await aforaApi.post<Aula>('/aula', {
            ...rest
        })
    } else {
        resultado = await aforaApi.patch<Aula>(`/aula/${id}`, {
            ...rest
        })
    }

    return resultado
}