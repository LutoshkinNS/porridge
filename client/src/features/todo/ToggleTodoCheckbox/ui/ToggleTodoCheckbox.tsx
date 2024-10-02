import {Checkbox} from "@/shared/ui/Checkbox/Checkbox.tsx";
import {changeTaskState} from "@/entities/todo";
import {useAppDispatch} from "@/shared/model/hooks.ts";

export interface ToggleTodoCheckbox {
    id: number
    checked: boolean
}

export const ToggleTodoCheckbox = (props: ToggleTodoCheckbox) => {
    const {checked, id} = props

    // TODO model
    const dispatch = useAppDispatch()

    return (
        <Checkbox checked={checked} onChange={(e) => dispatch(changeTaskState({
            id: id,
            completed: e.target.checked
        }))}/>
    );
};