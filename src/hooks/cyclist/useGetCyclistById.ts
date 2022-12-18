import { useQuery } from "react-query"
import { CyclistCalls } from 'api/calls'
import { Cyclist } from "api/models"


export const useGetCyclistById = (id: number) => {
    return useQuery<Cyclist,Error>(
        ["researcher", id],
        () => CyclistCalls.getById(id),

    )
}