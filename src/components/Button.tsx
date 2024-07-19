import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
    base: 'rounded-lg p-4 transition-colors font-bold tracking-wide',
    variants: {
        variant: {
            primary: 'bg-sky-600 hover:bg-sky-800',
            secondary: 'bg-red-600 hover:bg-red-800'
        },
        size: {
            primary: '',
            secondary: 'w-full'
        }
    },

    defaultVariants: {
        variant: 'primary'
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({variant, size})}>
            {children}
        </button>
    )
}