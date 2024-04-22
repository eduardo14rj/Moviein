import React, { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import { AiOutlineLoading } from "react-icons/ai";

const button = tv({
    base: "py-3 px-6 rounded-lg border-[1px] flex justify-center",
    variants: {
        loading: {
            true: "opacity-60 cursor-auto"
        },
        disabled: {
            true: "opacity-60 cursor-auto"
        },
        color: {
            primary: "bg-primary text-white border-primary",
            red: "bg-redDark text-white border-redDark",
            "outline-white": "bg-transparent border-[1px] border-white text-white",
            "outline-red": "bg-transparent text-redDark border-redDark"
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
    disabled,
    color = "primary",
    className
}) => {
    return (
        <button
            onClick={onClick}
            disabled={loading || disabled}
            type={type}
            className={button({
                color: color,
                className: className,
                loading: loading,
                disabled: disabled
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