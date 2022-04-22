import './App.css';
import { NavBar } from './Components/nav/NavBar';
import { useState } from 'react';
import { ApplicationViews } from './Components/ApplicationViews';

export const SunShine = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("nutshell_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
    }
    
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
      }
  
  
  return (

    <div className="App">
      <header className="App-header">
        <img src={"images/shine.png"} className="App-logo" alt="logo" />
        
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
      <ApplicationViews setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}/>
      </header>

    <footer><a
          className="App-link"
          href="https://slippi.gg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Melee
        </a></footer>
    </div>
  );
}
