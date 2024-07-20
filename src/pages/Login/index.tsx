import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Context } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const context = useContext(Context)

    function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setEmail(event.target.value)
    }

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setPassword(event.target.value)
    }

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault()

        context?.handleLogin(email, password)
    }

    if(!context?.authenticated){
        return (
            <div className="flex h-screen items-center justify-center flex-col space-y-10">
                <h1 className="font-bold text-4xl text-sky-600 text">Entrar</h1>
                <form onSubmit={handleLogin} className="flex flex-col items-center w-96 space-y-8">
                    <div className="space-y-3">
                        <Input onChange={handleEmailChange} placeholder="E-mail" type="email" required />
                        <Input onChange={handlePasswordChange} placeholder="Senha" type="password" required />
                    </div>
                    <Button type="submit">
                        Entrar
                    </Button>
                </form>
                <button onClick={() => navigate('/register')} type="button" className="text-sm underline text-sky-400">Cadastrar</button>
            </div>
        )
    } else {
        return <Navigate to="/" />
    }
}