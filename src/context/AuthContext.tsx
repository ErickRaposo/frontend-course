import {  createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import axios from "axios";

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContext {
    authenticated: boolean
    handleLogin: (email: string, password: string) => void
    handleRegister: (name: string, email: string, password: string) => void
    handleLogout: () => void
}

const Context = createContext<AuthContext | undefined>(undefined)

function AuthProvider({ children }: AuthProviderProps) {

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("@Auth:token")

        if (token) {
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    }, [])

    async function handleLogin(email: string, password: string) {
        const { data } = await axios.post('http://localhost:8080/auth/login', {
            email,
            password
        })

        localStorage.setItem("@Auth:token", JSON.stringify(data.token))
        
        api.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${data.token}`

        setAuthenticated(true)
    }

    async function handleRegister(name: string, email: string, password: string) {
        const { data } = await axios.post('http://localhost:8080/auth/register', {
            name,
            email,
            password
        })

        localStorage.setItem("@Auth:token", JSON.stringify(data.token))
        
        api.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${data.token}`

        setAuthenticated(true)
    }

    function handleLogout() {
        setAuthenticated(false)

        localStorage.removeItem("@Auth:token")
        
        api.defaults.headers.common[
            "Authorization"
        ] = undefined
    }

    return (
        <Context.Provider value={{authenticated, handleLogin, handleRegister, handleLogout}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }