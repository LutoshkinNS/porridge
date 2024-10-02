import {Button} from "@/shared/ui/Button/Button.tsx";
import {useAppDispatch} from "@/shared/model/hooks.ts";
import {removeTask} from "@/entities/todo";

export interface DeleteTodoButtonProps {
    id: number
}

export const DeleteTodoButton = (props: DeleteTodoButtonProps) => {
    const {id} = props

    // TODO model
    const dispatch = useAppDispatch()

    return (
        <Button onClick={() => dispatch(removeTask({id: id}))}>close</Button>
    );
};