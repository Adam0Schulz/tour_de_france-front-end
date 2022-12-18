import { Jersey } from 'api/enums'
import JerseyCard from 'components/JerseyCard'
import { useGetCyclistByJersey } from 'hooks/cyclist/useGetCyclistByJersey'
import './style.css'
import NavBar from 'components/NavBar'
import headingImg from 'assets/tour-de-france-logo.webp'

const Home = () => {

  return (
    <>
    <NavBar />
    <div className='page-cont'>
        <div className='heading-img-cont'>
          <img className='heading-img' src={headingImg} />
        </div>
        
        <div className='jersey-podium'>
            <JerseyCard jersey={Jersey.YELLOW} />
            <JerseyCard jersey={Jersey.WHITE} />
            <JerseyCard jersey={Jersey.DOTTED} />
            <JerseyCard jersey={Jersey.GREEN} />
        </div>
    </div>
    </>
  )
}

export default Home