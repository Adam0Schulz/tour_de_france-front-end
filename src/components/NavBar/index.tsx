import { Link } from "react-router-dom"
import './style.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <ul>
            <Link to={"/home"}><li>Home</li></Link>
            <Link to={"/teams"}><li>Teams</li></Link>
            <Link to={"/cyclists"}><li>Cyclists</li></Link>
        </ul>
    </div>
  )
}

export default NavBar