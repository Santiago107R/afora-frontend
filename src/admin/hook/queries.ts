import { useQuery } from "@tanstack/react-query"
import getAulas from "../actions/get-aulas.action"

export const useAulas = () => {
    return useQuery({ queryKey: ['aulas'], queryFn: getAulas })
}