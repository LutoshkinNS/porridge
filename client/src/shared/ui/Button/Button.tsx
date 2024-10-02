import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: string
}

export const Button = (props: ButtonProps) => {
    const {children, ...otherProps} = props

    return (
        <button {...otherProps}>{children}</button>
    );
};