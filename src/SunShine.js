import './SunShine.css';
import { NavBar } from './Components/nav/NavBar';
import { useState } from 'react';
import { ApplicationViews } from './Components/ApplicationViews';
import { Footer } from './Components/nav/Footer';
import { Link } from 'react-router-dom';



export const SunShine = () => {
  
  
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("sunshine_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("sunshine_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
    }
    
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("sunshine_user") !== null)
      }
  
  
  return (

    <div className="App" >
      <header className="App-header">
        <div className='page-header'>
          <Link className="nav-link" to="/home">
            <img src={"/images/sunShineFlat.png"} className="App-logo" alt="logo" />
          </Link>
         
        </div>
        
      

        </header>
        <div className="App-body">
            <ApplicationViews setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}/>
        </div>
    <footer>
      <Footer />
    </footer>
    </div>
  );
}
