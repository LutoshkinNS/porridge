import {TodosType} from "@/app/todos.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: { tasks: TodosType[] } = {
    tasks: []
};

export const todoSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        changeTaskState: (state, action: PayloadAction<{ id: number, completed: boolean }>) => {
            state.tasks.forEach((task, idx) => {
                task.id === action.payload.id ? state.tasks[idx].completed = action.payload.completed : undefined
            })
        },
        removeTask: (state, action: PayloadAction<{ id: number }>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
        },
        addTask: (state, action: PayloadAction<string>) => {
            state.tasks.push({id: state.tasks.length + 2, title: action.payload, completed: false})
        }
    }
})

export const selectTodos = (state: RootState) => state.task.tasks
export const {changeTaskState, removeTask, addTask} = todoSlice.actions

export default todoSlice.reducer