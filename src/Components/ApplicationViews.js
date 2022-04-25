import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { CharacterList } from "./Characters/CharacterList"
import { Home } from "./nav/Home"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NotesList } from "./Notes/NotesList"
import { NotesCharacterList } from "./Notes/NotesCharacterList"

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
                <Route path="/" element={<PrivateOutlet />}>
                    <Route path="home" element={<Home />}/>
                    <Route path="characters" element={<CharacterList/>}/>
                    
                    <Route path="notes" element={<NotesList />} />
                    <Route path="notes/:characterId" element={<NotesCharacterList />} />
                </Route>

                <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />

                <Route path="/register" element={<Register />} />

            </Routes>
        </>
    )
}