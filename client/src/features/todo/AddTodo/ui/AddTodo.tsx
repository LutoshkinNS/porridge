import { Button } from '@/shared/ui/Button/Button.tsx';
import { useState } from 'react';
import { useAddNewTaskMutation } from '@/shared/api/apiSlice.ts';

export type AddTodoProps = {
  className?: string
}

export const AddTodo = (props: AddTodoProps) => {
  const { className } = props;

  const [addNewTask, { isLoading }] = useAddNewTaskMutation();

  const [value, setValue] = useState('');

  const addTask = async () => {
    try {
      await addNewTask({title: value}).unwrap()
    } catch (err) {
      console.error('Failed to save the post: ', err)
    }

    setValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className={className}>
      {/*TODO to change to INPUT components*/}
      <input
        type="text"
        placeholder="what need to do?"
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <Button onClick={addTask} type="submit">Добавить</Button>
    </div>
  );
};