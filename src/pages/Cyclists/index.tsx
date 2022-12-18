import NavBar from 'components/NavBar'
import Table from 'components/Table'
import { useGetAllCyclist } from 'hooks/cyclist/useGetAllCyclists'
import React from 'react'

const Cyclists = () => {
    
    const { data: cyclists, isLoading, isError } = useGetAllCyclist()

  return (
    <div>
        <NavBar />
            <div className='page-cont'>
                <h1 className='page-heading'>Cyclists: </h1>
                {cyclists && <Table objects={cyclists} />}
            </div>
    </div>
  )
}

export default Cyclists