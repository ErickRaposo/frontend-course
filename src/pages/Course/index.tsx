import { useState } from "react";
import { Button } from "../../components/Button";
import { CreateCourseModal } from "./CreateCourseModal";
import { CourseDetails } from "./CourseDetails";
import { EditCourseModal } from "./EditCourseModal";
import { CourseData, CreateCourseData } from "../../interfaces/course-data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCourseData } from "../../hooks/useCourseData";
import { useCreateCourse, useDeleteCourse, useEditCourse } from "../../hooks/useMutationCourse";

const queryClient = new QueryClient();

export function Course() {
    const [isCreateCourseModalOpen, setIsCreateCourseModalOpen] = useState(false);
    const [isEditCourseModalOpen, setIsEditCourseModalOpen] = useState(false);
    const [courseToEdit, setCourseToEdit] = useState<CourseData>({
        id: "",
        name: "",
        category: "",
        teacher: ""
    })
    const mutateEditCourse = useEditCourse()
    const mutateCreateCourse = useCreateCourse()
    const mutateDeleteCourse = useDeleteCourse()
    const { data } = useCourseData()

    function openEditCourseModal(id: string){
        const courseToEdit = data?.find(course => course.id === id);
        if (courseToEdit) {
            setCourseToEdit(courseToEdit);
            setIsEditCourseModalOpen(true);
        }
    }

    function closeEditCourseModal(){
        setIsEditCourseModalOpen(false)
    }

    function openCreateCourseModal(){
        setIsCreateCourseModalOpen(true)
    }

    function closeCreateCourseModal(){
        setIsCreateCourseModalOpen(false)
    }

    function createCourse(data: CreateCourseData){
        mutateCreateCourse.mutate(data)
        setIsCreateCourseModalOpen(false)
    }

    function editCourse(data: CourseData){
        mutateEditCourse.mutate(data)
        setIsEditCourseModalOpen(false)
    }

    function deleteCourse(courseId: string){
        mutateDeleteCourse.mutate(courseId)
        setIsEditCourseModalOpen(false)
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex items-center mt-36 flex-col space-y-10">
                <h1 className="font-bold text-4xl text-sky-600 text">Cursos</h1>
                <table className="rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-sky-700 border-b border-zinc-800">
                            <th className="py-4 px-7 text-left">Curso</th>
                            <th className="py-4 px-7 text-left">Categoria</th>
                            <th className="py-4 px-7 text-left">Professor(a)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((curso, index) => {
                            return(
                                <CourseDetails key={curso.id} openEditCourseModal={openEditCourseModal} curso={curso} index={index} />
                            )
                        })}
                    </tbody>
                </table>
                <Button onClick={openCreateCourseModal} type="button">
                    Novo curso
                </Button>

                {isCreateCourseModalOpen && (
                    <CreateCourseModal createCourse={createCourse} closeCreateCourseModal={closeCreateCourseModal} />
                )}

                {isEditCourseModalOpen && (
                    <EditCourseModal course={courseToEdit} editCourse={editCourse} deleteCourse={deleteCourse} closeEditCourseModal={closeEditCourseModal} />
                )}
            </div>
        </QueryClientProvider>
    )
}
