import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";

interface PostData {
    name: string,
    category: string,
    teacher: string
}

interface PutData {
    id: string,
    name: string,
    category: string,
    teacher: string
}

const postData = async ({ name, category, teacher }: PostData) => {
    console.log("ajuda ai")
    return await api.post('/course', {
        name,
        category,
        teacher
    })
}

const editData = async ({ name, category, teacher, id }: PutData) => {
    console.log("ajuda ai")
    return await api.put(`/course/${id}`, {
        name,
        category,
        teacher
    })
}

const deleteData = async (courseId: string) => {
    console.log("ajuda ai")
    return await api.delete(`/course/${courseId}`)
}


export function useCreateCourse() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        onSuccess: ()=> {
            queryClient.invalidateQueries({queryKey: ['course-data']})
        }
    })

    return mutate
}

export function useEditCourse() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: editData,
        onSuccess: ()=> {
            queryClient.invalidateQueries({queryKey: ['course-data']})
        }
    })

    return mutate
}

export function useDeleteCourse() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: deleteData,
        onSuccess: ()=> {
            queryClient.invalidateQueries({queryKey: ['course-data']})
        }
    })

    return mutate
}