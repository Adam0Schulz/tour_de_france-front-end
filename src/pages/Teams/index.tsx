
import { useGetAllTeams } from 'hooks/team/useGetAllTeams';
import NavBar from 'components/NavBar';
import Table from 'components/Table';

const Teams = () => {

    const { data: teams, isLoading, isError } = useGetAllTeams()

    if (isLoading) <>Loading...</>
    if (isError) <>Oops! Something went wrong!</>

    return (
        <div>
            <NavBar />
            <div className='page-cont'>
                <h1 className='page-heading'>Teams: </h1>
                {teams && <Table objects={teams} />}
            </div>

        </div>
    )
}

export default Teams