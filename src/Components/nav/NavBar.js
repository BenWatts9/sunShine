import { Link } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"


export const NavBar = (props) => {

  const Logout =()=>{
    sessionStorage.removeItem("sunshine_user")
  }


  return (
    <>
    
    <ul className="navbar">
      <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/characters">Characters</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/notes">Notes</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/matchups">Matchups</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/login" onClick={()=>{Logout()}}>Logout</Link>
      </li>
    </ul>
    
    </>
  )
}