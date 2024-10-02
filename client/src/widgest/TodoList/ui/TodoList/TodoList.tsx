import { TodoItem } from '@/entities/todo/ui';
import { ToggleTodoCheckbox } from '@/features/todo/ToggleTodoCheckbox';
import { DeleteTodoButton } from '@/features/todo/DeleteTodoButton';
import s from './TodoList.module.css';
import {useGetTasksQuery} from "@/shared/api";

export const TodoList = () => {
  // const tasks = useAppSelector(selectTodos)
  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTasksQuery();

  if (isLoading) {
    return <div>loading...</div>;
  }  else if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (isSuccess) {
    return (
        <ul className={s.todoList}>
          {tasks.map((task) =>
              <TodoItem
                  key={task.id}
                  togglerSlot={<ToggleTodoCheckbox id={task.id} checked={task.completed} />}
                  actionSlot={<DeleteTodoButton id={task.id} />}
              >
                {task.title}
              </TodoItem>,
          )}
        </ul>
    );
  }
};