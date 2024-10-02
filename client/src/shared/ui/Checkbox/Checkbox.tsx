import {InputHTMLAttributes} from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = (props: CheckboxProps) => {
    const { ...otherProps} = props

    return (
        <input {...otherProps} type="checkbox"/>
    );
};