import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

export function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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

    }

    return (
        <>
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
            </div>
        </>
    )
}