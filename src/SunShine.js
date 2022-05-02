import './SunShine.css';
import { NavBar } from './Components/nav/NavBar';
import { useState } from 'react';
import { ApplicationViews } from './Components/ApplicationViews';
import { Footer } from './Components/nav/Footer';

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

    <div className="App">
      <header className="App-header">
        <div className='page-header'>
        <img src={"images/sunShineFlat.png"} className="App-logo" alt="logo" />
         
        </div>
        
      

        </header>
        <body className="App-body">

            <ApplicationViews setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}/>
        </body>
    <footer>
      <Footer />
    </footer>
    </div>
  );
}
