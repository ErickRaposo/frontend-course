import { X } from "lucide-react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ChangeEvent, FormEvent, useState } from "react";

interface closeCreateCourseModalProps {
    closeCreateCourseModal: () => void
}

export function CreateCourseModal({ closeCreateCourseModal }: closeCreateCourseModalProps ){
    const [name, setName] = useState("")    
    const [category, setCategory] = useState("")
    const [teacher, setTeacher] = useState("")

    function handleNameChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setName(event.target.value)
    }

    function handleCategoryChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setCategory(event.target.value)
    }

    function handleTeacherChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setTeacher(event.target.value)
    }

    function handleCreateCourse(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault()
        
    }
    
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className='flex flex-col items-center w-[480px] bg-zinc-900 py-5 px-6 border border-zinc-700 rounded-xl space-y-8'>
                <div className="flex w-full items-center justify-between">
                    <span className='font-bold text-2xl text-sky-600'>Criar curso</span>
                    <X className="cursor-pointer" onClick={closeCreateCourseModal}/>
                </div>
                <form onSubmit={handleCreateCourse} className="flex flex-col items-center w-[432px] space-y-8">
                    <div className="space-y-3">
                        <Input onChange={handleNameChange} placeholder="Nome" type="text" required />
                        <Input onChange={handleCategoryChange} placeholder="Categoria" type="text" required />
                        <Input onChange={handleTeacherChange} placeholder="Professor" type="text" required />
                    </div>
                    <Button type="submit">
                        Cadastrar
                    </Button>
                </form>
            </div>
        </div>
    )
}