import React, { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import { AiOutlineLoading } from "react-icons/ai";

const button = tv({
    base: "py-3 px-6 rounded-lg border-[1px] flex justify-center",
    variants: {
        loading: {
            true: "opacity-60 cursor-auto"
        },
        color: {
            primary: "bg-primary text-white border-primary",
            red: "bg-red text-white border-primary",
            "outline-white": "bg-transparent border-[1px] border-white text-white"
        }
    }
})

type ButtonType = ComponentProps<'button'> & VariantProps<typeof button> & {
    titulo?: string
    icon?: React.ReactNode
    loading?: boolean
}

const Button: React.FC<ButtonType> = ({
    titulo,
    loading,
    type,
    onClick,
    icon,
    color = "primary",
    className
}) => {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            type={type}
            className={button({
                color: color,
                className: className,
                loading: loading
            })}>
            {
                !loading && titulo
            }
            {
                (!loading && icon) && icon
            }
            {
                loading &&
                (
                    <div className='animate-spin'>
                        <AiOutlineLoading />
                    </div>
                )
            }
        </button >
    );
}

export default Button;