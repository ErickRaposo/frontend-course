import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

interface AuthContextType {
    signed: boolean;
    signIn: ({ email, password }: SignInType) => void
  }

interface AuthProviderProps {
    children: ReactNode;
}

interface SignInType {
    email: string
    password: string
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider ({children}: AuthProviderProps) {
    const [token, setToken] =  useState("")

    const signIn = async ({ email, password }: SignInType) => {
        const response = await api.post("/auth/login", {
            email,
            password
        })

        if(response.data.error){
            alert(response.data.error) 
        } else {
            setToken(response.data)
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${token}`
            localStorage.setItem("@Auth:token", token)
        }
    }

    return (
        <AuthContext.Provider 
            value={{
                signed: !!token,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}