import { useState } from "react"
import './styles/UserLogged.css'

const UserLogged = ({ user, setUser }) => {
    
    const handleLogout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser()
    }

    return (
    <article>
        <header>
            {
                user.gender == 'female' ? <i class='bx bx-female-sign'></i> : <i class='bx bx-male-sign'></i>
            }
        </header>
        <h2>{user.firstName} {user.lastName}</h2>
        <button onClick={handleLogout}>Logout</button>
    </article>
  )
}

export default UserLogged