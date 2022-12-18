import { useQuery } from "react-query"
import { CyclistCalls } from 'api/calls'
import { Cyclist } from "api/models"


export const useGetAllCyclist = () => {
    return useQuery<Cyclist[],Error>(
        "cyclists",
        CyclistCalls.get,

    )
}