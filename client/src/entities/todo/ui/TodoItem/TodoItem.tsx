import {HTMLAttributes, ReactNode} from "react";

export interface TodoItemProps extends HTMLAttributes<HTMLLIElement>{
    children: string
    togglerSlot: ReactNode
    actionSlot: ReactNode
}

import s from './TodoItem.module.css'

export const TodoItem = (props: TodoItemProps) => {
    const {children, togglerSlot, actionSlot} = props

    return (
        <li className={s.todoItem}>
            <div>{togglerSlot}</div>
            <span>{children}</span>
            <div>{actionSlot}</div>
        </li>
    );
};