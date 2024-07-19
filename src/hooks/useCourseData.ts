import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

const fetchData = async () => {
    const response = await api('/api/task')
    return response?.data;
}

export function useTaskData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['course-data']
    })
    
    return query
}