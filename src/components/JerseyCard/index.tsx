import { Jersey } from 'api/enums'
import './style.css'
import React from 'react'
import { useGetCyclistByJersey } from 'hooks/cyclist/useGetCyclistByJersey'
import whiteJersey from 'assets/white-jersey.svg'
import greenJersey from 'assets/green-jersey.svg'
import dottedJersey from 'assets/dotted-jersey.svg'
import yellowJersey from 'assets/yellow-jersey.svg'

interface Props {
    jersey: Jersey,
}

const JerseyCard = ({jersey}: Props) => {

    let img = whiteJersey
    switch (jersey) {
      case Jersey.DOTTED:
        img = dottedJersey
        break;
      case Jersey.GREEN:
        img = greenJersey
        break;
      case Jersey.WHITE:
        img = whiteJersey
        break;
      case Jersey.YELLOW:
        img = yellowJersey
        break;
      default:
        break;
    }
    const {data, isLoading, isError} = useGetCyclistByJersey(jersey)

    if(isLoading) <>Loading...</>
    if(isError) <>Oops! Something went wrong!</>

  return (
    <div className={'jersey-card jersey-card--' + jersey.toLowerCase()}>
        <img className='jersey-img' src={img} alt="jersey" />
        {/* <h1>{(jersey == Jersey.DOTTED ? 'POLKA DOT' : jersey)}</h1> */}
        <h2>{data?.firstName + ' ' + data?.lastName}</h2>
        <h5><span className='thin'>Mountain points: </span>{data?.mountainPoints}</h5>
        <h5><span className='thin'>Sprint points: </span>{data?.sprintPoints}</h5>
        <h5><span className='thin'>Total time: </span>{data?.totalTime} h</h5>
        <h5><span className='thin'>Age: </span>{data?.age}</h5>
    </div>
  )
}

export default JerseyCard