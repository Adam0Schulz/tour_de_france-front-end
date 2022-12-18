import { useQuery } from "react-query"
import { CyclistCalls } from 'api/calls'
import { Cyclist } from "api/models"
import {Jersey} from "api/enums"


export const useGetCyclistByJersey = (jersey: Jersey) => {
    return useQuery<Cyclist,Error>(
        ["cyclist", jersey],
        () => CyclistCalls.getOneByParams({name: "jersey", value: jersey}),

    )
}