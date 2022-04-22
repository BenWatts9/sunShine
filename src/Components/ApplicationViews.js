import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { CharacterList } from "./Characters/CharacterList"
import { Home } from "./nav/Home"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateOutlet = () => {
        return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
      }
    
      const setAuthUser = (user) => {
        sessionStorage.setItem("sunshine_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("sunshine_user") !== null)
      }

    return (
        <>
            <Routes>
                {/* <Route path="/" element={<PrivateOutlet />}> */}
                    <Route path="home" element={<Home />}/>
                    <Route path="characters" element={<CharacterList/>}/>
                    
                {/* </Route> */}
            </Routes>
        </>
    )
}