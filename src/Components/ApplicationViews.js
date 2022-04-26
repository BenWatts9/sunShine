import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { CharacterList } from "./Characters/CharacterList"
import { Home } from "./nav/Home"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NotesList } from "./Notes/NotesList"
import { NotesCharacterList } from "./Notes/NotesCharacterList"
import { NoteForm } from "./Notes/AddNoteForm"
import { EditNoteForm } from "./Notes/EditNoteForm"
import { NavBar } from "./nav/NavBar"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateOutlet = () => {
        return isAuthenticated ? <><NavBar/> <Outlet /> </>: <Navigate to="/login" />
      }
    
      const setAuthUser = (user) => {
        sessionStorage.setItem("sunshine_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("sunshine_user") !== null)
      }



      const LoginContainer = () => {
        return(
        <>
            <Routes>
                <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
         </> 
        )
      }

      const DefaultContainer = () => {
       return( <>
           
            <Routes>
                <Route path="/" element={<PrivateOutlet />}>
                    <Route path="home" element={<Home />}/>
                    <Route path="characters" element={<CharacterList/>}/>
                    
                    <Route path="notes" element={<NotesList />} />
                    <Route path="notes/:characterId/add" element={<NoteForm />} />
                    <Route path="notes/:characterId" element={<NotesCharacterList />} />
                    <Route path="notes/:noteId/edit" element={<EditNoteForm />} />
                </Route>
            </Routes>
        </>
       )
      }


    return (
        <>
            <LoginContainer />
            <DefaultContainer />
        </>
    )
}