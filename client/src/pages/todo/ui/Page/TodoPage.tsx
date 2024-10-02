import {TodoList} from "@/widgest/TodoList";
import {AddTodo} from "@/features/todo/AddTodo";
import s from './TodoPage.module.css'

export function TodoPage() {
    return (
        // <form name="todo">
        <>
            <AddTodo className={s.addTodo}/>
            <TodoList/>
        </>
        // </form>
    );
}
