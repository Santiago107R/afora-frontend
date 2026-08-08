import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import getAulas from "../actions/get-aulas.action"
import { createUpdateAula } from "../actions/create-update-aulas.action"
import type { Aula } from "@/interfaces/aula.response"
import getEstados from "../actions/get-estados.action"


export const useAulas = () => {
    const queryClient = useQueryClient()
    const query = useQuery({ queryKey: ['aulas'], queryFn: getAulas })

    const mutation = useMutation({
        mutationFn: createUpdateAula,
        onSuccess: (aula: Aula) => {
            queryClient.invalidateQueries({ queryKey: ['aulas'] })

            queryClient.setQueryData(['aulas'], aula)
        }
    })

    return { ...query, mutation }
}

export const useEstados = () => {
    const queryClient = useQueryClient()
    const query = useQuery({ queryKey: ['estados'], queryFn: getEstados })

    const mutation = useMutation({
        mutationFn: createUpdateAula,
        onSuccess: (aula: Aula) => {
            queryClient.invalidateQueries({ queryKey: ['estados'] })

            queryClient.setQueryData(['estados'], aula)
        }
    })

    return { ...query, mutation }
}
