import { getUserWithCharByUserId } from "../Modules/UserManager"
import { useState, useEffect } from "react"
import { HomeCard } from "./HomeCard"
import "./Home.css"

export const Home = () => {
    const [ users, setUser ] = useState([])

    const getUser = (id) => {
       return getUserWithCharByUserId(id)
        .then(userRes => {
            setUser(userRes)
        })
    }


    useEffect(()=>{
        getUser(JSON.parse(sessionStorage.getItem("sunshine_user")).id)
        
    },[])

    
    return (
        <>
        {users.map(user =>
            <HomeCard 
                key={user.id}
                user={user}
                />)}
        
        </>
    )
}