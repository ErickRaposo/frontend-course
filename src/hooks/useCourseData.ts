import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import { CourseData } from "../interfaces/course-data";

const fetchData = async () => {
    const response = await api.get<CourseData[]>('/course')
    return response.data;
}

export function useCourseData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['course-data']
    })
    
    return query
}