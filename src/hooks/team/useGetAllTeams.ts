import { useQuery } from "react-query"
import { TeamCalls } from 'api/calls'
import { Team } from "api/models"


export const useGetAllTeams = () => {
    return useQuery<Team[],Error>(
        "teams",
        TeamCalls.get,

    )
}