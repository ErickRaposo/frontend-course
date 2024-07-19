import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

export function Register() {
    const [name, setName] = useState("")
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

    function handleNameChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setName(event.target.value)
    }

    async function handleRegister(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault()

        const data = {
            name,
            email,
            password
        }
        const response = await api.post("/auth/register", data)
        console.log(response.data)
    }

    return (
        <>
            <div className="flex h-screen items-center justify-center flex-col space-y-10">
                <h1 className="font-bold text-4xl text-sky-600 text">Registrar</h1>
                <form onSubmit={handleRegister} className="flex flex-col items-center w-96 space-y-8">
                    <div className="space-y-3">
                        <Input onChange={handleNameChange} placeholder="Nome" type="text" required />
                        <Input onChange={handleEmailChange} placeholder="E-mail" type="email" required />
                        <Input onChange={handlePasswordChange} placeholder="Senha" type="password" required />
                    </div>
                    <Button type="submit">
                        Cadastrar
                    </Button>
                </form>
            </div>
        </>
    )
}