import { X } from "lucide-react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { CourseData } from "../../interfaces/course-data";

interface closeEditCourseModalProps {
    closeEditCourseModal: () => void
    editCourse: (data: CourseData) => void
    deleteCourse: (id: string) => void
    course: CourseData
}

export function EditCourseModal({ closeEditCourseModal, editCourse, deleteCourse, course }: closeEditCourseModalProps ){
    const [name, setName] = useState(course?.name)    
    const [category, setCategory] = useState(course?.category)
    const [teacher, setTeacher] = useState(course?.teacher)

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

    function handleEditCourse(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault()
        
        const data = {
            id: course?.id,
            name,
            category,
            teacher
        }

        editCourse(data)
    }

    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className='flex flex-col items-center w-[480px] bg-zinc-900 py-5 px-6 border border-zinc-700 rounded-xl space-y-8'>
                <div className="flex w-full items-center justify-between">
                    <span className='font-bold text-2xl text-sky-600'>Editar curso</span>
                    <X className="cursor-pointer" onClick={closeEditCourseModal}/>
                </div>
                <form onSubmit={handleEditCourse} className="flex flex-col items-center w-[432px] space-y-8">
                    <div className="space-y-3">
                        <Input onChange={handleNameChange} value={name} placeholder="Nome" type="text" required />
                        <Input onChange={handleCategoryChange} value={category} placeholder="Categoria" type="text" required />
                        <Input onChange={handleTeacherChange} value={teacher} placeholder="Professor" type="text" required />
                    </div>
                    <div className="flex w-full gap-5">
                        <Button type="submit" size="secondary">
                            Editar
                        </Button>
                        <Button onClick={() => deleteCourse(course.id)} type="button" variant="secondary" size="secondary">
                            Excluir
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}