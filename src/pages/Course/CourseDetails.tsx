interface CourseDetails {
    id: string
    name: string
    category: string
    teacher: string
}

interface CourseDetailsProps {
    curso: CourseDetails
    index: number
    openEditCourseModal: (id: string) => void
}

export function CourseDetails({
    curso,
    index,
    openEditCourseModal
}: CourseDetailsProps) {
    return(
        <tr key={curso.name} onClick={() => openEditCourseModal(curso.id)} className={'border-b border-zinc-500 border-solid cursor-pointer transition-colors hover:bg-opacity-85 last:border-b-0 ' + (index%2!=0?"bg-zinc-800":"bg-zinc-700")}>
            <td className="py-4 px-7 text-left">{curso.name}</td>
            <td className="py-4 px-7 text-left">{curso.category}</td>
            <td className="py-4 px-7 text-left">{curso.teacher}</td>
        </tr>
    )
}