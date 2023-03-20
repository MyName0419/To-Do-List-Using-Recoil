import { useRecoilState } from "recoil";
import { toDoListState } from "../recoil_state";
import { Link } from "react-router-dom";

export default function ToDo(todo) {
    const [toDoList, setToDoList] = useRecoilState(toDoListState);


    return (
        <div>
            <nav>
                <Link to={`/${todo.todo.id}`}>{todo.todo.text}</Link>
                <span> {todo.todo.date.toDateString()}</span>
            </nav>
        </div>
    )
}