import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import getAulas from "../actions/get-aulas.action"
import { createUpdateAula } from "../actions/create-update-aulas.action"
import type { Aula } from "@/user/types/aula.response"


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

// export const mutationAula = () => {

//     return useMutation({
//         mutationFn: createUpdateAula,
//         onSuccess: (aula: Aula) => {
//             queryClient.invalidateQueries({ queryKey: ['aulas'] })

//             queryClient.setQueryData(['aulas'], aula)
//         }
//     })
// }