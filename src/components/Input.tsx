import { ComponentProps } from "react";


export function Input({...props}: ComponentProps<'input'>) {
    return (
        <>
            <input className="w-full h-12 py-4 px-3 rounded-lg placeholder-zinc-300 bg-zinc-800 border border-zinc-600 border-solid" {...props} />
        </>
    )
}